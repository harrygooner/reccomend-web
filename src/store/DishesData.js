import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  dishes: [],
  totalQuantity: 0,
  filterDishes: [],
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState: initialDataState,
  reducers: {
    storeDataFetch(state, action) {
      for (let i = 0; i < action.payload.length; i++) {
        action.payload[i].isInCart = false;
        action.payload[i].items = 0;
      }
      state.dishes = action.payload;
    },
    storeFilterDishes(state, action) {
      state.filterDishes = action.payload;
    },
    addDishToCart(state, action) {
      const addIndex = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id
      );
      state.dishes[addIndex].isInCart = true;
      state.dishes[addIndex].items += action.payload.items;
      state.totalQuantity = state.dishes.filter(
        (dish) => dish.isInCart === true
      ).length;
    },
    removeDishFromCart(state, action) {
      const addIndex = state.dishes.findIndex(
        (dish) => dish.id === action.payload
      );
      state.dishes[addIndex].isInCart = false;
      state.dishes[addIndex].items = 0;
      state.totalQuantity = state.dishes.filter(
        (dish) => dish.isInCart === true
      ).length;
    },
    clearOrderDishes(state) {
      for (let i = 0; i < state.dishes.length; i++) {
        if (state.dishes[i].isInCart) {
          state.dishes[i].isInCart = false;
        }
      }
      state.totalQuantity = 0;
    },
  },
});

const dishesReducer = dishesSlice.reducer;

export const dishesAction = dishesSlice.actions;
export default dishesReducer;
