import Image from 'next/image';

import coding from '/public/images/coding.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={coding}
              alt="coding of sudipnext"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Hello, I&apos;m Sudip Parajuli
          </Typography>
          <Typography>
            A highly skilled specializing in Data Science, Python, SQL, and JavaScript. With a strong background in Electronics, Communication, and Information Engineering, I bring a unique blend of technical expertise and creative problem-solving abilities to every project. I love teaching and sharing my knowledge with others, and I am always looking for new opportunities to learn and grow.
          </Typography>
            Skills:
            <ul className="list-disc list-inside">
              <li>Proficient in Data Science, Web Scraping, Data Cleaning, and Web development using Python(Django, Django Rest Framework), SQL, and JavaScript.</li>
              <li>Experienced in building ecommerce products and dashboards that deliver meaningful solutions.</li>
              <li>Strong knowledge of Web Scraping Libraries like bs4,Scrapy, Selenium, mechanicalsoup, requests</li>
              <li>Skilled in developing web applications and working with databases like PostgreSql, Mongodb</li>
            </ul>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
