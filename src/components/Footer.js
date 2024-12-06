import { FaInstagram } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  return (
      <footer id="footer" className="w-full py-6 flex flex-wrap md:flex-nowrap backdrop-blur-sm bg-black/95 bg-gradient-to-b from-black to-zinc-950 text-white">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center md:justify-start px-4 md:px-8">
          <img
              className="mb-4 md:mb-0 md:mr-6"
              src="/img/logo-branco.png"
              alt="logo"
              style={{ width: 100, height: 100 }}
          />
          <div className="text-center md:text-left">
          <span className="block">
            Núcleo de Estudantes de Telecomunicações e Informática
          </span>
            <span>© 2024 NEETI. All rights reserved.</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start px-4 md:px-8 mt-6 md:mt-0">
          <span className="font-bold pb-2">Contacto</span>
          <span className="flex flex-row items-center pb-2">
          <CiLocationOn className="h-5 w-5" />
          <a className="ml-2 break-words text-center md:text-left"
             href="https://maps.app.goo.gl/3SkdbS4aHt3UvVUN7"
             target="_blank"
          >
            R. Dr. António Bernardino de Almeida 431, 4249-015 Porto
          </a>
        </span>
          <span className="flex flex-row items-center">
          <CgMail className="h-5 w-5" />
          <a className="ml-2 break-words"
             href="mailto:neeti.isep@gmail.com"
             target="_blank"
          >
            neeti.isep@gmail.com
          </a>
        </span>

          <span className="font-bold py-2">Social</span>
          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <a href="https://www.instagram.com/neeti_isep/" target="_blank">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/neetiisep/" target="_blank">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://linktr.ee/neeti_isep" target="_blank">
              <TbBrandLinktree className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
  );
}
