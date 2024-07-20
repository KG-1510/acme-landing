const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Kushagra Gupta',
    role: 'Frontend Web Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQEn8vf1JyLTyQ/profile-displayphoto-shrink_400_400/0/1702993015869?e=1726704000&v=beta&t=ylPzsWdB6nKSHcgASObKkYkz_YyqQvKcrLovErJUl9Y',
  },
  {
    name: 'Jane Doe',
    role: 'Designer',
    imageUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    name: 'Mary Jane',
    role: 'QA',
    imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const TeamComponent = () => {
  return (
    <section className="mx-6 md:mx-0 text-white">
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-6 text-lg leading-8">
              Know the magicians behind making this awesome app possible
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6 ring-1 ring-primary p-4 rounded-xl">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
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
