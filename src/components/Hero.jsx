import React, { Suspense } from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';
import profilepic from '../assets/profilepic.jpg';
import { Canvas } from '@react-three/fiber';
import Earth from './earth';

export default function Hero() {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full absolute ">
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </div>
      <div className="h-screen flex pointer-events-none ">
        <div className="flex-1 flex z-10">
          <div className="w-26 h-screen pt-[60px] hidden xsm:flex flex-col gap-10 items-center shrink-0">
            <a href="https://github.com/nilsmh">
              {' '}
              <img className="h-auto w-[35px]" src={github} alt="Github" />
            </a>

            <a href="https://www.linkedin.com/in/nils-martin-hillesund/">
              <img className="h-auto w-[35px]" src={linkedin} alt="LinkedIn" />
            </a>
            <img className="h-auto w-[35px]" src={gmail} alt="Gmail" />
          </div>
          <div className="w-full pl-0 xsm:pl-12 lg:pl-26 flex flex-col items-center xsm:items-start ">
            <div className="text-center xsm:text-start pt-[50px] text-white text-[25px] xxsm:text-[30px] font-bold xsm:w-[300px]">
              Hi, <span className="text-teal-300">I´m</span> <br /> Nils-Martin{' '}
              <span className="text-teal-300">Hillesund</span>
            </div>
            <div className="text-center xsm:text-start pt-[20px] text-white text-[15px] xxsm:text-[18px] font-regular w-[300px] xxsm:w-[400px]">
              I am a student at NTNU Trondheim, studying Engineering and ICT,
              majoring in Geomatics🌍
            </div>
            <div className="sm:hidden pt-[20px] z-10 w-[280px] h-[280px] shrink-1">
              <img
                className="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full object-cover object-top border-2 border-teal-300 shadow-teal-950 shadow-xl"
                src={profilepic}
              />
            </div>
            <div className="flex xsm:flex-col justify-around gap-5 pt-[50px]">
              <button className="w-[130px] bg-teal-300 pointer-events-auto rounded-3xl text-center text-black text-[18px] font-bold hover:bg-transparent hover:text-teal-300">
                Let's talk
              </button>
              <button className="w-[130px] pointer-events-auto rounded-3xl text-center border border-teal-300 text-white text-[18px] font-bold  hover:text-teal-300 hover:border-transparent">
                Download CV
              </button>
            </div>
            <div className="pt-[30px] flex xsm:hidden flex-row gap-10 items-center shrink-0">
              <a href="https://github.com/nilsmh">
                {' '}
                <img className="h-auto w-[35px]" src={github} alt="Github" />
              </a>

              <a href="https://www.linkedin.com/in/nils-martin-hillesund/">
                <img
                  className="h-auto w-[35px]"
                  src={linkedin}
                  alt="LinkedIn"
                />
              </a>
              <img className="h-auto w-[35px]" src={gmail} alt="Gmail" />
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-1 xsm:pl-2 md:pl-10 lg:pl-42 xl:pl-48 pt-[50px] z-10 md:mr-18">
          <img
            className="w-[150px] h-[150px] xsm:w-[200px] xsm:h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] rounded-full object-cover object-top border-2 border-teal-300 shadow-teal-950 shadow-xl"
            src={profilepic}
          />
        </div>
      </div>
    </div>
  );
}
