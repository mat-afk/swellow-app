const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-8 rounded-lg shadow-md bg-zinc-100 bg-clip-padding backdrop-filter">
        <h1 className="text-3xl font-semibold text-center text-zinc-900 m-4">
          Log in <span className="text-amber-500">Swellow</span>
        </h1>

        <form>
          <div className="mt-4">
            <label className="label p-2">
              <span className="text-sm label-text font-semibold">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full input input-bordered"
            />
          </div>
          <div className="mt-2">
            <label className="label">
              <span className="text-sm label-text font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered"
            />
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Don't have an account?
          </a>

          <div>
            <button className="btn btn-block bg-yellow-400 hover:bg-yellow-500 btn-md font-semibold text-base mt-6">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
