import { pricingCardsContent } from '../../../utils/content';
import { HiCheck } from 'react-icons/hi2';
import { HiMiniXMark } from 'react-icons/hi2';

const Pricing = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
        <h3 className="text-base font-semibold leading-7 text-secondary text-center">
          Noting made affordable
        </h3>
        <p className="text-center mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-white">
          <span className="pacifico-regular">Note</span>-Worthy Pricing Plans
          <span className="text-primary">.</span>
        </p>
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-6 text-lg leading-8 text-white">
            Find the perfect plan to elevate your note-taking experience without breaking the bank.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3">
          {pricingCardsContent.map((priceCard) => (
            <div
              key={priceCard.id}
              className={`mx-auto mt-16 max-w-2xl rounded-3xl ${
                priceCard.isPopular ? 'ring-primary' : 'ring-gray-200'
              } ring-1 flex flex-col`}
            >
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {priceCard.title}
                  {priceCard.isPopular && (
                    <span className="text-sm font-medium px-2 mx-2 rounded-full bg-primary text-black">
                      Popular
                    </span>
                  )}
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">{priceCard.subtitle}</p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {priceCard?.features.map((feature) => (
                    <li key={feature.featureName} className="flex gap-x-1 text-sm">
                      {feature.isFeatureEnabled ? (
                        <HiCheck aria-hidden="true" className="h-6 w-5 flex-none text-green" />
                      ) : (
                        <HiMiniXMark aria-hidden="true" className="h-6 w-5 flex-none text-red" />
                      )}
                      {feature.featureName}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      {priceCard.priceSubText}
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {priceCard.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        {priceCard.priceSubScript}
                      </span>
                    </p>
                    <a
                      href="/signup"
                      className="mt-10 block w-full rounded-full ring-1 ring-primary px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-white hover:text-black"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-secondary">
                      Invoices and receipts available for easy company reimbursement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
