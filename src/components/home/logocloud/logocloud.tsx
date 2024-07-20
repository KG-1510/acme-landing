const LogoCloud = () => {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-center text-base font-semibold leading-7 text-secondary">Trusted by many</h3>
        <h2 className="text-center text-3xl mt-2 sm:text-4xl font-semibold leading-8 text-white">
          You're not alone, <span className="pacifico-regular">Note</span> that down
          <span className="text-primary">.</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="google-logo"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="adobe-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="atlassian-logo"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Atlassian.svg/2560px-Atlassian.svg.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="microsoft-logo"
            src="https://pngimg.com/d/microsoft_PNG11.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="postman-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
        <p className="text-white font-semibold text-center mt-14 md:mt-20">
          Want to join this list? Let's{' '}
          <a className="text-primary hover:underline" href="/signup">
            Get Started
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogoCloud;
