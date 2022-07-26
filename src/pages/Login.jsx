import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="w-[80vw] h-[80vh] py-[100px] ">
      <div className=" w-[80vw] px-4 py-20 z-50">
        <div className="max-w-[320px] mx-auto ">
          <h1 className="text-3xl font-bold">Sign In</h1>
          {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
          <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 my-2 bg-gray-700 rounded"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 my-2 bg-gray-700 rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="bg-gray-300 py-3 my-6 rounded font-bold cursor-pointer text-black">
              Sign In
            </button>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>
                <input className="mr-2" type="checkbox" />
                Remember me
              </p>
              <p>Need Help</p>
            </div>
            <p className="py-8">
              <span className="text-gray-500">New To mTralers?</span>{" "}
              <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
