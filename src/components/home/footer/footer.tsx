import { footerLinks, socialLinks } from '../../../utils/content';

const Footer = () => {
  return (
    <footer className="text-white max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <a className="flex items-center justify-center" href="/">
        <span className="text-white text-xl md:text-2xl font-extrabold">Acme </span>
        <span className="text-white text-xl md:text-2xl pacifico-regular ml-1">
          Note<span className="text-primary">.</span>
        </span>
      </a>
      <nav className="flex flex-wrap justify-center">
        {footerLinks.map((linkItem) => {
          return (
            <div className="px-5 py-2">
              <a href={linkItem.url} className="text-base leading-6 text-white hover:text-primary">
                {linkItem.title}
              </a>
            </div>
          );
        })}
      </nav>
      <div className="flex justify-center mt-8 space-x-6">
        {socialLinks.map((linkItem) => {
          return (
            <a aria-label={linkItem.title} href={linkItem.url} target="_blank" className="text-white hover:opacity-80">
              <linkItem.icon size={30} />
            </a>
          );
        })}
      </div>
      <p className="mt-8 text-base leading-6 text-center">
        © 2024 Acme, Inc. All rights reserved.
      </p>
      <p className="mt-8 text-base leading-6 text-center">
        Developed with ❤️ by{' '}
        <a
          className="text-primary underline hover:text-white"
          href="https://www.linkedin.com/in/kg1510/"
          target="_blank"
        >
          Kushagra Gupta
        </a>
      </p>
    </footer>
  );
};

export default Footer;
