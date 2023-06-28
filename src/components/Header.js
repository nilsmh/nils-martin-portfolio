import React from 'react';

export default function Header() {
  return (
    <div class="h-[100px] flex items-center">
      <div class="flex-1 justify-center">
        <div class="pl-50 text-teal-300 text-[30px] font-bold hover:cursor-pointer">
          Nils-Martin Hillesund
        </div>
      </div>
      <div class="flex-1 flex flex-row gap-10">
        <div class="text-white text-[18px] font-semibold hover:text-teal-300 hover:cursor-pointer">
          Experience
        </div>
        <div class="text-white text-[18px] font-semibold hover:text-teal-300  hover:cursor-pointer">
          Projects
        </div>
        <div class="text-white text-[18px] font-semibold hover:text-teal-300  hover:cursor-pointer">
          About me
        </div>
        <button class="w-[130px] h-[50] bg-teal-300 rounded-3xl text-center text-black text-[18px] font-bold hover:bg-teal-600 hover:text-white">
          Contact me
        </button>
      </div>
    </div>
  );
}
