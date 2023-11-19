import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dishesAction } from "../../store/DishesData";

const SearchInput = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.data.dishes);
  const filterDishes = dishes.filter((dish) => {
    if (searchTerm === "") {
      return dish;
    }
    return dish.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  });
  useEffect(() => {
    dispatch(dishesAction.storeFilterDishes(filterDishes));
  });

  return (
    <div
      className={`${props.addition} md:flex bg-white px-2 py-2 rounded-[2rem] items-center`}
    >
      <FontAwesomeIcon icon={faSearch} className="text-[#F91944] ml-[10px]" />
      <input
        type="text"
        placeholder="Search for recipes"
        className="outline-none mx-2 w-full"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;
