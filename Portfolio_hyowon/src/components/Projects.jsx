import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project/cinerium.png";
import project2 from "../assets/project/project2.png";

const projects = [
  {
    id: 1,
    title: "Cinerium",
    date: "2024.10 ~ 2024.11",
    description: [
      "SSAFY 1학기 관통 프로젝트로 영화 추천 사이트의 웹 프론트를 담당했습니다. Vue를 사용했으며 axios를 이용해 데이터 요청과 전처리를 담당했습니다.",
      "또한 영화 토론이 가능한 AI 토론 기능 또한 추가했습니다.",
    ],
    image: project1,
    githubLink: "https://github.com/SSAFY-MZ-PJT/SSAFY_MZ_PJT?tab=readme-ov-file",
  },
  {
    id: 2,
    title: "React Projects",
    date: "2024.12",
    description: [
      "Udemy React 강의를 들으면서 약 10개 이상의 프로젝트를 만들었습니다.",
      "각각의 프로젝트는 React의 기초 기능부터 심화 기능까지 사용했으며, 특히 useState와 Ref를 활용한 프로젝트에 집중했습니다. 이후 다양한 애니메이션을 추가한 웹사이트 제작 예정입니다.",
    ],
    image: project2,
    githubLink: "https://github.com/chilly003/React_study",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container overflow-y-auto pb-16 relative">
      <h2 className="main-title font-bold textC mb-16 mt-16 text-center text-3xl sm:text-4xl md:text-5xl">
        Projects
      </h2>

      {/* 프로젝트 리스트 */}
      <div className="flex flex-col gap-12 mt-4 mx-auto max-w-screen-lg">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 이미지 */}
            <div className="relative w-full md:w-1/2 h-[400px] overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter blur-sm transition-all duration-300 hover:blur-none"
              />
            </div>

            {/* 텍스트 및 링크 */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1278FF]">{project.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">{project.date}</p>
              <hr />
              {project.description.map((paragraph, idx) => (
                <p key={idx} className="text-xs sm:text-sm md:text-base text-[#002C75]">
                  {paragraph}
                </p>
              ))}

              {/* GitHub 텍스트 링크 */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 font-semibold text-[#1278FF] hover:text-[#00195C] transition-colors duration-300"
              >
                Visit GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
