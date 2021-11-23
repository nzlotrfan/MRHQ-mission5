import classes from "./Banner.module.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import rectangle from "../../assets/rectangle.png";

const Banner = () => {
  return (
    <div className={classes.mainContainer}>
      <div>
        <img src={banner1} alt="banner1"></img>
      </div>

      <div className={classes.imagecards}>
        <div className={classes.card}>
          <img className={classes.picture} src={rectangle} alt="rectanglebox" />
          <button class={`${classes.btn} ${classes.btnstyle}`}>Buy car</button>
        </div>
        <div className={classes.card}>
          <img className={classes.picture} src={rectangle} alt="rectanglebox" />
          <button class={`${classes.btn} ${classes.btnstyle}`}>Sell your car</button>
        </div>
        <div className={classes.card}>
          <img className={classes.picture} src={rectangle} width="350px" alt="rectanglebox" />
          <button class={`${classes.btn} ${classes.btnstyle}`}>Insurance</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
