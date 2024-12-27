import React from "react";
import { motion } from "framer-motion";
import ham from "../assets/ham.png";
import "../index.css";

export default function Contact() {
  const contactTitle = "Contact Me".split(""); 
  const contactSubtitle = "I'm waiting for your message!".split(""); 
 

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.9 }}
    >
      {/* 제목 */}
      <h2 className="contact-title">
        {contactTitle.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: index * 0.06, // 순차적으로 나타나도록 지연 시간 설정
            }}
            viewport={{ once: false }}
          >
            {char}
          </motion.span>
        ))}
      </h2>

      {/* 부제목 */}
      <p className="contact-subtitle">
        {contactSubtitle.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.05,
              delay: index * 0.04, // 순차적으로 나타나도록 지연 시간 설정
            }}
            viewport={{ once: false }}
          >
            {char}
          </motion.span>
        ))}
      </p>

      {/* 카드 스타일 */}
      <div className="contact-card">
        {/* 이미지 */}
        <div className="profile-image-container">
          <img src={ham} alt="Profile" className="profile-image" />
        </div>

        {/* 연락처 정보 */}
        <ul className="contact-info">
          <li>
            <span className="label">MM:</span>
            <span>정효원</span>
          </li>
          <hr />
          <li>
            <span className="label">Phone:</span>
            <span>000-0000-0000</span>
          </li>
          <hr />
          <li>
            <span className="label">Email:</span>
            <span>chfhchf03@naver.com</span>
          </li>
        </ul>
      </div>

      <button
        className="me px-6 py-3 transition-colors duration-300 mt-6"
      >
        Send Email
      </button>
    </motion.section>
  );
}
