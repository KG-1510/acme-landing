import { HiMiniXMark } from 'react-icons/hi2';
import { GrArticle } from 'react-icons/gr';

const SubscribeComponent = () => {
  return (
    <section className="pt-20 sm:pt-24 text-white">
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h3 className="text-base font-semibold leading-7 mb-2 text-secondary text-center md:text-left">
                Subscribe to newsletter
              </h3>
              <h2 className="text-3xl text-center md:text-left font-bold tracking-tight text-white sm:text-4xl">
                Be in the <span className="pacifico-regular">Note</span> Loop
                <span className="text-primary">.</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Get glowing with the latest information about all our products, subscribe to the
                monthly newsletter with your Email ID right now!
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <span className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <GrArticle aria-hidden="true" className="h-6 w-6 text-white" />
                </span>
                <p className="mt-4 font-semibold text-white">Monthly articles</p>
                <p className="mt-2 leading-7 text-gray-400">
                  Stay updated with new things tech from Acme
                </p>
              </div>
              <div className="flex flex-col items-start">
                <span className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HiMiniXMark aria-hidden="true" className="h-6 w-6 text-white" />
                </span>
                <p className="mt-4 font-semibold text-white">No spam</p>
                <p className="mt-2 leading-7 text-gray-400">
                  No clutter in your mailbox, we promise!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
    </section>
  );
};

export default SubscribeComponent;
