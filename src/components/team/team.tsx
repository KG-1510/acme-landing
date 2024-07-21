import { teamContent } from '../../utils/content';

const TeamComponent = () => {
  return (
    <section className="mx-6 md:mx-0 text-white">
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h3 className="text-base font-semibold leading-7 text-secondary">Meet the team</h3>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-white">
              The Talent Powering your <span className="pacifico-regular">Note </span> Solutions
              <span className="text-primary">.</span>
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {teamContent.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6 ring-1 ring-primary p-4 rounded-xl">
                  <img alt="person-pic" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
