import React from "react";
import Button from "../../components/Button";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center bg-background w-full sm:w-[400px]  m-auto sm:mt-10 py-10  sm:rounded-2xl justify-between gap-20">
      <p className="text-textTitle text-2xl font-bold">Sign up</p>
      <div className="flex flex-col items-center gap-4">
        <input
          type="email"
          className="text-primary font-semibold placeholder:text-gray-600 placeholder:font-normal  bg-transparent  border p-3 rounded-xl border-textColor4"
          placeholder="Email"
        />
        <input
          type="text"
          className="text-primary font-semibold placeholder:text-gray-600 placeholder:font-normal  bg-transparent  border p-3 rounded-xl border-textColor4"
          placeholder="Username"
        />
        <input
          type="password"
          className="text-primary font-semibold placeholder:text-gray-600 placeholder:font-normal  bg-transparent border p-3 rounded-xl border-textColor4"
          placeholder="Password"
        />
        <input
          type="password"
          className="text-primary font-semibold placeholder:text-gray-600 placeholder:font-normal  bg-transparent border p-3 rounded-xl border-textColor4"
          placeholder="Confirm Password"
        />
        <Button children={"Sign up"} />
      </div>
      <p className="text-xs text-textColor4">Already registered? <span className="font-semibold text-primary cursor-pointer">Sign in.</span></p>
    </div>
  );
};

export default SignUpPage;
