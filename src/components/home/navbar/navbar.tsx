import { useState } from 'react';
import { navbarLinks } from '../../../utils/content';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="px-8 md:px-2 py-8 flex justify-between md:justify-around">
        <a className="flex items-center justify-center" href="/">
          <span className="text-white text-xl md:text-2xl font-extrabold">Acme </span>
          <span className="text-white text-xl md:text-2xl pacifico-regular ml-1">Note.</span>
        </a>

        <ul className="hidden md:flex items-center justify-center space-x-4">
          {navbarLinks.map((item) => {
            return (
              <li key={item.title}>
                <a href={item.url} className="text-white text-lg font-medium hover:text-primary">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <button className="text-xs md:text-base text-white font-semibold border-2 border-primary rounded-full px-4 py-2 hover:bg-white hover:text-black hover:border-white">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
