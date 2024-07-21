const ContactComponent = () => {
  return (
    <div className="px-6 mt-20 sm:mt-24 lg:px-8 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-base font-semibold leading-7 text-secondary">Get in touch</h3>
        <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Send us a <span className="pacifico-regular">Note </span>
          <span className="text-primary">.</span>
        </p>
        <p className="mt-6 text-xl leading-8">Fill in the form below and we will get back to you</p>
      </div>
      <form
        action="mailto:guptakushagra15.10@gmail.com"
        method="POST"
        encType="text/plain"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block text-black w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset placeholder:text-secondary focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block text-black w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block text-black w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block text-black w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block text-black w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <button
            type="submit"
            className="text-xs md:text-base text-white font-semibold ring-1 ring-primary rounded-full px-4 py-2 hover:bg-white hover:text-black hover:border-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactComponent;
