import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "./DishesData";
import loginReducer from "./LoginData";

const store = configureStore({
  reducer: { data: dishesReducer, loginStatus: loginReducer },
});

export default store;
