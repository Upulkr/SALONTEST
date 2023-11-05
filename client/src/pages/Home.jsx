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

      <section className=" px-4 pb-10 pt-4 ">
        <div className="container mx-auto">
          <h1
           
            className="text-center font-black xl:text-3xl md:text-2xl uppercase  "
          >
            Our happy clients say about us
          </h1>
        </div>

        <Testomonials />
      </section>

      <section className="  mb-4 px-4 pb-20 pt-4 overflow-y-hidden">
        <div className="container mx-auto overflow-y-hidden">
          <h1
           
            className="mb-8 text-center font-black xl:text-3xl md:text-2xl "
          >
            MEET THE EXPERTS
          </h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 bg-white overflow-x-hidden   overflow-y-hidden ">
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
