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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-10 w-full flex flex-row fixed font-bold text-white  transition-all duration-300
      ${isScrolled ? "bg-black/90 backdrop-blur-lg py-3" : "bg-cyan-700/10 backdrop-blur-lg py-3 my-3 rounded-xl"}`}
    >
      <div className="w-full flex-row px-5 gap-3 py-3 justify-between">
        <a
          className="self-center text-xl hover:text-blue-600 active:text-blue-800"
          href="/"
        >
          NEETI
        </a>
      </div>
      <div className="w-full">
        <ul className="w-full h-full flex flex-row justify-end">
          <li className="px-5 py-2 self-center">
            <a className="hover:text-blue-600 active:text-blue-800" href="/">
              Home
            </a>
          </li>
          <li className="px-5 py-2 self-center">
            <a
              className="hover:text-blue-600 active:text-blue-800"
              href="/team"
            >
              Team
            </a>
          </li>
          <li className="px-5 py-2 self-center">
            <a
              className="hover:text-blue-600 active:text-blue-800"
              href="#footer"
            >
              Contact
            </a>
          </li>
          <li className="px-5 py-2 self-center">
            <a
              className="hover:text-blue-600 active:text-blue-800"
              href="https://mega.nz/folder/BqkHCIxL#O6-U27dWqCn23Hg9E7BX-w"
              target="_blank"
            >
              Repo
            </a>
          </li>
          <li className="px-5 py-2 self-center">
            <a
              className="hover:text-blue-600 active:text-blue-800"
              href="#about"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
