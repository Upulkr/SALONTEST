// import { Image } from "./atoms/Image";
import ContactImg from "../../public/img/call.jpg";

// import { Text } from "./atoms/Text";
// import { ContactTexts } from "./particles/Data";
// import { Button } from "./atoms/Button";
import { Link } from "react-router-dom";
import { Image } from './atoms/Image';
import { Button } from './atoms/Button';
import { Text } from './atoms/Text';
import { ContactTexts } from "./particles/Data";

const Call = () => {
  return (
    <section className="mb-3 relative h-ful w-full md:h-[400px] mt-3">
      <img
        alt="Contact Image"
        className="h-fit"
        
       src={ContactImg}
      />
      <div className="bg-zinc-900/70 absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-2">
        <Text className=" text- text-3xl font-medium uppercase tracking-widest text-white  md:text-sm lg:text-5xl">
          {ContactTexts.firstText}
        </Text>
        <Text
          as="h1"
          className="text-4xl text-white md:text-4xl lg:text-5xl"
        >
          {ContactTexts.phone}
        </Text>
        <Text
          as="p"
          className="my-6 w-4/5 text-center text-xl text-white md:w-1/2"
        >
          {ContactTexts.paragraph}
        </Text>
        <Link to="./booking">
          <Button
            className="whitespace-nowrap bg-gradient-to-r from-red-500 to-amber-500 px-10 py-2.5 font-medium text-white"
            type="button"
          >
            {ContactTexts.button}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Call;
