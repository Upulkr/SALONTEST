import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IconButton,
  MobileNav,

} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {


  const [open, setOpen] = useState(false);



  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  return (
    <header className="font-sans shadow-md ">
      <section className="max-sm:flex-col max-lg:min-h-[60px]  relative flex items-center border-b border-gray-200 px-10 py-3 lg:min-h-[80px] lg:justify-center">
        <Link to="/" className="max-md:w-full max-sm:mb-4">
          <img src="/img/logo.png" alt="logo" className="w-36 md:w-[170px] " />
        </Link>
        <NavLink to='/'className={({ isActive }) => (isActive ? "hover:text-amber-600 G" : "")} >  <h2 className="uppercase"> Salon Toronto</h2></NavLink>
      
        <div className=" max-md:ml-auto mx-auto flex items-center md:absolute md:right-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-6 cursor-pointer hover:fill-[#007bff]"
            width="20px"
            height="20px"
            viewBox="0 0 512 512"
          >
            <path
              d="M449.643 0H62.357C27.973 0 0 27.973 0 62.357v387.285C0 484.027 27.973 512 62.357 512H260.86c8.349 0 15.118-6.769 15.118-15.118v-183.31c0-8.349-6.769-15.118-15.118-15.118h-54.341v-43.033h54.341c8.349 0 15.118-6.769 15.118-15.118v-61.192c0-33.116 26.942-60.058 60.059-60.058h52.433v43.033h-52.433c-9.387 0-17.025 7.639-17.025 17.026v61.192c0 8.349 6.769 15.118 15.118 15.118h54.341v43.033H334.13c-8.349 0-15.118 6.769-15.118 15.118v183.31c0 8.349 6.769 15.118 15.118 15.118h115.513C484.027 512 512 484.027 512 449.643V62.357C512 27.973 484.027 0 449.643 0zm32.121 449.643c0 17.712-14.409 32.122-32.122 32.122H349.246V328.69h54.341c8.349 0 15.118-6.769 15.118-15.118v-73.268c0-8.349-6.769-15.118-15.118-15.118h-54.341v-32.864h54.341c8.349 0 15.118-6.769 15.118-15.118v-73.268c0-8.349-6.769-15.118-15.118-15.118h-67.551c-49.788 0-90.294 40.506-90.294 90.294v46.074h-54.341c-8.349 0-15.118 6.769-15.118 15.118v73.268c0 8.349 6.769 15.118 15.118 15.118h54.341v153.074H62.357c-17.712 0-32.122-14.409-32.122-32.122V62.357c0-17.712 14.409-32.122 32.122-32.122h387.285c17.712 0 32.122 14.409 32.122 32.122v387.286z"
              data-original="#000000"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-6 cursor-pointer hover:fill-[#007bff]"
            width="20px"
            height="20px"
            viewBox="0 0 409.61 409.61"
          >
            <path
              d="M307.205 0h-204.8C46.09 0 .005 46.085.005 102.4v204.81c0 56.3 46.085 102.4 102.4 102.4h204.8c56.315 0 102.4-46.1 102.4-102.4V102.4c0-56.315-46.085-102.4-102.4-102.4zm68.265 307.21c0 37.632-30.612 68.265-68.265 68.265h-204.8c-37.637 0-68.265-30.633-68.265-68.265V102.4c0-37.642 30.628-68.265 68.265-68.265h204.8c37.653 0 68.265 30.623 68.265 68.265v204.81z"
              data-original="#000000"
            />
            <circle cx="315.755" cy="93.865" r="25.6" data-original="#000000" />
            <path
              d="M204.805 102.4c-56.566 0-102.4 45.839-102.4 102.4 0 56.54 45.834 102.41 102.4 102.41 56.55 0 102.4-45.87 102.4-102.41 0-56.561-45.85-102.4-102.4-102.4zm0 170.675c-37.699 0-68.265-30.566-68.265-68.275s30.566-68.265 68.265-68.265 68.265 30.556 68.265 68.265-30.566 68.275-68.265 68.275z"
              data-original="#000000"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-6 cursor-pointer hover:fill-[#007bff]"
            width="20px"
            height="20px"
            viewBox="0 0 682.667 682.667"
          >
            <defs>
              <clipPath id="Link" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000" />
              </clipPath>
            </defs>
            <g
              clipPath="url(#Link)"
              transform="matrix(1.33 0 0 -1.33 0 682.667)"
            >
              <path
                d="M140.008 89h-30c-11.046 0-20 8.954-20 20v186c0 11.046 8.954 20 20 20h30c11.045 0 20-8.954 20-20V109c0-11.046-8.955-20-20-20m-13.991 257C103.311 346 85 364.368 85 387.003 85 409.632 103.311 428 126.017 428c22.616 0 40.977-18.368 40.977-40.997 0-22.635-18.361-41.003-40.977-41.003M402 89h-29c-11.046 0-20 8.954-20 20v90.341c0 26.121-1.164 59.726-37.092 59.726-36.429 0-43.908-28.47-43.908-57.856V109c0-11.046-8.954-20-20-20h-28c-11.046 0-20 8.954-20 20v186c0 11.046 8.954 20 20 20h28c11.046 0 20-8.954 20-20v-10.741h.065c9.334 17.708 32.19 34.741 66.249 34.741C409.186 319 422 274.002 422 213.336V109c0-11.046-8.954-20-20-20"
                data-original="#000000"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="40"
                d="M492 80c0-33.137-26.863-60-60-60H80c-33.137 0-60 26.863-60 60v352c0 33.137 26.863 60 60 60h352c33.137 0 60-26.863 60-60V181"
                data-original="#000000"
              />
            </g>
          </svg>
        </div>
      </section>
      <div className="flex min-h-[50px] flex-wrap items-center overflow-x-auto px-10">
        <div className="ml-auto md:hidden">
          <IconButton
            variant="text"
            size="sm"
            color="white"
            className="bg-white text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent dark:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <MobileNav 
          className="rounded-xl bg-white px-4 pb-4 pt-2 text-blue-gray-900 dark:text-white"
          open={open}
        >
          <div className="mx-auto dark:text-white ">
            <ul className="text-center">
            {pageTitle.map((t)=><li className=" max-lg:border-b max-lg:py-2 text-[#007bff] sm:mx-2" key={t.id}>
            <NavLink
              to={t.path}
              className={({ isActive }) => (isActive ? "underline underline-offset-1 decoration-4  decoration-amber-500 rounded-lg" : "")}
            >
             {t.title}
            </NavLink>
          </li>)}
            </ul>
          </div>
        </MobileNav>
        <ul className=" mb-4 max-lg:space-y-3 max-lg:block max-lg:mt-2 invisible flex w-full justify-center sm:visible lg:space-x-10 ">
          {pageTitle.map((t)=><li className=" max-lg:border-b max-lg:py-2 text-[#007bff] sm:mx-2" key={t.id}>
            <NavLink
              to={t.path}
              className={({ isActive }) => (isActive ? "underline underline-offset-4 decoration-4  decoration-amber-500 rounded-lg" : "")}
            >
             {t.title}
            </NavLink>
          </li>)}
          

        
        </ul>
      </div>
    </header>
  );
}

export const pageTitle = [
  {
    id: 1,
    title: "Home",
    path:'/'
  },
  {
    id: 2,
    title: "Services",
    path:'/services'
  },
  {
    id: 2,
    title: "About",
    path:'/about'
  },
  {
    id: 3,
    title: "Contact",
    path:'/contact'
  },
  {
    id: 4,
    title: "Book An Appointment",
    path:'/booking'
  },
];
