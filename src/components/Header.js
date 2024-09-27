export default function Header() {
  return (
    <nav className="w-full flex flex-row fixed font-bold backdrop-blur-sm bg-black/60 py-3">
      <div className="w-full flex-row px-5 gap-3 py-3 justify-between">
        <span className="self-center text-lg md:text-xl">NEETI</span>
      </div>
      <div className="w-full">
        <ul className="w-full h-full flex flex-row justify-end">
          <li className="px-5 py-2 self-center">
            <a href="/">Home</a>
          </li>
          <li className="px-5 py-2 self-center">
            <a href="/">About</a>
          </li>
          <li className="px-5 py-2 self-center">
            <a href="/">Contact</a>
          </li>
          <li className="px-5 py-2 self-center">
            <a href="https://mega.nz/folder/BqkHCIxL#O6-U27dWqCn23Hg9E7BX-w" target="_blank">Repo</a>
          </li>
          <li className="px-5 py-2 self-center">
            <a href="/">Team</a>
          </li>
          <li className="px-5 py-2 self-center">
            <a href="/">Events</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
