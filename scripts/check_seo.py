"""Validate search metadata in the actual static export before deployment."""
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
from xml.etree import ElementTree


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.meta = {}
        self.canonicals = []
        self.links = []
        self.schemas = []
        self.h1_count = 0
        self.in_title = False
        self.in_schema = False
        self.schema_text = ""
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "title":
            self.in_title = True
        if tag == "h1":
            self.h1_count += 1
        if tag == "meta":
            self.meta[attrs.get("name", attrs.get("property"))] = attrs.get("content", "")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href"))
        if tag == "a":
            self.links.append(attrs.get("href", ""))
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.in_schema = True
            self.schema_text = ""

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_schema:
            self.schema_text += data

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "script" and self.in_schema:
            self.schemas.append(json.loads(self.schema_text))
            self.in_schema = False


output = Path(sys.argv[1] if len(sys.argv) > 1 else "out")
base = "https://parajulisudip.com.np"
routes = ["/", "/projects/", "/cv/"]
titles, descriptions = set(), set()
for route in routes:
    source = (output / route.lstrip("/") / "index.html").read_text()
    page = Page(source)
    expected = base + route
    assert page.canonicals == [expected], f"{route}: incorrect or duplicate canonical"
    assert page.h1_count == 1, f"{route}: expected one main heading"
    for term in ("Sudip Parajuli", "sudipnext"):
        assert term in page.title, f"{route}: name missing from title"
        assert term in page.meta["description"], f"{route}: name missing from description"
    assert page.title not in titles, f"{route}: duplicate title"
    assert page.meta["description"] not in descriptions, f"{route}: duplicate description"
    titles.add(page.title)
    descriptions.add(page.meta["description"])
    assert page.meta["og:url"] == expected, f"{route}: incorrect sharing URL"
    assert page.meta["og:title"] == page.title, f"{route}: inconsistent sharing title"
    assert page.meta["twitter:title"] == page.title, f"{route}: inconsistent Twitter title"
    assert page.meta["og:description"] == page.meta["description"]
    assert page.meta["twitter:description"] == page.meta["description"]
    assert "noindex" not in page.meta.get("robots", "").lower(), f"{route}: blocked indexing"
    assert "width=device-width" in page.meta.get("viewport", ""), f"{route}: missing viewport"
    assert 'lang="en"' in source, f"{route}: missing document language"
    entities = [item for schema in page.schemas for item in schema.get("@graph", [schema])]
    person = next(item for item in entities if item.get("@type") == "Person")
    assert person["name"] == "Sudip Parajuli" and person["alternateName"] == "sudipnext"
    assert person["email"] == "coc42060@gmail.com"
    assert person["address"]["addressLocality"] == "Kathmandu"
    expected_type = "CollectionPage" if route == "/projects/" else "ProfilePage"
    assert any(item.get("@type") == expected_type and item.get("url") == expected for item in entities)
    assert "info@parajulisudip.com.np" not in source and "Dharan, Nepal" not in source
    assert "https://youtu.be/oyYRzqYHRWY" in page.links
    assert "https://youtu.be/62uYFLbEVDE" in page.links
    for href in page.links:
        if href.startswith("/") and not href.startswith("//"):
            path = urlparse(href).path
            target = output / path.lstrip("/")
            if path.endswith("/"):
                target /= "index.html"
            assert target.exists(), f"{route}: broken internal link {href}"
    print(f"PASS {route}: metadata, canonical, identity schema, headings, and links")

sitemap = ElementTree.parse(output / "sitemap.xml")
urls = {node.text for node in sitemap.findall(".//{*}loc")}
assert urls == {base + route for route in routes}, "Sitemap does not match canonical pages"
robots = (output / "robots.txt").read_text()
assert f"Sitemap: {base}/sitemap.xml" in robots and "Allow: /" in robots
assert "Disallow: /\n" not in robots
not_found = Page((output / "404.html").read_text())
assert "noindex" in not_found.meta.get("robots", "").lower(), "404 page should not be indexed"
print("PASS sitemap, robots.txt, and noindex on the 404 page")
