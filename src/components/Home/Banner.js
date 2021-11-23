import classes from "./Banner.module.css";
import TBanner1 from "../../assets/TBanner1.jpg";
import rectangle from "../../assets/rectangle.png";
const Banner = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src={TBanner1} alt="Banner1"></img>
      </div>
      <div className={classes.imagecards}>
        <img src={rectangle} width="400px" alt="rectanglebox" />

        <img src={rectangle} width="400px" alt="rectanglebox" />

        <img src={rectangle} width="400px" alt="rectanglebox" />
      </div>
    </div>
  );
};

export default Banner;
