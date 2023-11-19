import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="grid grid-rows-3 items-center text-center border-x border-solid border-slate-200 md:hidden">
      <Link
        to="/"
        className="p-[1.5rem] font-bold text-[1.5rem] border-y border-solid border-slate-200"
      >
        <span>Home</span>
      </Link>
      <Link
        to="/login"
        className="p-[1.5rem] font-bold text-[1.5rem] border-b border-solid border-slate-200"
      >
        <span>Login</span>
      </Link>
      <Link
        to="/user-cart"
        className="p-[1.5rem] font-bold text-[1.5rem] border-b border-solid border-slate-200"
      >
        <span>Cart</span>
      </Link>
    </div>
  );
};

export default DropDown;
