import { useCallback } from "react";
import { Fade } from "react-awesome-reveal";
import Offer from "../../public/img/offer.jpg";
import img1 from "../../public/img/icons/hair.png";
import img2 from "../../public/img/icons/massage.png";
import img3 from "../../public/img/icons/yoga.png";

import { Image } from './atoms/Image';


import { List } from "./atoms/List";
import { Text } from './atoms/Text';
import { OfferTexts } from "./particles/Data";
const Offers = () => {
  const renderIcon = useCallback((element) => {
    switch (element) {
        case 0:
          return img1;
        case 1:
          return img2;
        case 2:
          return img3;
        default:
          return "";
      }
  }, []);

  return (
    <section className=" flex h-auto w-full items-center pb-10 mb-12 ">
      <main className="grid w-full items-center gap-10 md:grid-cols-2 md:gap-0 lg:h-[800px] lg:gap-0 ">
        <div className="grid h-[300px] w-full md:h-[800px]">
          <Image
            alt="Offer Image"
            objectCover="object-cover"
            className="h-full w-full pl-3"
            image={Offer}
          />
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center gap-16 px-4 md:justify-end md:gap-20 lg:justify-center lg:gap-24 lg:px-10">
          <Fade className="w-full">
            <div className="before:left-38 relative z-10 mt-10 flex w-full flex-col items-center before:absolute before:-bottom-6 before:h-1 before:w-20 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 lg:mt-24">
              <Text
                as="p"
                className="text-3xl font-extrabold uppercase tracking-widest text-amber-500 lg:text-sm"
              >
                {OfferTexts.firstText}
              </Text>
              <Text
                as="h1"
                className="text-black text-3xl md:text-4xl lg:text-5xl"
              >
                {OfferTexts.secondText}
              </Text>
              {/* <Text as="h1" className="absolute text-zinc-500/10 lg:left-48 md:left-32 left-36 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10">02</Text> */}
            </div>
            <ul className="flex flex-col gap-4 pb-12 lg:gap-5">
              {OfferTexts.list.map((item, index) => (
                <List
                  className="flex items-start justify-start gap-3 lg:gap-2 "
                  key={index}
                >
                  <Image
                className=""
                alt="HeroImg1"
                objectCover="object-cover"
                image={renderIcon(index)}
              />
                  <div className="flex flex-col gap-1 ">
                    <Text
                      as="h3"
                      className="text-black  text-base font-semibold"
                    >
                      {item.listCaption}
                    </Text>
                    <Text as="p" className="text-black text-justify">
                      {item.text}
                    </Text>
                  </div>
                </List>
              ))}
            </ul>
          </Fade>
        </div>
      </main>
    </section>
  );
};

export default Offers;
