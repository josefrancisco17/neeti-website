"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
      <>
        <nav
            className={`z-20 w-full fixed flex flex-row font-bold text-white transition-all duration-300 backdrop-blur-lg
        ${isScrolled ? "bg-black/30 py-4" : "bg-cyan-700/10 py-4 my-3 rounded-xl"}`}
        >
          <div className="w-full flex flex-row px-8 md:px-12 lg:px-16 gap-4 justify-between items-center">
            <a
                className="self-center text-2xl hover:text-gray-400 active:text-gray-800"
                href="/"
            >
              NEETI
            </a>
            <div className="block md:hidden">
              <button
                  className="text-2xl"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>

            <div className="hidden md:flex w-full">
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
          </div>

          {isMenuOpen && (
              <div className="fixed inset-0 bg-black flex flex-col justify-center items-center w-screen h-screen z-50">
                <button
                    className="absolute top-6 right-6 text-3xl text-white"
                    onClick={() => setIsMenuOpen(false)}
                >
                  ✕
                </button>
                <ul className="space-y-8 text-center text-3xl text-white">
                  <li>
                    <a
                        className="hover:text-gray-400 active:text-gray-500"
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                        className="hover:text-gray-400 active:text-gray-500"
                        href="/team"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                        className="hover:text-gray-400 active:text-gray-500"
                        href="#footer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                        className="hover:text-gray-400 active:text-gray-500"
                        href="https://mega.nz/folder/BqkHCIxL#O6-U27dWqCn23Hg9E7BX-w"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      Repo
                    </a>
                  </li>
                  <li>
                    <a
                        className="hover:text-gray-400 active:text-gray-500"
                        href="#about"
                        onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
          )}
        </nav>
      </>
  );
}
