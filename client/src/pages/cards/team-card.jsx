import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

import { LazyLoadImage } from "react-lazy-load-image-component";

export function TeamCard({ img, name, position,  }) {
 

 
  return (
    <Card
      className=" mb-3 overflow-y-hidden  bg-white  sm:flex-col-1 md:flex-cols-2 lg:flex-cols-3 xl:flex-cols-4 2xl:flex-cols-6  w-100 ... transition delay-150 duration-300 ease-in-out  hover:-translate-y-1 hover:scale-110"
      color=""
      variant="gradient"
    >
      <CardHeader
        floated={false}
        className=" rounded object-cover object-center"
      ></CardHeader>
      <CardBody className="text-center ">
        <LazyLoadImage
          variant="gradient"
          // color={color}
          src={img}
        />
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2  text-center  "
        >
          {name}
        </Typography>
        <Typography color="black" className="text-center font-medium ">
          {position}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2"></CardFooter>
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
