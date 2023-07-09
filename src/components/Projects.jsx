import { forwardRef } from 'react';
import gis_app from '../assets/gisapp.png';
import computer_vision from '../assets/computer-vision.png';
import jarvis from '../assets/jarvis.png';
import coronamap from '../assets/coronamap.png';

const Projects = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-screen relative p-10 flex flex-col items-center gap-10"
    >
      <div className="flex justify-center text-white text-[25px] xxsm:text-[30px] font-bold">
        Projects
      </div>
      <div className="flex flex-wrap gap-x-20 gap-y-10 justify-center w-[70%]">
        <div className="w-[450px] duration-700 hover:scale-110">
          <img
            src={gis_app}
            alt="GIS Application"
            className="w-[450px] h-[250px] object-cover rounded-lg"
          />

          <h1 className="text-white text-center">GIS Application </h1>
        </div>
        <div className="w-[450px] duration-700 hover:scale-110">
          <img
            src={computer_vision}
            alt="Computer Vision Lidar Project"
            className="w-[450px] h-[250px] object-cover rounded-lg"
          />
          <h1 className="text-white text-center">
            Computer vision and neural network <br /> Computer Vision Lidar
            Project
          </h1>
        </div>
        <div className="w-[450px] duration-700 hover:scale-110">
          <img
            src={jarvis}
            alt="Jarvis"
            className="w-[450px] h-[250px] object-contain rounded-lg"
          />
          <h1 className="text-white text-center">Jarvis Voice Assistant</h1>
        </div>
        <div className="w-[450px] duration-700 hover:scale-110">
          <img
            src={coronamap}
            alt="Corona Map"
            className="w-[450px] h-[250px] object-contain rounded-lg"
          />
          <h1 className="text-white text-center">Corona Map</h1>
        </div>
      </div>
    </div>
  );
});

export default Projects;
