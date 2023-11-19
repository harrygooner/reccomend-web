import { Fragment, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSignIn,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const SignUpFormHandler = () => {
    setIsLoginForm((prev) => !prev);
  };

  const isFormButtonStyle =
    "bg-[#F91944] text-white outline-non ring-4 transform transition duration-700 hover:scale-105";

  return (
    <Fragment>
      <header className="bg-[#79DCF1]">
        <div className="container flex max-w-[75rem] mx-auto justify-between p-4 items-center">
          <img
            src="https://www.freelogovectors.net/svg07/tasty-logo.svg"
            alt="logo"
            className="w-[128px]"
          />
          <div className="hidden md:flex h-[48px]">
            <button
              onClick={SignUpFormHandler}
              className={`font-bold w-[110px] px-6 py-3 mx-3 poppins rounded-full focus:outline-none ring-red-300 ${
                isLoginForm ? isFormButtonStyle : ""
              }`}
            >
              Sign In
            </button>
            <button
              onClick={SignUpFormHandler}
              className={`font-bold w-[110px] px-6 py-3 mx-3 poppins rounded-full focus:outline-none ring-red-300 ${
                !isLoginForm ? isFormButtonStyle : ""
              }`}
            >
              Sign Up
            </button>
          </div>
          {!isLoginForm && (
            <FontAwesomeIcon
              onClick={SignUpFormHandler}
              icon={faSignIn}
              className="cursor-pointer font-bold text-[1.5rem] md:hidden"
            />
          )}
          {isLoginForm && (
            <FontAwesomeIcon
              onClick={SignUpFormHandler}
              icon={faUserPlus}
              className="cursor-pointer font-bold text-[1.5rem] md:hidden"
            />
          )}
        </div>
      </header>
      <main className="container max-w-[75rem] my-6 mx-auto p-4">
        <Link to="/home" className="flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="px-2" />
          <span>Back</span>
        </Link>
        {isLoginForm && <SignIn onChangeForm={SignUpFormHandler} />}
        {!isLoginForm && <SignUp onChangeForm={SignUpFormHandler} />}
      </main>
    </Fragment>
  );
};

export default AuthForm;
