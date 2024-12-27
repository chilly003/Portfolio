import React from "react";

export default function Button() {
  // 상단으로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 부드럽게 스크롤
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed 
       text-white p-4 rounded-full
        hover:scale-110 transition-transform 
        duration-300 animate-float"
      style={{
        animation: "float 2s ease-in-out infinite", 
      }}
    >
      ↑
    </button>
  );
}
