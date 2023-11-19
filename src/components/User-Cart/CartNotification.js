import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import emptyCart from "../../assets/img/empty-cart.png";
import classes from "./CartNotification.module.css";

const CartNotification = () => {
  const dishes = useSelector((state) => state.data.dishes);
  const orderDishes = dishes.filter((dish) => dish.isInCart === true);
  const totalQuantityInCart = useSelector((state) => state.data.totalQuantity);

  return (
    <div className={`${classes["cart-icon"]} relative flex cursor-pointer`}>
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-[26px] text-[#222222]"
      />
      <span className="absolute rounded-full w-6 h-6 text-white bg-[#F91944] right-[-8px] top-[-10px] text-center font-bold">
        {totalQuantityInCart}
      </span>
      <div
        className={`${classes.notification} absolute w-[364px] bg-white py-5 right-[-10px] top-[44px] rounded-[4px] drop-shadow-lg hidden`}
      >
        {orderDishes.length === 0 && (
          <img
            className="w-full px-2"
            src={emptyCart}
            alt="no item has been added"
          />
        )}
        {orderDishes.length > 0 &&
          orderDishes.map((dish) => (
            <div className="flex py-[4px] px-4 items-center hover:bg-[#f8f8f8]">
              <img
                src={dish.thumbnail_url}
                alt="item"
                className="w-[90px] h-[90px] mr-2 rounded-full"
              />
              <div className="flex justify-between flex-1 items-center text-gray-500">
                <div className="w-[152px]">
                  <p className="line-clamp-1">{dish.name}</p>
                  <p>$8.99/dish</p>
                </div>
                <p className="w-[66px]">items: {dish.items}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartNotification;
