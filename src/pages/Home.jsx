import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Technology from '../components/Technology';
import Interests from '../components/Interests';

export default function Home() {
  return (
    <div className="relative bg-black w-full">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Technology />
      <Interests />
    </div>
  );
}
