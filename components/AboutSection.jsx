"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disk gap-10  flex pr-2">
        <div>
          {" "}
          <li>Java</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
          <li>C++</li>
          <li>C</li>
        </div>
        <div>
          <li>React Js</li>
          <li>Nextjs</li>
          <li>Tailwindcss</li>
          <li>MUI</li>
          <li>Framer Motion</li>
          <li>GSAP</li>
          <li>Animejs</li>
        </div>
        <div>
          <li>Nodejs</li>
          <li>Express</li>
          <li>Prisma</li>
          <li>REST api</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </div>
        <div>
          <li>Git</li>
          <li>GitHub</li>
          <li>VS Code</li>
          <li>Figma</li>
          <li>Jira</li>
          <li>WebSockets</li>
        </div>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disk pr-2">
        <li>Indian Institute of Information Technology</li>
        <li>B.Tech(Computer Science)</li>
        <li>GPA : 7.08</li>
      </ul>
    ),
  },
  {
    title: "certifications",
    id: "certification",
    content: (
      <ul className="list-disk space-y-2 pr-2">
        <li className=" flex flex-col">
          {" "}
          <p>Full Stack Developer @ Lumio</p>{" "}
          <p className=" text-[11px] text-zinc-500">
            {" "}
            Full-time <span>jan 2025 - present</span>
          </p>{" "}
        </li>
        <li className=" flex flex-col">
          {" "}
          <p>Frontend Developer @ StoryTent</p>{" "}
          <p className=" text-[11px] text-zinc-500">
            {" "}
            Intern <span>April 2024 - july 2024</span>
          </p>{" "}
        </li>
        <li className=" flex flex-col">
          {" "}
          <p>Full Stack Developer under Prof Dr. Bhupendra Kumar</p>{" "}
          <p className=" text-[11px] text-zinc-500">
            {" "}
            Apprenticeship <span>nov 2023 - jan 2024</span>
          </p>{" "}
        </li>
        <li className=" flex flex-col">
          {" "}
          <p>Backend Developer Under Prof Dr. Naveen Kumar, Apprenticeship</p>{" "}
          <p className=" text-[11px] text-zinc-500">
            {" "}
            Apprenticeship <span>May 2023 - Jul 2023</span>
          </p>{" "}
        </li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, settab] = useState("skills");
  const [ispending, startTransition] = useTransition();

  const handeleChange = (id) => {
    startTransition(() => {
      settab(id);
    });
  };

  return (
    <section className=" text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 px-4 sm:py-16 xl:px-16">
        <Image src="/about-image.png" width={500} height={500} />
        <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className=" text-4xl font-bold text-white mb-4">About Me</h2>
          <p className=" text-base md:text-lg">
            About Me I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className=" flex flex-row mt-8">
            <TabButton
              selectTab={() => handeleChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handeleChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton
              selectTab={() => handeleChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className=" mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
