import React from 'react';
import FooterTwo from '../Components/FooterTwo'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function About() {
  return (
    <>
    {/* Container for demo purpose */}
    <div className="bg-white ">
      {/* Section: Design Block */}
      <section className="mb-32 text-center lg:text-left">
        <div className="py-12 md:px-6">
          <div className="container mx-auto xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className=" dark:text-white mb-2 text-3xl font-bold text-primary dark:text-primary-400">
                 About Us
                  </h2>
                  <p className="mb-4 font-semibold text-white text-lg">We Believe in Beautiful Hair, Every Day</p>
                  <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  
                  </p>
                  <p className=" dark:text-white mb-6 text-neutral-500 dark:text-neutral-300 text-justify">
                  Keratin Complex® revolutionized the beauty industry in 2007 when a group of industry innovators discovered a new way to care for your hair by merging proven keratin science with cutting-edge technology. They created Natural Keratin Smoothing Treatment, a first-of-its-kind smoothing treatment that pioneered the way to healthy, smooth, frizz-free hair and winner of the Favorite Smoothing Treatment by Behind the Chair Stylist Choice Award for 8 years in a row. Since then, we have continued to push boundaries and remain the leaders in smoothing with a full collection of customizable keratin treatments for every hair type. 

We are proud to be the #1 product line of choice for salon professionals. Over the years we’ve brought the same power of Keratin to a full line of salon-quality hair care products including a comprehensive keratin-enhanced color line. Our unique formulas are engineered with our proprietary Keratin to eliminate frizz, repair damage, strengthen, and soften for undeniably healthy hair.
                  </p>
                 
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <LazyLoadImage
                  src="./img/a.jpg"
                  className="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
    {/* Container for demo purpose */}
    <FooterTwo />
  </>
  
    
  );
}

export default About
