import React from "react";
import { motion } from "framer-motion";

export default function About() {

  const sectionTitleClass = "main-title font-bold mb-8 textC";
  const contentBoxClass = "bg-white p-8 sm:p-12 max-w-3xl w-full text-[#00385D] space-y-4";
  const headingClass = "text-lg font-semibold text-[#1278FF]";
  const listClass = "list-disc list-inside space-y-2";

  const aboutSections = [
    {
      title: "[Projects]",
      items: [
        "프로젝트 할 땐 하고 쉴 땐 쉬는 걸 목표합니다.",
        "기술과 상관없이 어떤 주제의 프로젝트인지에 초점을 맞추고 싶습니다.",
        "기존에 익숙한 건 웹이지만 앱도 관심 있습니다.",
        "ESG 경영과 관련된 프로젝트, 게임 프로젝트에 관심 있습니다.",
      ],
    },
    {
      title: "[Study]",
      items: [
        "CS, 알고리즘 공부 계속 하기",
        "알고리즘 B형 도전",
      ],
    },
  ];

  return (
    <motion.section
      id="goal"
      className="section-container"
      initial={{ opacity: 0, y: 50 }} // 초기 상태 (아래에서 시작)
      whileInView={{ opacity: 1, y: 0 }} // 화면에 들어올 때 상태
      viewport={{ once: false }} // 한 번만 실행
      transition={{ duration: 1.5 }} // 애니메이션 지속 시간
    >
      {/* 제목 */}
      <h2 className={sectionTitleClass}>My Goal</h2>

      {/* 내용 */}
      <div className={contentBoxClass}>
        {aboutSections.map((section, index) => (
          <div key={index} className="space-y-4">
            {/* Section 제목 */}
            <p className={headingClass}>{section.title}</p>
            {/* Section 리스트 */}
            <ul className={listClass}>
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
