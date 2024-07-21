import { featuresContent } from '../../../utils/content';

const Features = () => {
  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-base font-semibold leading-7 text-secondary">Write better notes</h3>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Everything you need for better <span className="pacifico-regular">Note</span>making
            <span className="text-primary">.</span>
          </p>
          <p className="mt-6 text-sm md:text-lg leading-6 md:leading-8 text-white">
            A standout note-making tool loaded with features that enhances accessibility, and
            integrates seamlessly with tools, elevating productivity and ease of use.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {featuresContent.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white border-primary border-2">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-black" />
                  </div>
                  {feature.name}
                </div>
                <p className="mt-2 text-base leading-7 text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-white font-semibold text-center mt-20">
          Convinced enough? Let's{' '}
          <a className="text-primary underline hover:text-white" href="/signup">
            Get Started
          </a>
        </p>
      </div>
    </div>
  );
};

export default Features;
