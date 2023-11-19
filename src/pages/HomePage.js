import NavBar from "../components/NavBar/NavBar";
import Dishes from "../components/Dishes/Dishes";
import Footer from "../components/footer/Footer";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { Fragment } from "react";
// import AnimatedRoute from "../components/UI/AnimatedRoute";

const Home = (props) => {
  return (
    <Fragment>
      <NavBar />
      {!props.isLoading && <Dishes />}
      {props.isLoading && <LoadingSpinner />}
      <Footer />
    </Fragment>
  );
};

export default Home;
