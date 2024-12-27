import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/photo.jpg";

export default function About() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const aboutData = [
    {
      icon: "📅",
      title: "Date of Birth",
      content: ["2001년 3월 7일"],
    },
    {
      icon: "🎓",
      title: "Major",
      content: ["경영"],
    },
    {
      icon: "🏠",
      title: "Residence",
      content: ["유성온천역 인근"],
    },
    {
      icon: "💻",
      title: "Experience at SSAFY",
      content: [
        "1학기: Python, 웹 기초 지식, 알고리즘, Django, Vue 학습",
        "방학 : 알고리즘, React, JAVA, AI 학습",
        "2학기: 뜻이 맞는 팀원과 다양한 프로젝트 해보고 싶습니다.",
      ],
    },
    {
      icon: "🍋‍🟩",
      title: "TMI",
      content: [
        "낯을 많이 가리지만 친해지면 저도 무슨 말 하는지 모르겠어요^^",
        "취미는 게임, 독서, 그림, 다 같이 운동 등이 있습니다.",
      ],
    },
  ];

  return (
    <motion.section
      id="about"
      className="section-container blueB"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1.5 }}
    >
      {/* 제목 */}
      <motion.h2
        className="main-title text-white font-bold mb-8"
        initial="hidden"
        whileInView="visible"
        variants={textVariant}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* 메모장 스타일 내용 */}
      <div className="relative max-w-4xl w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center p-6 sm:p-8 lg:p-12 space-y-6 md:space-y-0 md:space-x-6">
        {/* 이미지 */}
        <motion.div
          className="w-full md:w-1/3 flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          transition={{ duration: 0.8 }}
        >
          <img
            src={photo}
            alt="Profile"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </motion.div>

        {/* About Data */}
        <div className="w-full md:w-2/3 space-y-6">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={textVariant}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start space-x-4 px-3"
            >
              {/* 이모티콘 */}
              <span className="text-3xl sm:text-4xl lg:text-5xl">{item.icon}</span>

              {/* 제목과 내용 */}
              <div>
                <h3 className="card-title">{item.title}</h3>
                <ul className="card-content">
                  {item.content.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
