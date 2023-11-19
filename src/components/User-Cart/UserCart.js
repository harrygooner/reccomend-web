import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { dishesAction } from "../../store/DishesData";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Modal from "../UI/Modal";
import NoCartInOrder from "./NoCartInOrder";
import CartNotification from "./CartNotification";

const UserCart = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    phoneNumber: "-----",
    address: "-----",
    receiver: "-----",
  });

  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.data.dishes);
  const orderDishes = dishes.filter((dish) => dish.isInCart === true);
  const addressInputRef = useRef();
  const phoneNumInputRef = useRef();
  const receiverInputRef = useRef();

  const fixedPrice = 8.99;
  let subTotalCost = 0;
  for (let i = 0; i < orderDishes.length; i++) {
    subTotalCost += fixedPrice * orderDishes[i].items;
  }
  subTotalCost.toFixed(2);

  const tax = 1.99;
  const deliveryFee = 2.99;
  let totalPrice = (subTotalCost + tax + deliveryFee).toFixed(3);

  const removeFromCartHandler = (id) => {
    dispatch(dishesAction.removeDishFromCart(id));
  };

  const confirmInfoHandler = (e) => {
    e.preventDefault();

    setUserInfo({
      phoneNumber: phoneNumInputRef.current.value,
      address: addressInputRef.current.value,
      receiver: receiverInputRef.current.value,
    });
  };

  const closeCartHandler = () => {
    setIsShowModal(false);
  };

  const sendOrderHandler = () => {
    setIsShowModal(true);
    dispatch(dishesAction.clearOrderDishes());
  };

  return (
    <Fragment>
      {isShowModal && (
        <Modal onCloseCart={closeCartHandler}>
          <div className="bg-white flex flex-col">
            <div>
              <FontAwesomeIcon
                icon={faCheck}
                className="block w-[50px] h-[50px] mx-auto text-[#a5dc86] ring ring-[hsla(98,55%,69%,.2)] rounded-full p-3"
              />
              <h1 className="mt-[40px] text-center font-bold text-[rgba(0,0,0,.64)]">
                Hooray!!!!
              </h1>
              <p className="mt-[10px] text-center text-[rgba(0,0,0,.64)]">
                You have ordered successfully
              </p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={closeCartHandler}
                  className="rounded-md bg-[#F91944] px-6 py-3 focus:outline-none text-white transform transition duration-200 hover:sacle-150 hover:shadow-lg"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <header className="bg-[#79DCF1] sticky top-0 z-10">
        <div className="container max-w-[75rem] mx-auto flex items-center justify-between p-4">
          <img
            src="https://www.freelogovectors.net/svg07/tasty-logo.svg"
            alt="logo"
            className="w-[128px]"
          />
          <CartNotification />
        </div>
      </header>
      <main className="container max-w-[75rem] mx-auto px-6 my-6">
        <Link to="/home" className="flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="px-2" />
          <span>Back</span>
        </Link>
        {orderDishes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <form onSubmit={confirmInfoHandler} className="flex flex-col mt-10">
              <h1 className="text-center md:text-left text-2xl pb-4 border-b border-gray-500">
                Deliver Detail
              </h1>
              <input
                className="focus:outline-none p-3 border border-slate-300 rounded-md mt-4"
                type="text"
                placeholder="Your address"
                ref={addressInputRef}
                required
              />
              <input
                className="focus:outline-none p-3 border border-slate-300 rounded-md mt-4"
                type="text"
                placeholder="Phone number"
                ref={phoneNumInputRef}
                required
              />
              <input
                className="focus:outline-none p-3 border border-slate-300 rounded-md mt-4"
                type="text"
                placeholder="Deliver to"
                ref={receiverInputRef}
                required
              />
              <button className="rounded-md bg-[#F91944] p-3 mt-4 focus:outline-none text-white transform transition duration-200 hover:sacle-150 hover:shadow-lg">
                Save & continue
              </button>
            </form>
            <div className="p-6 border border-slate-200 shadow-md rounded-lg">
              <h1 className="text-2xl pb-4 text-center">Order summary</h1>
              <p className="text-gray-500">
                {"Receiver: "}
                <span className="font-semibold text-gray-700">
                  {userInfo.receiver}
                </span>
              </p>
              <p className="text-gray-500 mt-4">
                {"Address: "}
                <span className="font-semibold text-gray-700">
                  {userInfo.address}
                </span>
              </p>
              <p className="text-gray-500 mt-4">
                {"Phone number: "}
                <span className="font-semibold text-gray-700">
                  {userInfo.phoneNumber}
                </span>
              </p>
              <p className="text-gray-500 mt-4">
                {`Delivering time: `}
                <span className="font-semibold text-gray-700">
                  15-20 minutes
                </span>
              </p>
              <div className="mt-2 max-h-[224px] overflow-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-100">
                {orderDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="flex items-center justify-between pt-4"
                  >
                    <img
                      src={dish.thumbnail_url}
                      alt={dish.name}
                      className="w-[96px] h-[96px] rounded-full"
                    />
                    <div className="text-gray-500 px-2 w-[202px]">
                      <h5 className="line-clamp-1">{dish.name}</h5>
                      <h1>$8.99</h1>
                      <span>{`cooking time: ${dish.cook_time_minutes} minute`}</span>
                    </div>
                    <div className="flex flex-col mr-4">
                      <p className="text-gray-500 line-clamp-1 mb-2">
                        items: {dish.items}
                      </p>
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="text-gray-700 cursor-pointer"
                        onClick={removeFromCartHandler.bind(null, dish.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col mt-6">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal:</span>
                  <span className="font-bold text-gray-700">{`$${subTotalCost}`}</span>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-gray-500">Tax:</span>
                  <span className="font-bold text-gray-700">{`$${tax}`}</span>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-gray-500">Delivery fee:</span>
                  <span className="font-bold text-gray-700">{`$${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between mt-4 text-xl">
                  <span className="text-gray-500">Total price:</span>
                  <span className="font-bold text-gray-700">{`$${totalPrice}`}</span>
                </div>
              </div>
              <div>
                <button
                  onClick={sendOrderHandler}
                  disabled={
                    userInfo.phoneNumber === "-----" &&
                    userInfo.phoneNumber === "-----" &&
                    userInfo.phoneNumber === "-----"
                  }
                  className="disabled:opacity-40 w-full rounded-md bg-[#F91944] p-3 mt-4 focus:outline-none text-white transform transition duration-200 enabled:hover:sacle-150 enabled:hover:shadow-lg"
                >
                  Order now
                </button>
              </div>
            </div>
          </div>
        )}
        {orderDishes.length === 0 && <NoCartInOrder />}
      </main>
    </Fragment>
  );
};

export default UserCart;
