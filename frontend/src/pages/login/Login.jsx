import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full px-8 py-6 rounded-lg shadow-md bg-zinc-100 bg-clip-padding backdrop-filter">
        <h1 className="text-3xl font-semibold text-center text-zinc-900 m-3">
          Log in <span className="text-yellow-400">Swellow</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label className="label p-2">
              <span className="text-sm label-text font-semibold">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="min-w-96 h-10 input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <label className="label">
              <span className="text-sm label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-10 input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Don't have an account?
          </Link>

          <div>
            <button
              className="btn btn-block bg-yellow-400 hover:bg-yellow-500 btn-md font-semibold text-md mt-4"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Log in"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
