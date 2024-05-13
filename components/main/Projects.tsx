import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Gym.png"
          title="NenyeFitGym"
          description="Web-based platform that allows users to search, book, and manage gym sessions from various providers, providing a convenient and efficient solution for fitness and health needs."
        />
        <ProjectCard
          src="/Draycore.png"
          title="House Hunter"
          description="Web application that enables users to search for houses & properties listed, view estimated sale/rent ranges for listings, and locate available houses based on their current location."
        />
        <ProjectCard
          src="/Househunter.png"
          title="Draycore"
          description="A comprehensive versatile web application for the sale of software services to the general public. it presents an accessible platform for software solutions catering to diverse user needs."
        />
      </div>
    </div>
  );
};

export default Projects;