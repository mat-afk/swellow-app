import { Link } from "react-router-dom";
import { useState } from "react";

import GenderCheckBox from "./GenderCheckbox";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmedPassword: "",
    gender: "",
  });

  const { loading, signUp } = useSignUp();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full px-8 py-6 rounded-lg shadow-md bg-zinc-100 bg-clip-padding backdrop-filter">
        <h1 className="text-3xl font-semibold text-center text-zinc-900 m-3">
          Sign up for <span className="text-yellow-400">Swellow</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label className="label p-2">
              <span className="text-sm label-text font-semibold">
                Full name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="min-w-96 h-10 input input-bordered"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="mt-1">
            <label className="label p-2">
              <span className="text-sm label-text font-semibold">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full h-10 input input-bordered"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="mt-1">
            <label className="label">
              <span className="text-sm label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-10 input input-bordered"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="mt-1">
            <label className="label">
              <span className="text-sm label-text font-semibold">
                Confirm password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full h-10 input input-bordered"
              value={inputs.confirmedPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmedPassword: e.target.value })
              }
            />
          </div>

          <div className="flex mt-2">
            <GenderCheckBox
              selectedGender={inputs.gender}
              onCheckboxChange={handleCheckboxChange}
            >
              Male
            </GenderCheckBox>

            <GenderCheckBox
              selectedGender={inputs.gender}
              onCheckboxChange={handleCheckboxChange}
            >
              Female
            </GenderCheckBox>

            <GenderCheckBox
              selectedGender={inputs.gender}
              onCheckboxChange={handleCheckboxChange}
            >
              Non binary
            </GenderCheckBox>
          </div>

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block bg-yellow-400 hover:bg-yellow-500 btn-md font-semibold text-md mt-4"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
