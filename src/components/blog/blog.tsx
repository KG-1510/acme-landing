import { blogContent } from '../../utils/content';

const BlogComponent = () => {
  return (
    <div className="mt-20 sm:mt-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h3 className="text-base font-semibold leading-7 text-secondary">
            Read from our experts
          </h3>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Master the Art of <span className="pacifico-regular">Note</span> Taking: Tips, Tricks
            and Insights UI
            <span className="text-primary">.</span>
          </p>
        </div>
        <div className="mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-5 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogContent.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between hover:opacity-80 ring-1 ring-primary rounded-xl p-4"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-secondary">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium ring-1 ring-white"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt="author-pic"
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p>{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="font-semibold text-center mt-20">
        Want to contribute your knowledge here? Let's{' '}
        <a className="text-primary underline hover:text-white" href="/signup">
          Get Started
        </a>
      </p>
    </div>
  );
};

export default BlogComponent;
