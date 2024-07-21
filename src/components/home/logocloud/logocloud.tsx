const LogoCloud = () => {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-center text-base font-semibold leading-7 text-secondary">
          Trusted by many
        </h3>
        <h2 className="text-center text-3xl mt-2 sm:text-4xl font-semibold leading-8 text-white">
          You're not alone, <span className="pacifico-regular">Note</span> that down
          <span className="text-primary">.</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="google-logo"
            src="/google-logo.webp"
            width={158}
            height={48}
            loading="lazy"
            fetchPriority="low"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="adobe-logo"
            src="/adobe-logo.webp"
            width={158}
            height={48}
            loading="lazy"
            fetchPriority="low"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="atlassian-logo"
            src="/atlassian-logo.webp"
            width={158}
            height={48}
            loading="lazy"
            fetchPriority="low"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="microsoft-logo"
            src="/microsoft-logo.webp"
            width={158}
            height={48}
            loading="lazy"
            fetchPriority="low"
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="postman-logo"
            src="/postman-logo.webp"
            width={158}
            height={48}
            loading="lazy"
            fetchPriority="low"
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
