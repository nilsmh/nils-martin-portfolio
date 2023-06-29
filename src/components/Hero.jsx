import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';
import profilepic from '../assets/profilepic.png';
import profile_pic from '../assets/profile-pic.jpg';

export default function Hero() {
  return (
    <div className="h-screen flex">
      <div className="flex-1 flex">
        <div className="w-26 h-screen pt-[60px] flex flex-col gap-10 items-center shrink-0">
          <a href="https://github.com/nilsmh">
            {' '}
            <img className="h-auto w-[35px]" src={github} alt="Github" />
          </a>

          <a href="https://www.linkedin.com/in/nils-martin-hillesund/">
            <img className="h-auto w-[35px]" src={linkedin} alt="LinkedIn" />
          </a>
          <img className="h-auto w-[35px]" src={gmail} alt="Gmail" />
        </div>
        <div className="pl-26">
          <div className="pt-[50px] text-white text-[30px] font-bold">
            Hi, <span className="text-teal-300">I´m</span> <br /> Nils-Martin{' '}
            <span className="text-teal-300">Hillesund</span>
          </div>
          <div className="pt-[20px] text-white text-[18px] font-regular">
            I am a student at NTNU Trondheim, studying Engineering and ICT, with
            specialisation in Geomatics🌍
          </div>
          <div className="flex flex-col gap-5 pt-[50px]">
            <button className="w-[130px] bg-teal-300 rounded-3xl text-center text-black text-[18px] font-bold hover:bg-transparent hover:text-teal-300">
              Let's talk
            </button>
            <button className="w-[130px]  rounded-3xl text-center border border-teal-300 text-white text-[18px] font-bold  hover:text-teal-300 hover:border-transparent">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 pl-50">
        <img
          className="w-[380px] h-[380px] rounded-full object-cover object-top border-2 border-teal-300 shadow-teal-950 shadow-xl"
          src={profile_pic}
        />
      </div>
    </div>
  );
}
