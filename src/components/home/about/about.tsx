const AboutComponent = () => {
  return (
    <div className="relative isolate overflow-hidden text-white px-6 py-20 sm:py-24 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h3 className="text-base font-semibold leading-7 text-secondary">Fresh new design</h3>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Unleash Creativity: <span className="pacifico-regular">Note</span> App with Next-Gen
                UI
                <span className="text-primary">.</span>
              </p>
              <p className="mt-6 text-xl leading-8">
                Experience the smooth and lightning-fast performance of our note-making app,
                ensuring your notes are always at your fingertips. Enjoy uninterrupted access and
                functionality, even without an internet connection.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="product-screenshot"
            src="/product-screenshot.webp"
            loading="lazy"
            fetchPriority="low"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-secondary lg:max-w-lg">
              <p>
                Our note-making app delivers an unparalleled user experience with its smooth and
                lightning-fast performance. Whether you're jotting down ideas, organizing thoughts,
                or keeping track of tasks, our app ensures swift and responsive actions. Its sleek,
                intuitive interface makes note-taking a breeze, and it operates flawlessly even
                without an internet connection.
              </p>
              <p className="mt-8 text-secondary">
                Stay organized and efficient with our reliable tool that works both online and
                offline. Capture your thoughts on the go, whether you're on a plane, in a remote
                area, or out of Wi-Fi range. Experience the convenience of a note-making app that
                supports your productivity wherever you are.
              </p>
            </div>
          </div>
        </div>
        <p className="font-semibold text-center mt-20">
          Want to see it in action? Let's{' '}
          <a className="text-primary hover:underline" href="/signup">
            Get Started
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
