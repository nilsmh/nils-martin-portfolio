import React from 'react';

export default function Header() {
  return (
    <div className="h-[100px] flex items-center">
      <div className="flex-1 justify-center">
        <div className="pl-50 text-teal-300 text-[30px] font-bold hover:cursor-pointer">
          Nils-Martin Hillesund
        </div>
      </div>
      <div className="flex-1 flex flex-row gap-10">
        <div className="text-white text-[18px] font-semibold hover:text-teal-300 hover:cursor-pointer">
          Experience
        </div>
        <div className="text-white text-[18px] font-semibold hover:text-teal-300  hover:cursor-pointer">
          Projects
        </div>
        <div className="text-white text-[18px] font-semibold hover:text-teal-300  hover:cursor-pointer">
          About me
        </div>
        <button className="w-[130px] h-[50] bg-teal-300 rounded-3xl text-center text-black text-[18px] font-semibold hover:bg-transparent hover:text-teal-300">
          Contact me
        </button>
      </div>
    </div>
  );
}
