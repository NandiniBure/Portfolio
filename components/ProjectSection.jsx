"use client"
import React from 'react'
import ProjectCard from './ProjectCard'
import Link from 'next/link';
import ProjectTag from './ProjectTag';
import { useState } from 'react';
const projectsData = [
    {
      id: 1,
      title: "Shoping App Ui",
      description: "Project 1 description",
      image: "/shopify.png",
      tag: ["All", "Frontend"],
      gitUrl: "https://github.com/NandiniBure/E-com",
      previewUrl: "https://e-com-snowy.vercel.app/",
    },
    {
      id: 2,
      title: "Movix",
      description: "Project 2 description",
      image: "/movex.png",
      tag: ["All", "Frontend"],
      gitUrl: "https://github.com/NandiniBure/Movix",
      previewUrl: "https://project-gamma-brown.vercel.app/",
    },
    {
      id: 3,
      title: "Apple Website Clone",
      description: "Project 3 description",
      image: "/apple.png",
      tag: ["All", "Frontend"],
      gitUrl: "https://github.com/NandiniBure/Apple-Website-Clone",
      previewUrl: "https://apple-website-clone-blue.vercel.app/",
    },
    {
      id: 4,
      title: "Ecom Full Stack",
      description: "Project 4 description",
      image: "/Ecom.png",
      tag: ["All", "Full Stack"],
      gitUrl: "https://github.com/NandiniBure/full-stack-ecom",
      previewUrl: "https://full-stack-ecom-7ci2eo37i-nandinibures-projects.vercel.app/",
    },
  ];
  

const ProjectSection = () => {
    const [tag,settag]=useState("All")

    const handleTagChange=(newTag)=>{
        settag(newTag)
    }

    const filterProjects=projectsData.filter((project)=>
        project.tag.includes(tag)
    )

  return (
    <div>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Project</h2>
    <div className=' text-white flex flex-row justify-center items-center gap-2 py-6 '>
    <ProjectTag onClick={handleTagChange}
    name="All" active={tag}></ProjectTag>
     <ProjectTag onClick={handleTagChange}
    name="Frontend" active={tag}></ProjectTag>
     <ProjectTag onClick={handleTagChange}
    name="Full Stack" active={tag}></ProjectTag>
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{filterProjects.map((project)=>
    <ProjectCard key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        tag={project}
    />)}</div>
    </div>
  )
}

export default ProjectSection