import React, { useState } from "react";

export function FeatureCard({ img, title, description1, description2 }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className=" bg-white overflow-hidden p-6 ">
      <div className="transform transition duration-500 hover:scale-110 m-auto px-6 space-y-8 text-gray-500 md:px-12 ">
        <div>
          <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl text-center">
            {title}
          </h2>
        </div>
        <>
          <>
            <>
              <img
                src={img}
                className="w-max"
                width={512}
                height={512}
                alt="burger illustration"
              />
              <div className="space-y-2">
                <p className="line-clamp-3 text-md text-gray-600"></p>
                {description1}
                <button onClick={() => setExpand(!expand)}>
                  <p className="text-lg text-sky-800" > Read more</p>
                </button>
                {expand ? <p>{description2}</p> : ""}
              </div>
            </>
          </>
        </>
      </div>
    </div>
  );
}

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;

{
  /* <div >

  <div className=" bg-white dark:bg-black" >
 
    <LazyLoadImage 
      className="rounded-lg w-full"
      src={img}
      alt="services"
    />

    
    <h1 className=" dark:text-white  font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
    {title}
    </h1>
 
    <div className="max-w-full">
      <p className="text-base font-medium tracking-wide text-gray-600 mt-1  dark:text-white">
      {description}
      </p>
    </div>
  </div>
</div> */
}
