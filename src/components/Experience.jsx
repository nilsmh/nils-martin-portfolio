import { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-screen relative p-10 flex flex-col items-center gap-10"
    >
      <div className="flex justify-center text-white text-[25px] xxsm:text-[30px] font-bold">
        Experience
      </div>
      <div className="flex flex-col items-start gap-6 ml-5 xxsm:ml-0">
        <div className="inline-flex flex-col">
          <div className="flex flex-row items-center">
            <div className="w-[25px] h-[25px] bg-teal-300 rounded-full"></div>
            <div className="ml-[30px] text-white text-[15px] xsm:text-[18px] font-medium">
              Statnett -{' '}
              <span className="hidden xsm:inline text-[15px] xsm:text-[18px] ">
                TDG Geografisk informasjonsystem
              </span>
            </div>
          </div>
          <div>
            <div className="w-[187px] xxsm:w-[160px] additional_helper_breakpoint:w-[133px] xsm:w-[85px] h-[0px] ml-[13.5px] mt-[-2px] origin-top-left rotate-90 border border-teal-300"></div>
            <div className="flex flex-col ml-[55px]">
              <div className="inline xsm:hidden text-white text-[15px] xsm:text-[18px]  font-medium ">
                TDG Geografisk informasjonsystem
              </div>
              <div className="flex flex-row">
                <span className="text-white text-[15px] xsm:text-[18px]  font-medium">
                  Internship
                </span>
                <span className="hidden xsm:inline text-white text-[15px] xsm:text-[18px] font-light">
                  {' '}
                  - Data/GIS-analyst
                </span>
              </div>
              <div className="block xsm:hidden text-white text-[15px] xsm:text-[18px]  font-extralight">
                Data/GIS-analyst
              </div>
              <div className=" text-white text-[15px] xsm:text-[18px] font-extralight">
                January 2023 -{' '}
                <span className="block xxsm:inline text-[15px] xsm:text-[18px] font-extralight">
                  February 2023
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start ">
          <div className="flex flex-row items-center">
            <div className="w-[25px] h-[25px] bg-teal-300 rounded-full"></div>
            <div className="ml-[30px] text-white text-[15px] xsm:text-[18px] font-medium">
              Eika Gruppen
            </div>
          </div>
          <div>
            <div className="w-[133px] xxsm:w-[106px] xsm:w-[85px] h-[0px] ml-[13.5px] mt-[-2px] origin-top-left rotate-90 border border-teal-300"></div>
            <div className="flex flex-col ml-[55px]">
              <div className="flex flex-row">
                <span className="text-white text-[15px] xsm:text-[18px] font-medium">
                  Summer Internship
                </span>
                <span className="hidden xsm:inline text-white text-[15px] xsm:text-[18px] font-light">
                  {' '}
                  - Full stack developer
                </span>
              </div>
              <div className="block xsm:hidden text-white text-[15px] xsm:text-[18px] font-extralight">
                Full stack developer
              </div>
              <div className=" text-white text-[15px] xsm:text-[18px] font-extralight">
                June 2022 -{' '}
                <span className="block xxsm:inline text-[15px] xsm:text-[18px] font-extralight">
                  August 2022
                </span>
              </div>{' '}
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start ">
          <div className="flex flex-row items-center">
            <div className="w-[25px] h-[25px] bg-teal-300 rounded-full"></div>
            <div className="ml-[30px] text-white text-[15px] xsm:text-[18px] font-medium">
              Enernite
            </div>
          </div>
          <div>
            <div className="w-[133px] xxsm:w-[106px] xsm:w-[85px] h-[0px] ml-[13.5px] mt-[-2px] origin-top-left rotate-90 border border-teal-300"></div>
            <div className="flex flex-col ml-[55px]">
              <div className="flex flex-row">
                <span className="text-white text-[15px] xsm:text-[18px] font-medium">
                  Part time
                </span>
                <span className="hidden xsm:inline text-white text-[15px] xsm:text-[18px] font-light">
                  {' '}
                  - Full stack developer
                </span>
              </div>
              <div className="block xsm:hidden text-white text-[15px] xsm:text-[18px] font-extralight">
                Full stack developer
              </div>
              <div className=" text-white text-[15px] xsm:text-[18px] font-extralight">
                August 2021 -{' '}
                <span className="block xxsm:inline text-[15px] xsm:text-[18px] font-extralight">
                  June 2022
                </span>
              </div>{' '}
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start ">
          <div className="flex flex-row items-center">
            <div className="w-[25px] h-[25px] bg-teal-300 rounded-full"></div>
            <div className="ml-[30px] text-white text-[15px] xsm:text-[18px] font-medium">
              Enernite
            </div>
          </div>
          <div>
            <div className="w-[133px] xxsm:w-[106px] xsm:w-[85px] h-[0px] ml-[13.5px] mt-[-2px] origin-top-left rotate-90 border border-teal-300"></div>
            <div className="flex flex-col ml-[55px]">
              <div className="flex flex-row">
                <span className="text-white text-[15px] xsm:text-[18px] font-medium">
                  Summer Internship
                </span>
                <span className="hidden xsm:inline text-white text-[15px] xsm:text-[18px] font-light">
                  {' '}
                  - Frontend developer
                </span>
              </div>
              <div className="block xsm:hidden text-white text-[15px] xsm:text-[18px]font-extralight">
                Frontend developer
              </div>
              <div className=" text-white text-[15px] xsm:text-[18px] font-extralight">
                June 2021 -{' '}
                <span className="block xxsm:inline text-[15px] xsm:text-[18px] font-extralight">
                  August 2021
                </span>
              </div>{' '}
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col justify-start items-start ">
          <div className="flex flex-row items-center">
            <div className="w-[25px] h-[25px] bg-teal-300 rounded-full"></div>
            <div className="ml-[30px] text-white text-[15px] xsm:text-[18px] font-medium">
              Teknologiporten
            </div>
          </div>
          <div>
            <div className="flex flex-col ml-[55px]">
              <div className="flex flex-row">
                <span className="text-white text-[15px] xsm:text-[18px] font-medium">
                  Volentary
                </span>
                <span className="hidden xsm:inline text-white text-[15px] xsm:text-[18px] font-light">
                  {' '}
                  - Web developer
                </span>
              </div>
              <div className="block xsm:hidden text-white text-[15px] xsm:text-[18px] font-extralight">
                Web developer
              </div>
              <div className=" text-white text-[15px] xsm:text-[18px] font-extralight">
                August 2019 -{' '}
                <span className="block xxsm:inline text-[15px] xsm:text-[18px] font-extralight">
                  June 2021
                </span>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Experience;
