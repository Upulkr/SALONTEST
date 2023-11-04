import "@dotlottie/player-component";

import { IconButton, Typography } from "@material-tailwind/react";
import { teamData } from "./../../public/data/team-data";
import Footer from '../Components/footer'
import Call from "./Call";
import ChatBox from "./ChatBox";
import HeroSection from "./HeroSection";
import Example from "./NewServices";
import Offers from "./Offers";
import Saloon from "./Saloon";
import Testomonials from "./Testomonials";
import { TeamCard } from "./cards/team-card";

export function Home() {
  return (
    <div className="overflow-y-hidden bg-white">
      <HeroSection />

      <Saloon />
      <Offers />
      <section className=" m-5 pt-12 bg-white  overflow-y-hidden">
        <Example />
      </section>

      <section className="m-7 px-4 pb-10 pt-4 bg-white ">
        <div className="container mx-auto">
          <Typography
            variant="h1"
            color="black"
            className="mb-8 text-center font-black  dark:text-white"
          >
            Our happy clients say about us
          </Typography>
        </div>

        <Testomonials />
      </section>

      <section className=" bg-white  px-4 pb-20 pt-4 overflow-y-hidden">
        <div className="container mx-auto overflow-y-hidden">
          <Typography
            variant="h1"
            color="Black"
            className="mb-8 text-center font-black  dark:text-white"
          >
            MEET THE EXPERTS
          </Typography>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 bg-white overflow-y-hidden ">
            {teamData.map(({ img, name, position, socials, id }) => (
              <TeamCard
                key={id}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <Call />
      <div className=" bg-white overflow-y-hidden">
        <Footer />
      </div>
      <div>
        <ChatBox />
      </div>
    </div>
  );
}

export default Home;
