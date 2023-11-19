import google from "../../assets/img/google.png";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../store/LoginData";
import { signInWithGoogle } from "../../firebase/firebaseAuth";

const SignUp = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAl2FEyO_EB00fcmBR7DqIC08aKGNAB6hc",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (!res.ok) {
        return res.json().then((response) => alert(response.error.message));
      } else {
        dispatch(loginAction.switchLoginStatus());
        localStorage.setItem("informSuccessLogin", true);
        navigate("/home");
      }
    });
  };

  const signInWithGoogleHandler = () => {
    signInWithGoogle().then((res) => {
      const userInformation = {
        userName: res.user.displayName,
        userEmail: res.user.email,
        userAvatar: res.user.photoURL,
      };
      localStorage.setItem("userInformation", userInformation);
      dispatch(loginAction.switchLoginStatus());
      localStorage.setItem("informSuccessLogin", true);
      navigate("/home");
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="max-w-[24rem] mt-3 bg-white drop-shadow-lg border border-slate-200 mx-auto flex flex-col text-center p-4 rounded-md"
    >
      <input
        type="email"
        placeholder="Email"
        className="focus:outline-none p-3 border border-slate-300 rounded-md"
        required
        ref={emailInputRef}
      />
      <input
        type="password"
        placeholder="Password"
        className="focus:outline-none p-3 border border-slate-300 mt-[20px] rounded-md"
        required
        ref={passwordInputRef}
      />
      <button className="my-[20px] bg-[#F91944] text-white rounded-md p-3 font-bold">
        Sign Up
      </button>
      <span
        onClick={props.onChangeForm}
        className="text-[#F91944] hover:underline cursor-pointer"
      >
        Already have an account?
      </span>
      <div className="mt-[20px] border-t border-t-gray-200"></div>
      <span className="py-4 font-bold text-gray-400 text-md">OR</span>
      <div
        onClick={signInWithGoogleHandler}
        className="p-3 border border-gray-200 rounded-md flex items-center justify-center cursor-pointer"
      >
        <img src={google} alt="google" className="w-[24px]" />
        <span className="font-medium px-2">Sign up with google</span>
      </div>
    </form>
  );
};

export default SignUp;
