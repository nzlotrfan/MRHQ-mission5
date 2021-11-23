import classes from "./Home.module.css";
import Banner from "../components/Home/Banner";
import Info from "../components/Home/Info";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div className={classes.main}>
      <Banner />
      <Info />
      <Testimonials />
    </div>
  );
};

export default Home;
