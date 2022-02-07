import "../styles/index.css";
import { useEffect, useState, useRef } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { ValidEmail, MinLength } from "../validation/Validation";

const SignIn = () => {
  let userDetails = {
    email: "",
    password: "",
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const [checked, setChecked] = useState(true);

  const [user, setUser] = useState(userDetails);
  const [successMessage, setSuccessMessage] = useState(userDetails);
  const [formErrors, setFormErrors] = useState(userDetails);
  const form = useRef(null);

  //Displays success message
  useEffect(() => {
    if (
      successMessage.email === "success" &&
      successMessage.password === "success"
    ) {
      alert("Successful!!!");
      form.current.reset();
    } else {
    }
  }, [successMessage]);

  //Toogles password visibility
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  //Toggles checkbox
  const toggleCheckBox = () => {
    setChecked(checked ? false : true);
  };

  // Checks for error
  const checkForError = (value) => {
    if (formErrors[value]) {
      successMessage[value] = "";
      setSuccessMessage({ ...successMessage });
    } else {
      successMessage[value] = "success";
      setSuccessMessage({ ...successMessage });
    }
  };

  const handleOnBlur = (event) => {
    const { name, value } = event.target;
    user[name] = value;
    setUser({ ...user });
    if (formErrors[name]) {
      formErrors[name] = "";
      setFormErrors({ ...formErrors });
    }
  };

  //Validates the user input
  const handleSubmit = (e) => {
    e.preventDefault();

    for (const value in user) {
      switch (value) {
        case "email":
          if (!user[value] || ValidEmail(user[value])) {
            formErrors[value] = "Email address is invalid";
          } else {
            formErrors[value] = "";
          }
          setFormErrors({ ...formErrors });
          checkForError(value);

          break;

        case "password":
          if (MinLength(user[value], 6)) {
            formErrors[value] = "Password should have 6 minimum characters";
          } else {
            formErrors[value] = "";
          }
          setFormErrors({ ...formErrors });
          checkForError(value);
          break;

        default:
          break;
      }
    }
  };

  return (
    <div className="w-full">
      <div className="border-2  border-lightGray rounded-md bg-gradient-to-tr from-darkGray to-lightGray w-72  mt-8 flex justify-center ">
        <div className="">
          <h2 className="my-5 text-gray-200 text text-lg">Sign in</h2>
          <form noValidate onSubmit={handleSubmit} ref={form}>
            <div>
              <input
                type="email"
                name="email"
                onBlur={handleOnBlur}
                placeholder="Email address"
                className={`w-56 h-8 bg-inputBgGray outline-none border ${
                  formErrors.email
                    ? "border-red-700"
                    : "border-inputBorderGray "
                } text-white  placeholder:text-gray-300 placeholder:text-xs placeholder:font-semibold flex items-center pb-1 pl-2 text-sm rounded`}
              />
              <p className="text-red-700 text-sm">{formErrors.email}</p>
            </div>
            <div className="mt-6 mb-3 relative ">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                name="password"
                id={formErrors.password ? "error" : "noerror"}
                onBlur={handleOnBlur}
                noValidate
                className={`text-sm text-white outline-none shadow-md bg-inputBgGray border ${
                  formErrors.password
                    ? "border-red-700"
                    : "border-inputBorderGray "
                } placeholder:text-gray-300 placeholder:text-xs placeholder:font-semibold  h-8 w-56 pl-2 pb-1 rounded`}
              />
              <AiOutlineEye
                className="absolute text-gray-300 right-3 top-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
              <p className="text-red-700 w-56 text-sm">{formErrors.password}</p>
            </div>
            <div className={checked ? "checked" : "unchecked"}>
              <input
                type="checkbox"
                className="mr-1 cursor-pointer outline-none"
                onClick={toggleCheckBox}
                noValidate
              />
              <label className="text-xs  text-gray-300 font-light ">
                Remember me
              </label>
            </div>
            <div>
              <button
                type="submit"
                data-tip
                className="w-56 h-8 mt-4 outline-none pt-2 pb-3 bg-white hover:bg-gray-500 text-center rounded text-darkGray text-xs font-semibold"
              >
                SIGN IN
              </button>
            </div>
            <p className="pt-4 pb-6 font-light text-gray-400 text-xs">
              <a href="https://risevest.com/">I forgot my password</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
