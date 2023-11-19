import { Fragment, useState } from "react";
import SecondaryNav from "./SecondaryNav";
import MainNav from "./MainNav";
import DropDown from "./DropDown";

const NavBar = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  const dropDownHandler = () => {
    setIsDropDown((prevState) => !prevState);
  };

  return (
    <Fragment>
      <MainNav onDropDown={dropDownHandler} isDropDown={isDropDown} />
      {!isDropDown && <SecondaryNav />}
      {isDropDown && <DropDown />}
    </Fragment>
  );
};
export default NavBar;
