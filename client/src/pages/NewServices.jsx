import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import { Slide } from "react-awesome-reveal";
export default function Example() {
    return (
      <div className="relative overflow-hidden bg-white  pt-11 mt-12">
        <div className="pb-80 pt-3  sm:pb-40  lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className=" text-black text-4xl font-bold tracking-tight  sm:text-6x  dark:text-whitel">
             <Slide direction="left"> Salon Toronto - Where Wellness Comes to You</Slide>
              </h1>
              <p className="mt-4 text-xl   text-black">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesnt care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl "
                >
                  <div className="m-8 absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 pt-11">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 ">
                          <LazyLoadImage
                            src='/img/services hair/cutting.png'
                            alt=""
                            className="h-full w-full object-cover object-center hover:bg-sky-700  "
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <LazyLoadImage
                            src="./img/services hair/coloring.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <LazyLoadImage
                            src="./img/services hair/hairEx.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <LazyLoadImage
                            src="./img/services hair/wax.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <LazyLoadImage
                            src="./img/services hair/treatment.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <LazyLoadImage
                            src="./img/body/ayuravedic.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <LazyLoadImage
                            src="./img/body/3.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="  inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
            
               <Link to='/Services'  className=" dark:text-white">See hair and body treatment collection</Link>
                  
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  