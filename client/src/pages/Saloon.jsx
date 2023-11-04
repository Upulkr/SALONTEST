import { Fade } from "react-awesome-reveal";
import Image1 from "../../public/img/call.jpg";
import { Image } from "./atoms/Image";
import { Text } from "./atoms/Text";
import { AboutTexts } from "./particles/Data";

const Saloon = () => {
  return (
    <section className="w-full h-auto flex items-center ">
      <main className="w-full md:h-[700px] grid md:grid-cols-2 items-center lg:mx-20 md:mx-10 mx-6 gap-5 md:gap-10 pb-5 md:py-0">
        <div className="h-full w-full md:order-1 order-2 flex flex-col justify-center items-start gap-4 pb-8 md:pb-12">
          <Fade>
            <div className="flex flex-col mt-10 items-start relative before:absolute before:-bottom-6 before:left-0 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
              <Text className="text-amber-500 lg:text-sm xl:text-3xl text-xs tracking-widest uppercase font-medium">
                {AboutTexts.firstText}
              </Text>
              <Text
                as="h1"
                className="text-black-100 lg:text-5xl md:text-4xl text-3xl"
              >
                {AboutTexts.secondText}
              </Text>
            </div>
            <Text as="h2" className="text-blackc mt-10 mb-4 text-lg">
              {AboutTexts.caption}
            </Text>
            <Text as="p" className="text-black text-justify text-base">
              {AboutTexts.paragraph1}
            </Text>
          </Fade>
        </div>
        <div className="w-full md:h-[400px] h-[300px] md:order-2 order-1 grid grid-cols-3 grid-rows-3 ">
          <Image
            alt="Welcome Image"
            objectCover="object-cover"
            className="'justify-end col-span-3 row-span-2 w-full h-full"
            image={Image1}
          />
          {/* <Image alt="Welcome Image" objectCover="object-cover" className="w-full h-full" image={Image2} />
                    <Image alt="Welcome Image" objectCover="object-cover" className="w-full h-full border border-amber-500" image={Image3} />
                    <Image alt="Welcome Image" objectCover="object-cover" className="w-full h-full" image={Image4} /> */}
        </div>
      </main>
    </section>
  );
};

export default Saloon;
