import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { dishesAction } from "../../store/DishesData";
import { Fragment, useState } from "react";
import CartNotification from "../User-Cart/CartNotification";

const DishDetail = () => {
  const [items, setItems] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.data.dishes);
  const dish = dishes.find((dish) => dish.id.toString() === params.dishId);
  const loginStatus = useSelector((state) => state.loginStatus.isLogin);

  if (!dish) return;

  const addToCartHandler = () => {
    if (loginStatus) {
      dispatch(
        dishesAction.addDishToCart({ id: +params.dishId, items: items })
      );
    }
  };

  const addQuantityHandler = () => {
    setItems((prev) => (prev += 1));
  };

  const reduceQuantityHandler = () => {
    if (items > 1) {
      setItems((prev) => (prev -= 1));
    }
  };

  return (
    <Fragment>
      <header className="bg-[#79DCF1] sticky top-0">
        <div className="container max-w-[75rem] mx-auto flex items-center justify-between p-4">
          <img
            src="https://www.freelogovectors.net/svg07/tasty-logo.svg"
            alt="logo"
            className="w-[128px]"
          />
          <CartNotification />
        </div>
      </header>
      <main className="container max-w-[75rem] px-4 mx-auto my-6">
        <Link to="/home" className="flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="px-2" />
          <span>Back</span>
        </Link>
        <div className="items-center grid grid-cols-1 md:grid-cols-2 gap-10 mt-[50px]">
          <div className="order-2 md:order-1">
            <h1 className="font-bold text-4xl pb-3 text-center md:text-left">
              {dish.name}
            </h1>
            <p className="text-center md:text-left text-gray-500">
              {dish.description !== ""
                ? dish.description
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique nibh erat, nec condimentum turpis blandit quis. In in leo eu elit placerat dignissim."}
            </p>
            <div className="justify-center md:justify-start flex pt-8 items-center">
              <h1 className="font-extrabold text-3xl">$8.99</h1>
              <div className="flex flex-row items-center border border-slate-300 rounded-full ml-8 px-4 py-2">
                <FontAwesomeIcon
                  className="text-2xl bg-[#F91944]  w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer"
                  icon={faMinus}
                  onClick={reduceQuantityHandler}
                />
                <span className="ml-[16px] w-[10px]">{items}</span>
                <FontAwesomeIcon
                  className="text-2xl bg-[#F91944]  w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer ml-[16px]"
                  icon={faPlus}
                  onClick={addQuantityHandler}
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link
                to={loginStatus ? "/user-cart" : "/login"}
                onClick={addToCartHandler}
                className="rounded-full bg-[#F91944] px-8 py-2 mt-8 focus:outline-none text-white transform transition duration-200 hover:sacle-150 hover:shadow-lg"
              >
                Add to cart
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={dish.thumbnail_url}
              alt={dish.name}
              className="mx-auto w-[50vh] h-[50vh] rounded-full shadow-xl"
            />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default DishDetail;
