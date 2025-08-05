import React from "react";
import Button from "../../components/Button";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center bg-background w-full sm:w-[400px]  m-auto sm:mt-10 py-10  sm:rounded-2xl justify-between gap-20">
      <p className="text-textTitle text-2xl font-bold">Login</p>
      <div className="flex flex-col items-center gap-4">
        <input
          type="email"
          className="text-primary font-semibold placeholder:text-gray-600 placeholder:font-normal  bg-transparent  border p-3 rounded-xl border-textColor4"
          placeholder="Email"
        />
        <input
          type="password"
          className="text-primary font-semibold placeholder:text-gray-600 placeholder:font-normal  bg-transparent border p-3 rounded-xl border-textColor4"
          placeholder="Password"
        />
        <Button children={"Login"} />
        <p className="text-xs text-textColor4 cursor-pointer">Forgot password?</p>
      </div>
      <p className="text-xs text-textColor4">Not registered? <span className="font-semibold text-primary cursor-pointer">Create an account</span></p>
    </div>
  );
};

export default SignInPage;
