import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';

export default function Header({ experienceRef, projectsRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (e) => {
    e.preventDefault();
    switch (e.target.innerHTML) {
      case 'Experience':
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-[100px] relative m-0 p-0 w-full flex items-center">
      <div className="flex md:flex-1 w-full">
        <div className="xsm:flex-1 items-center md:justify-start pl-8 xsm:pl-16 md:pl-16 lg:pl-50  text-teal-300 text-[20px] xsm:text-[25px] md:text-[25px] lg:text-[30px] font-bold hover:cursor-pointer">
          Nils-Martin Hillesund
        </div>
        <div className="md:hidden flex-1 flex items-center justify-end pr-8 xsm:pr-16 text-white ">
          <Bars3Icon
            className="h-6 w-6 xsm:h-8 xsm:w-8 text-white"
            onClick={handleMenu}
          />
        </div>
      </div>
      <div className="flex-1 hidden md:flex flex-row lg:gap-7 md:gap-8 md:justify-end pr-16 xl:pr-40 ">
        <div
          onClick={scrollToSection}
          className="text-white md:text-[15px] lg:text-[18px] font-semibold hover:text-teal-300 hover:cursor-pointer"
        >
          Experience
        </div>
        <div
          onClick={scrollToSection}
          className="text-white md:text-[15px] lg:text-[18px] font-semibold hover:text-teal-300  hover:cursor-pointer"
        >
          Projects
        </div>
        <div className="text-white md:text-[15px] lg:text-[18px] font-semibold hover:text-teal-300  hover:cursor-pointer">
          About me
        </div>
        <button className="md:w-[110px] lg:w-[130px] md:h-[40] lg:h-[50] bg-teal-300 rounded-3xl text-center text-black md:text-[15px] lg:text-[18px] font-semibold hover:bg-transparent hover:text-teal-300">
          Contact me
        </button>
      </div>
      {menuOpen ? (
        <div className="md:hidden absolute flex flex-col  text-[20px] font-semibold text-white pt-4 pl-12 mr-8 xsm:mr-16 w-50 h-50 top-[61px] right-0 bg-black z-50 rounded-br-2xl rounded-l-2xl shadow-inner drop-shadow-md shadow-teal-300">
          <div className="flex-1 hover:text-teal-300">Experience</div>
          <div className="flex-1 hover:text-teal-300">Projects</div>
          <div className="flex-1 hover:text-teal-300">About me</div>
          <div className="flex-1 hover:text-teal-300">Contact me</div>
        </div>
      ) : null}
    </div>
  );
}
