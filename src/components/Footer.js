"use client";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <footer
          id="footer"
          className="w-full py-8 flex flex-col md:flex-row backdrop-blur-sm bg-black text-white transition-colors duration-300"
      >
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-8 mb-6 md:mb-0">
          <img
              className="mb-4 md:mb-0 md:mr-6"
              src="/img/logo-branco.webp"
              alt="NEETI Logo"
              style={{ width: 100, height: 100 }}
          />
          <div className="text-center md:text-left">
          <span className="block text-lg font-semibold">
            Núcleo de Estudantes de Telecomunicações e Informática
          </span>
            <span className="block mt-2">© {currentYear} NEETI. All rights reserved.</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-8">
          <div className="w-full mb-6">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Contacto</h3>
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center">
                <CiLocationOn className="h-6 w-6 mr-3 text-teal-400" />
                <a
                    className="break-words text-center md:text-left hover:text-teal-400 transition-colors duration-200"
                    href="https://maps.app.goo.gl/3SkdbS4aHt3UvVUN7"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  R. Dr. António Bernardino de Almeida 431, 4249-015 Porto
                </a>
              </div>
              <div className="flex items-center">
                <CgMail className="h-6 w-6 mr-3 text-teal-400" />
                <a
                    className="text-center md:text-left hover:text-teal-400 transition-colors duration-200"
                    href="mailto:neeti.isep@gmail.com"
                >
                  neeti.isep@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left">Social</h3>
            <div className="flex flex-row gap-6 justify-center md:justify-start">
              <a
                  href="https://www.instagram.com/neeti_isep/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400 transition-colors duration-200"
                  aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                  href="https://www.linkedin.com/company/neetiisep/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400 transition-colors duration-200"
                  aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                  href="https://linktr.ee/neeti_isep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400 transition-colors duration-200"
                  aria-label="Linktree"
              >
                <TbBrandLinktree className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
