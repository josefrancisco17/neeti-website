"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <nav
          className={`z-10 w-full fixed flex flex-row font-bold text-white transition-all duration-300 backdrop-blur-lg
        ${
              isScrolled
                  ? "bg-black/30 py-4"
                  : "bg-cyan-700/10 py-4 my-3 rounded-xl"
          }`}
      >
        <div className="w-full flex flex-row px-8 md:px-12 lg:px-16 gap-4 justify-between">
          <a
              className="self-center text-2xl hover:text-gray-400 active:text-gray-800"
              href="/"
          >
            NEETI
          </a>
        </div>
        <div className="w-full">
          <ul className="w-full h-full flex flex-row justify-end">
            <li className="px-6 py-3 self-center">
              <a className="text-lg hover:text-gray-600 active:text-gray-700" href="/">
                Home
              </a>
            </li>
            <li className="px-6 py-3 self-center">
              <a className="text-lg hover:text-gray-600 active:text-gray-700" href="/team">
                Team
              </a>
            </li>
            <li className="px-6 py-3 self-center">
              <a className="text-lg hover:text-gray-600 active:text-gray-700" href="#footer">
                Contact
              </a>
            </li>
            <li className="px-6 py-3 self-center">
              <a
                  className="text-lg hover:text-gray-600 active:text-gray-700"
                  href="https://mega.nz/folder/BqkHCIxL#O6-U27dWqCn23Hg9E7BX-w"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Repo
              </a>
            </li>
            <li className="px-6 py-3 self-center">
              <a className="text-lg hover:text-gray-600 active:text-gray-700" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}
