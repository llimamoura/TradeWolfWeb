import React from "react";

const LoginForm: React.FC = () => {
  return (
    <section className="w-full">
      <h1 className="text-3xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-3">
        Sign in with <br /> password
      </h1>
      <p className="text-1xl text-gray-500 mb-6">
        Don't have an account?{" "}
        <a className="text-blue-400 hover:underline" href="#">
          Sign up
        </a>
      </p>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-150 h-15 rounded border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-150 h-15 mt-3 rounded border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <div className="flex justify-center ml-39">
          <a href="#" className="text-sm border-none rounded border text-[#001838] bg-gray-200 px-2 py-2">
            Reset password
          </a>
        </div>

        <button
          type="submit"
          className="w-150 mt-2 bg-[#001838] md:text-2xl cursor-pointer text-white py-3 rounded text-sm font-semibold hover:opacity-90 transition"
        >
          SIGN IN
        </button>
      </form>
      <div className="mt-6"></div>
    </section>
  );
};

export default LoginForm;
