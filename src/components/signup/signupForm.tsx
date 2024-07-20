const SignupForm = () => {
  return (
    <section className="mx-6 md:mx-0">
      <div className="mt-20 sm:mt-24 md:mx-auto w-full md:w-2/5 flex text-white ring-1 ring-primary rounded-3xl">
        <div className="flex min-h-full w-2/5 flex-1 flex-col justify-center px-6 py-10 lg:px-8">
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight">
            Create a new account
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST">
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-md font-semibold border-0 p-3 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="w-full rounded-md font-semibold border-0 p-3 text-black ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full justify-center rounded-full ring-1 ring-primary px-3 py-2 text-lg font-semibold leading-6 text-white hover:bg-white hover:text-black"
              >
                Sign up
              </button>
            </form>

            <p className="mt-10 text-center text-sm">
              Already having an account?{' '}
              <a
                href="/signup"
                className="font-semibold leading-6 hover:text-primary hover:underline"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
