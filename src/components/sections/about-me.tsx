"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import coding from '/public/images/coding.jpg';
import PythonAndDjango from '/public/images/Python and Django Workshop-2023.jpg'
import RoboticsTrainer from '/public/images/rbtcs.jpg'
import WebScraping from '/public/images/WebScrapingWorkshop2024.jpg'
import CS50XNepal from '/public/images/CS50XNEPAL-DATABASES.jpg'
import CS50xSwags from '/public/images/CS50XNEPAL-SWAGS.jpg'

import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const images = [coding, WebScraping, PythonAndDjango, RoboticsTrainer, CS50XNepal, CS50xSwags];

const AboutMeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image Carousel */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectFit: 'cover' }}
              />
            ))}
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">Hello, I&apos;m Sudip Parajuli</Typography>
          <Typography>
            A skilled Person specializing in Python, Data Science, SQL, and
            JavaScript. I bring a unique blend of technical expertise and
            creative problem-solving abilities to every project. I love teaching
            and sharing my knowledge with others, and I am always looking for
            new opportunities to learn and grow.
          </Typography>
          Skills:
          <ul className="list-disc list-inside">
            <li>
              Proficient in Data Science, Web Scraping, Data Cleaning, and Web
              development using Python(Django, Django Rest Framework), SQL, and
              JavaScript.
            </li>
            <li>
              Experienced in building ecommerce products and dashboards that
              deliver meaningful solutions.
            </li>
            <li>
              Strong knowledge of Web Scraping Libraries like bs4, Scrapy,
              Selenium, mechanicalsoup, requests
            </li>
            <li>
              Skilled in developing web applications and working with databases
              like PostgreSql, Mongodb
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;