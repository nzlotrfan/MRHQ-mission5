import classes from "./Banner.module.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import rectangle from "../../assets/rectangle.png";

const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <img src={banner1} className={classes.pictureBanner} alt="banner1"></img>
        <button className={`${classes.btnBanner} ${classes.btnBannerStyle}`}>
          Get a free quote
        </button>
      </div>

      <div className={classes.cardsContainer}>
        <div className={classes.card}>
          <img className={classes.picture} src={rectangle} alt="rectanglebox" />
          <button className={`${classes.btn} ${classes.btnstyle}`}>Buy car</button>
        </div>
        <div className={classes.card}>
          <img className={classes.picture} src={rectangle} alt="rectanglebox" />
          <button className={`${classes.btn} ${classes.btnstyle}`}>Sell your car</button>
        </div>
        <div className={classes.card}>
          <img className={classes.picture} src={rectangle} width="350px" alt="rectanglebox" />
          <button className={`${classes.btn} ${classes.btnstyle}`}>Insurance</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
