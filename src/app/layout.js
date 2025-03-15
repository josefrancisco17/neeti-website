import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NEETI",
  description:
    "Núcleo de Estudantes de Engenharia de Telecomunicações e Informática",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
    <head>
      <link rel="icon" href="/img/logo-branco.webp" />
    </head>
      <body>
        <Header />
        <div id="root">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
