import { statsContent } from '../../../utils/content';

const Stats = () => {
  return (
    <section className="py-18 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {statsContent.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <p className="text-base leading-7 text-white">{stat.name}</p>
              <p className="order-first text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
