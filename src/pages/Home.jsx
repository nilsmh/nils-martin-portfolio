import React, { useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Technology from '../components/Technology';
import Interests from '../components/Interests';

export default function Home() {
  const experienceRef = useRef(null);
  return (
    <div className="relative bg-black w-full">
      <Header experienceRef={experienceRef} />
      <Hero />
      <Experience ref={experienceRef} />
      <Projects />
      <Technology />
      <Interests />
    </div>
  );
}
