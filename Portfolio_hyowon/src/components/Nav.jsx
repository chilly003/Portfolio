import React, { useState, useEffect } from "react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true); // 네비게이션 바 표시 여부
  const [lastScrollY, setLastScrollY] = useState(0); // 마지막 스크롤 위치

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // 특정 섹션으로 스크롤하는 함수
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // 네비게이션 링크 데이터 배열
  const navLinks = [
    { id: "about", label: "About" },
    { id: "stack", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "goal", label: "Goal" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`pt-5 pb-5 backdrop-blur-sm bg-slate-100 sticky top-0 bg-opacity-60 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* 로고 */}
        <div className="textC text-2xl font-bold">
          <button onClick={() => scrollToSection("header")}>My Portfolio</button>
        </div>

        {/* 네비게이션 링크 */}
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`textC hover:text-blue-500 transition duration-300 `}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
