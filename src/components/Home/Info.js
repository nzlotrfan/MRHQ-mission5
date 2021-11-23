import classes from "./Info.module.css";
import rectangle from "../../assets/rectangle.png";

const Info = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1 className={classes.title}>50 years in business</h1>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore
        </p>
        <div className={classes.imagecards}>
          <img
            className={classes.image}
            src={rectangle}
            alt="RectanglePlaceholder"
            width="125px"
            height="50px"
          />
          <img
            className={classes.image}
            src={rectangle}
            alt="RectanglePlaceholder"
            width="125px"
            height="50px"
          />
          <img
            className={classes.image}
            src={rectangle}
            alt="RectanglePlaceholder"
            width="125px"
            height="50px"
          />
        </div>
        <div className={classes.imagecards}>
          <img
            className={classes.image}
            src={rectangle}
            alt="RectanglePlaceholder"
            width="125px"
            height="50px"
          />
          <img
            className={classes.image}
            src={rectangle}
            alt="RectanglePlaceholder"
            width="125px"
            height="50px"
          />
          <img
            className={classes.image}
            src={rectangle}
            alt="RectanglePlaceholder"
            width="125px"
            height="50px"
          />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightContainer}>
          <img src={rectangle} alt="RectanglePlaceholder" width="100%" />
          <div className={classes.rightText}>
            <h2 className={classes.rightTextTitle}>Sed ut perspiciatis unde omnis</h2>
            <p className={classes.rightTextSmall}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
              quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
