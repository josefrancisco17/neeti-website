import "@/styles/globals.css";

export const metadata = {
  title: "NEETI",
  description:
    "Núcleo de Estudantes de Engenharia de Telecomunicações e Informática",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
