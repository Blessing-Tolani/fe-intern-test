import "../styles/index.css";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

const SignIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(true);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleCheckBox = () => {
    setChecked(checked ? false : true);
  };
  return (
    <div className="w-full">
      <div className="border-2  border-lightGray rounded-md bg-gradient-to-tr from-darkGray to-lightGray w-72  mt-8 flex justify-center ">
        <div className="">
          <h2 className="my-5 text-gray-200 text text-lg">Sign in</h2>
          <form className="">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-56 h-8 bg-inputBgGray outline-none border border-inputBorderGray  text-white  placeholder:text-gray-300 placeholder:text-xs placeholder:font-semibold flex items-center pb-1 pl-2 text-sm rounded"
              />
            </div>
            <div className="my-4 relative">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                className="text-sm text-white outline-none shadow-md bg-inputBgGray border border-inputBorderGray placeholder:text-gray-300 placeholder:text-xs placeholder:font-semibold  h-8 w-56 pl-2 pb-1 rounded"
              />
              <AiOutlineEye
                className="absolute text-gray-300 right-3 top-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className={checked ? "checked" : "unchecked"}>
              <input
                type="checkbox"
                className="mr-1 cursor-pointer outline-none"
                onClick={toggleCheckBox}
              />
              <label className="text-xs  text-gray-300 font-light ">
                Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-56 h-8 mt-3 outline-none pt-2 pb-3 bg-white text-center rounded text-darkGray text-xs font-semibold"
              >
                SIGN IN
              </button>
            </div>
            <p className="pt-4 pb-6 font-light text-gray-400 text-xs">
              I forgot my password
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
