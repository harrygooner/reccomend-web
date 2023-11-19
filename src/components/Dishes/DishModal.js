import { Link } from "react-router-dom";
import { dishesAction } from "../../store/DishesData";
import { useDispatch, useSelector } from "react-redux";

const Dish = (props) => {
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.loginStatus.isLogin);

  const addToCartHandler = (id) => {
    if (loginStatus) {
      dispatch(dishesAction.addDishToCart({ id: id, items: 1 }));
    }
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-bottom"
      className="bg-white border border-gray-100 p-6 text-[#F91944] rounded-lg transform transition duration-500 hover:sacle-150 hover:shadow-lg"
    >
      <Link
        to={`/home/${props.id}`}
        className="border border-[#F91944] rounded-full text-[1rem] px-[10px] py-[4px] transform transition duration-200 hover:sacle-150 hover:shadow-lg hover:bg-[#F91944] hover:text-white cursor-pointer"
      >
        More Detail
      </Link>
      <img
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        src={props.image}
        alt={props.name}
        className="w-full h-64 rounded-lg my-[1rem] transform transition duration-200 hover:sacle-150 hover:shadow-lg"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-gray-900 text-lg text-center line-clamp-1">
          {props.name}
        </h1>
        <p className="line-clamp-2 overflow-ellipsis overflow-clip text-center text-gray-500 text-sm mt-[8px] w-full">
          {props.description !== ""
            ? props.description
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique nibh erat, nec condimentum turpis blandit quis. In in leo eu elit placerat dignissim."}
        </p>
        <h2 className="mt-[8px] text-gray-900 text-2xl font-bold ">8.99$</h2>
        <Link
          onClick={addToCartHandler.bind(null, props.id)}
          to={loginStatus ? "/user-cart" : "/login"}
          className="rounded-full bg-[#F91944] px-8 py-2 focus:outline-none text-white mt-[8px] transform transition duration-200 hover:sacle-150 hover:shadow-lg"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default Dish;
