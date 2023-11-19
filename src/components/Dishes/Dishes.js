import DishModal from "./DishModal";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import noItemsFound from "../../assets/img/no-items-found.png";

const Dishes = () => {
  const dishes = useSelector((state) => state.data.filterDishes);
  const isInformLogin = localStorage.getItem("informSuccessLogin");
  const [showLoginStatus, setShowLoginStatus] = useState(isInformLogin);

  const closeCartHandler = () => {
    localStorage.setItem("informSuccessLogin", false);
    setShowLoginStatus("false");
  };

  return (
    <section className="relative max-w-[75rem] my-12 mx-auto px-6 min-h-[15rem]">
      {showLoginStatus === "true" && (
        <Modal onCloseCart={closeCartHandler}>
          <div className="bg-white flex flex-col">
            <div>
              <FontAwesomeIcon
                icon={faCheck}
                className="block w-[50px] h-[50px] mx-auto text-[#a5dc86] ring ring-[hsla(98,55%,69%,.2)] rounded-full p-3"
              />
              <h1 className="mt-[40px] text-center font-bold text-[rgba(0,0,0,.64)]">
                Congratulation!!!!
              </h1>
              <p className="mt-[10px] text-center text-[rgba(0,0,0,.64)]">
                successfully login
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
      {dishes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dishes.map((dish) => (
            <DishModal
              id={dish.id}
              image={dish.thumbnail_url}
              name={dish.name}
              description={dish.description}
              key={dish.id}
            />
          ))}
        </div>
      )}
      {dishes.length === 0 && (
        <img className="mx-auto" src={noItemsFound} alt="no items found" />
      )}
    </section>
  );
};

export default Dishes;
