import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp = async ({
    fullName,
    username,
    password,
    confirmedPassword,
    gender,
  }) => {
    const ok = handleInputErrors({
      fullName,
      username,
      password,
      confirmedPassword,
      gender,
    });

    if (!ok) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmedPassword,
          gender,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Saving user data
      localStorage.setItem("user-info", JSON.stringify(data));
      setAuthUser(data);

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signUp };
};

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmedPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmedPassword || !gender) {
    toast.error("Please fill in all the fields");
    return false;
  }

  if (password !== confirmedPassword) {
    toast.error("Passwords don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password length must be at least 6 characters");
    return false;
  }

  return true;
};

export default useSignUp;
