import React from "react";

export default function Footer() {
  // 상단으로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-800 py-6 relative">
      <div className="container mx-auto text-center text-gray-800">
        {/* 화살표 버튼 */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
          style={{
            animation: "float 2s ease-in-out infinite",
          }}
        >
          ↑
        </button>

        {/* 텍스트 링크 섹션 */}
        <div className="flex justify-center space-x-6 mt-4">
          {/* GitHub 링크 */}
          <a
            href="https://github.com/chilly003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition duration-300 font-medium"
          >
            GitHub
          </a>

          {/* Vlog/블로그 링크 */}
          <a
            href="https://velog.io/@chilly003/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition duration-300 font-medium"
          >
            Vlog
          </a>
        </div>

        {/* 구분선 */}
        <hr className="border-gray-500 my-4" />

        {/* 저작권 정보 */}
        <p className="text-gray-500 text-sm font-medium mt-5">
          © {new Date().getFullYear()} <span className="font-bold">Jung Hyo Won</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
