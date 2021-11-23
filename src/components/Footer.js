import classes from "./Footer.module.css";
import footClasses from "./Header.module.css";
import avatar from "../assets/avatar.png";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topRow}>
        <div className={classes.column}></div>
        <div className={classes.column}>
          <h4 className={classes.title}>Cars</h4>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
        </div>
        <div className={classes.column}>
          <h4 className={classes.title}>Finance &amp; Insurance</h4>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
        </div>
        <div className={classes.column}>
          <h4 className={classes.title}>Search For</h4>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
        </div>
        <div className={classes.column}>
          <h4 className={classes.title}>About Us</h4>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
          <p className={classes.link}>Link</p>
        </div>
      </div>
      <div className={classes.bottomRow}>
        <div>© 2021 Turners</div>
        <div>
          <button
            type="submit"
            className={`${footClasses.button} ${footClasses.login_btn}`}
            name="FAQ"
          >
            FAQ
          </button>
        </div>
        <div className={classes.contact}>
          <a href="#" class={classes.contact}>
            <i class="fas fa-store fa-2x"></i>
            <p className={classes.contactText}>Branch Details</p>
          </a>
          <a href="#" class={classes.contact}>
            <i class="fab fa-facebook fa-2x"></i>
            <p className={classes.contactText}>Facebook</p>
          </a>

          <a href="#" class={classes.contact}>
            <i class="far fa-newspaper fa-2x"></i>
            <p className={classes.contactText}>Newsletter</p>
          </a>
          <a href="#" class={classes.contact}>
            <i class="fas fa-envelope-open-text fa-2x"></i>
            <p className={classes.contactText}>Email Alerts</p>
          </a>
          <a href="#" class={classes.contact}>
            <i class="fab fa-instagram fa-2x"></i>
            <p className={classes.contactText}>Instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
