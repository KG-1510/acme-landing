import { useState } from 'react';
import { navbarLinks } from '../../../utils/content';
import { HiOutlineBars3 } from 'react-icons/hi2';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav>
      <div className="px-8 md:px-2 py-6 flex justify-between md:justify-around">
        <a className="flex items-center justify-center" href="/">
          <span className="text-white text-xl md:text-2xl font-extrabold">Acme </span>
          <span className="text-white text-xl md:text-2xl pacifico-regular ml-1">
            Note<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center justify-center space-x-4">
          {navbarLinks.map((linkItem) => {
            return (
              <li key={linkItem.title}>
                <a
                  href={linkItem.url}
                  className="text-white text-lg font-medium hover:text-primary"
                >
                  {linkItem.title}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="/signup"
          className="text-xs md:text-base text-white font-semibold ring-1 ring-primary rounded-full px-4 py-2 hover:bg-white hover:text-black hover:border-white"
        >
          Get Started
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="md:hidden flex items-center justify-center rounded-md h-8 w-8 p-1"
          aria-controls="navbar-cta"
          aria-expanded={isMenuOpen}
        >
          <HiOutlineBars3 className={`${isMenuOpen ? 'text-primary' : 'text-white '}`} />
        </button>
      </div>
      <div
        className={`absolute z-10 bg-midnight w-full py-4 fade-in ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-4">
          {navbarLinks.map((linkItem) => {
            return (
              <li key={linkItem.title}>
                <a
                  href={linkItem.url}
                  className="text-white text-lg font-medium hover:text-primary"
                >
                  {linkItem.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
