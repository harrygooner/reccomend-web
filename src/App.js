import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCartPage from "./pages/UserCartPage";
import DishDetailPage from "./pages/DishDetailPage";
import { dishesAction } from "./store/DishesData";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Aos from "aos";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "97e57621d4mshd05ffecc4764034p18715cjsnb89b0b6d1540",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
      options
    )
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.results.length !== 0) {
          console.log(responseData.results);
          dispatch(dishesAction.storeDataFetch(responseData.results));
          setIsLoading(false);
        }
      });
  }, [dispatch]);

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Navigate to="home" />} />
        <Route exact path="home" element={<HomePage isLoading={isLoading} />} />
        <Route path="home/:dishId" element={<DishDetailPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user-cart" element={<UserCartPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
