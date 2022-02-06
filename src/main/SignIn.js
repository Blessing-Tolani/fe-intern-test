import "../styles/index.css";

const SignIn = () => {
  return (
    <div className="border-2 shadow-md border-lightGray rounded bg-gradient-to-tr from-darkGray to-lightGray w-52 mt-8 flex justify-center ">
      <div className="">
        <h2 className="my-3 text-gray-200">Sign In</h2>
        <form className="">
          <div>
            <input
              type="email"
              placeholder="Email address"
              className="w-44 h-8 bg-inputBgGray border border-inputBorderGray  text-white  placeholder:text-gray-300 placeholder:text-xxs placeholder:font-semibold flex items-center pb-1 pl-2 text-sm rounded"
            />
          </div>
          <div className="my-3">
            <input
              type="password"
              placeholder="Password"
              className="text-sm text-white shadow-md bg-inputBgGray border border-inputBorderGray placeholder:text-gray-300 placeholder:text-xxs placeholder:font-semibold  h-8 w-44 pl-2 pb-1 rounded"
            />
          </div>
          <div className="my-3 checkbox">
            <input type="checkbox" className="mr-1" checked />
            <label className="text-xxs  text-gray-300 font-light">
              Remember me
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-44 h-8  pt-2 pb-3 bg-white text-center rounded text-darkGray text-xxs font-semibold"
            >
              SIGN IN
            </button>
          </div>
          <p className="py-4 font-light text-gray-400 text-xxs">
            I forgot my password
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
