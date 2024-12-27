import React from "react";
import { motion } from "framer-motion";
import "../index.css";

export default function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      id="header"
      className="section-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >

      <h1 className="header-title hangula">
        안녕하세요! 함께하는 성장형 웹 개발자
      </h1>

  
      <h1 className="main-title">
        <span className="highlighted-text">정효원</span> 입니다.
      </h1>

      <h2 className="header-title mt-3">
        Users can access in a fun way
      </h2>

      {/* Learn More 버튼 */}
      <button
        onClick={() => scrollToSection("about")}
        className="button-style me"
      >
        Click!
      </button>
    </motion.header>
  );
}
