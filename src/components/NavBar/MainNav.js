import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../store/LoginData";
import { dishesAction } from "../../store/DishesData";
import { useNavigate } from "react-router-dom";

const MainNav = (props) => {
  const loginStatus = useSelector((state) => state.loginStatus.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeLoginStatusHandler = () => {
    localStorage.setItem("informSuccessLogin", false);
    dispatch(loginAction.switchLoginStatus());
    dispatch(dishesAction.clearOrderDishes());
  };

  return (
    <div className="sticky top-0 bg-[#79DCF1] p-4 z-10">
      <div className="container h-[40px] mx-auto flex flex-wrap items-center max-w-[75rem]">
        <div className="top-[-12px] w-[128px] md:top-[14px] md:w-[150px] mr-[2rem] relative">
          <img
            src="https://www.freelogovectors.net/svg07/tasty-logo.svg"
            alt="logo"
          />
        </div>

        <div className="flex flex-row-reverse md:flex-row flex-wrap justify-between flex-1 items-center relative bottom-[18px]">
          <ul className="hidden md:flex flex-wrap">
            <li className="pr-[1.5rem] pl-[1rem] font-bold text-[1.375rem] text-[#222222] hover:underline underline-offset-4 decoration-[3px]">
              <Link to="/home">
                <span>Home</span>
              </Link>
            </li>
            <li className="pr-[1.5rem] pl-[1rem] font-bold text-[1.375rem] text-[#222222] hover:underline underline-offset-4 decoration-[3px]">
              {!loginStatus && (
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </span>
              )}
              {loginStatus && (
                <span
                  onClick={changeLoginStatusHandler}
                  className="cursor-pointer"
                >
                  Logout
                </span>
              )}
            </li>
            <li className="pr-[1.5rem] pl-[1rem] font-bold text-[1.375rem] text-[#222222] hover:underline underline-offset-4 decoration-[3px]">
              <Link to="/user-cart">
                <span>Cart</span>
              </Link>
            </li>
          </ul>

          <SearchInput addition={`hidden`} />

          <div
            onClick={props.onDropDown}
            className="md:hidden absolute top-[-6px]"
          >
            {!props.isDropDown && (
              <FontAwesomeIcon
                icon={faBars}
                className="font-bold text-[1.5rem]"
              />
            )}
            {props.isDropDown && (
              <FontAwesomeIcon
                icon={faXmark}
                className="font-bold text-[1.5rem]"
              />
            )}
          </div>
        </div>
      </div>
      {props.isDropDown && (
        <SearchInput addition={`flex mt-[1.5rem] md:hidden`} />
      )}
    </div>
  );
};

export default MainNav;
