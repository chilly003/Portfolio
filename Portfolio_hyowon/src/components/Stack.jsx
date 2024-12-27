import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css"; // 공통 스타일 포함

import django from "../assets/stack/django.png";
import react from "../assets/stack/react.png";
import vue from "../assets/stack/vue.png";
import python from "../assets/stack/python.png";
import js from "../assets/stack/js.png";
import java from "../assets/stack/java.png";
import figma from "../assets/stack/figma.png";
import axios from "../assets/stack/axios.png";
import tailwind from "../assets/stack/tailwind.png";
import nextjs from "../assets/stack/nextjs.png";
import git from "../assets/stack/git.png";
import github from "../assets/stack/github.png";

// 데이터 배열
const categories = {
  Languages: [
    { src: python, name: "Python", description: "알고리즘 문제 해결 및 데이터 분석에 강점이 있으며, 프로그램 및 시스템을 개발할 수 있습니다." },
    { src: js, name: "JavaScript", description: "라이브러리 및 내장 함수들의 동작원리를 이해하고 있으며 기본적인 기능을 충분히 구현할 수 있습니다." },
    { src: java, name: "Java", description: "최근 학습을 시작했으며, 객체지향 프로그래밍의 이해를 기반으로 알고리즘 문제 해결에 사용하고 있습니다." },
  ],
  Frontend: [
    { src: react, name: "React", description: "state와 ref를 통해 동적 데이터 관리, 컴포넌트 간 데이터 흐름 관리에 집중하고 있습니다." },
    { src: vue, name: "Vue", description: "사용자 친화적인 인터페이스 구축 경험이 있으며, 상태 관리 및 컴포넌트 재사용을 통해 효율적인 개발을 진행했습니다." },
    { src: tailwind, name: "TailwindCSS", description: "리액트에 사용되는 기초적인 디자인 방향을 테일윈드로 잡았습니다." },
    { src: axios, name: "Axios", description: "DB에서 데이터 요청 전처리를 할 수 있습니다." },
    { src: nextjs, name: "Next.js", description: "SSG, SSR, CSR를 활용할 수 있습니다." },
  ],
  Backend: [
    { src: django, name: "Django", description: "백엔드 개발 경험이 있으며, RESTful API 설계 및 데이터베이스 관리에 활용하고 있습니다." },
  ],
  ETC: [
    { src: figma, name: "Figma", description: "UI/UX 디자인 툴로, 웹사이트 및 애플리케이션의 프로토타입 제작에 활용했습니다." },
    { src: git, name: "Git", description: "코드 버전 관리 및 협업에 사용하며, git 충돌 해결 경험이 있습니다." },
    { src: github, name: "GitHub", description: "코드 버전 관리 및 협업에 사용하며, git 충돌 해결 경험이 있습니다." },
  ],
};

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState("Languages"); // 현재 선택된 카테고리
  const [hoveredIndex, setHoveredIndex] = useState(null); // 현재 호버된 이미지 인덱스

  return (
    <motion.section
      id="stack"
      className="section-container bg-blueB"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5 }}
    >
      {/* 제목 */}
      <h2 className="main-title font-bold textC mb-8">Skills</h2>

      {/* 설명 */}
      <p className="textC max-w-xl text-center">
        I am a web developer with a passion for creating beautiful and functional websites.
        I specialize in React, JavaScript, and modern web technologies.
      </p>

      {/* 카테고리 네비게이션 */}
      <div className="flex justify-center gap-8 mt-12">
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer pb-2 relative ${
              selectedCategory === category ? "text-[#1278FF]" : "text-gray-500"
            }`}
          >
            {/* 카테고리 이름 */}
            {category}

            {/* 밑줄 */}
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#1278FF] transition-transform duration-300 ${
                selectedCategory === category ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transformOrigin: 'left' }}
            ></span>
          </div>
        ))}
      </div>

      {/* 기술 아이콘 섹션 */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {categories[selectedCategory].map((stack, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* 이미지 */}
            <motion.img
              src={stack.src}
              alt={stack.name}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        ))}
      </div>

      {/* 말풍선 */}
      {hoveredIndex !== null && (
        <motion.div
          className="fixed bottom-[10%] left-1/2 transform -translate-x-1/2 bg-white text-[#00385D] p-4 rounded-lg shadow-lg w-[250px] sm:w-[300px] text-center border border-[#1278FF]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-bold text-[#1278FF]">{categories[selectedCategory][hoveredIndex].name}</h3>
          <p className="text-xs sm:text-sm">{categories[selectedCategory][hoveredIndex].description}</p>
        </motion.div>
      )}
    </motion.section>
  );
}
