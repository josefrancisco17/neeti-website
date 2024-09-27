import { FaInstagram } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="w-full h-full py-6 flex flex-row bg-zinc-950">
      <div className="w-1/2 flex flex-row items-center justify-center">
        <img
          className="mr-10"
          src="/img/logo.jpeg"
          alt="logo"
          style={{ width: 100, height: 100 }}
        />
        <div className="flex flex-col">
          <span className="text-center">
            Núcleo de Estudantes de Telecomunicações e Informática
          </span>
          <span>© 2024 NEETI. All rights reserved.</span>
        </div>
      </div>
      <div className="w-1/2 flex flex-col pl-20">
        <span className="font-bold pb-2">Contacto</span>
        <span className="flex flex-row pb-1">
          <CiLocationOn style={{ height: "1.3em", width: "1.3em" }} />
          <a
            className="ml-2"
            href="https://maps.app.goo.gl/3SkdbS4aHt3UvVUN7"
            target="_blank"
          >
            R. Dr. António Bernardino de Almeida 431, 4249-015 Porto
          </a>
        </span>
        <span className="flex flex-row">
          <CgMail style={{ height: "1.3em", width: "1.3em" }} />
          <a
            className="ml-2"
            href="mailto:neeti.isep@gmail.com"
            target="_blank"
          >
            neeti.isep@gmail.com
          </a>
        </span>
        <span className="font-bold py-2">Social</span>
        <div className="flex flex-row gap-4">
          <a href="https://www.instagram.com/neeti_isep/" target="_blank">
            <FaInstagram style={{ height: "1.5em", width: "1.5em" }} />
          </a>
          <a href="https://www.linkedin.com/company/neetiisep/" target="_blank">
            <FaLinkedin style={{ height: "1.5em", width: "1.5em" }} />
          </a>
          <a href="https://linktr.ee/neeti_isep" target="_blank">
            <TbBrandLinktree style={{ height: "1.5em", width: "1.5em" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
