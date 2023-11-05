import { useCallback, useRef } from "react";

import HeroImg3 from "../../public/img/hero/a.jpg";
import HeroImg2 from "../../public/img/hero/hairbackground.jpg";
import HeroImg1 from "../../public/img/hero/scalp.jpg";

import { Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Button } from "./atoms/Button";
import { Image } from "./atoms/Image";
import { Text } from "./atoms/Text";
import { HeroTexts } from "./particles/Data";

const HeroSection = () => {
  const sliderRef = useRef();

  const renderProfileImg = useCallback((element) => {
    switch (element) {
      case 0:
        return HeroImg1;
      case 1:
        return HeroImg2;
      case 2:
        return HeroImg3;
      default:
        return "";
    }
  }, []);

  return (
    <section className=" relative h-auto w-full overflow-x-hidden">
      <div ref={(slider) => (sliderRef.current = slider)} className="h-full">
        {HeroTexts.map((hero, index) => (
          <main
            className=" relative h-screen w-full overflow-x-hidden md:h-[50vh] lg:h-screen"
            key={index}
          >
            <Zoom className="h-full">
              <Image
                className="ml-4 overflow-y-hidden h-1/2 w-full md:h-full md:w-[60%] gap-0 p-2"
                alt="HeroImg1"
                objectCover="object-cover"
                image={renderProfileImg(index)}
              />
            </Zoom>

            <div className="overflow-x-hidden  overflow-y-hidden overflow-x absolute right-0 top-1/2 flex h-1/2 w-full flex-col justify-start gap-2 px-4 md:top-0 md:h-full md:w-[50%] md:justify-center md:gap-4 md:px-6 lg:gap-8 lg:px-20 bg-white">
              <Text
                as="h1"
                className="text-red-600 mt-10 text-4xl font-extrabold md:mt-10 md:text-5xl lg:text-6xl text-600 text-deep-orange-900 drop-shadow-2xl"
              >
                <Slide direction="right">{hero.Heading}</Slide>
              </Text>
              <Text as="h3" className="text-zinc-400 my-4 text-base lg:text-lg">
                <Slide
                  direction="left"
                  className="text-slate-900 text-2xl xl:text-4xl font-extrabold"
                >
                  {hero.Paragraph}
                </Slide>
              </Text>
              <div className="flex items-center gap-8">
                <Slide direction="up">
                  <Link to={hero.to}>
                    <Button
                      type="button"
                      className="whitespace-nowrap bg-gradient-to-r from-red-500 to-amber-500 px-10 py-2.5 font-medium text-black"
                    >
                      {hero.Button}
                    </Button>
                  </Link>
                </Slide>
              </div>
            </div>
          </main>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
