export default function Header() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/6 flex flex-row px-5 md:px-10 gap-3 py-3 md:py-0 justify-between md:justify-start">
        <img 
          src="/img/logo.jpeg"
          alt="logo"
          style={{ width: 50, height: 50 }}
        />
        <span className="self-center text-lg md:text-xl">NEETI</span>
      </div>
      <div className="w-full md:w-5/6">
        <ul className="w-full h-full flex flex-col md:flex-row justify-center md:justify-end py-3 md:py-0">
          <li className="px-5 py-2 md:px-8 md:py-0 self-center">
            <a href="/">Home</a>
          </li>
          <li className="px-5 py-2 md:px-8 md:py-0 self-center">
            <a href="/">About</a>
          </li>
          <li className="px-5 py-2 md:px-8 md:py-0 self-center">
            <a href="/">Contact</a>
          </li>
          <li className="px-5 py-2 md:px-8 md:py-0 self-center">
            <a href="/">Repo</a>
          </li>
          <li className="px-5 py-2 md:px-8 md:py-0 self-center">
            <a href="/">Team</a>
          </li>
          <li className="px-5 py-2 md:px-8 md:py-0 self-center">
            <a href="/">Events</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
