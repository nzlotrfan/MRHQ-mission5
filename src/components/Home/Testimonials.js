import classes from "./Testimonials.module.css";
import rectangle from "../../assets/rectangle.png";
import star from "../../assets/star.png";
import avatar from "../../assets/avatar.png";
const Testimonials = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1 className={classes.title}>Testimonials</h1>
        <div className={classes.starsContainer}>
          <img className={classes.stars} src={star} alt="star" />
          <img className={classes.stars} src={star} alt="star" />
          <img className={classes.stars} src={star} alt="star" />
          <img className={classes.stars} src={star} alt="star" />
          <img className={classes.stars} src={star} alt="star" />
        </div>
        <p className={classes.testimonial}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore
        </p>
        <div className={classes.avatarContainer}>
          <p>
            <img className={classes.avatar} src={avatar} alt="avatar" />
          </p>
          <p className={classes.name}>Ella Fitzgerald</p>
        </div>
      </div>
      <div className={classes.right}>
        <img src={rectangle} alt="RectanglePlaceholder" width="100%" />
      </div>
    </div>
  );
};

export default Testimonials;
