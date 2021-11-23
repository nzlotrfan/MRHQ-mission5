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
          <p className={classes.link}>How to Buy</p>
          <p className={classes.link}>Sell Your Car</p>
          <p className={classes.link}>Finance &amp; Insurance</p>
          <p className={classes.link}>Auction &amp; Events</p>
          <p className={classes.link}>Buyer &amp; Seller Fees</p>
          <p className={classes.link}>Vehicle Sale Price History Tool</p>
          <p className={classes.link}>Shipping Costs</p>
        </div>
        <div className={classes.column}>
          <h4 className={classes.title}>Finance &amp; Insurance</h4>
          <p className={classes.link}>Finance Homepage</p>
          <p className={classes.link}>Loan Calculator</p>
          <p className={classes.link}>Car Insurance</p>
          <p className={classes.link}>Mechanical Breakdown Insurance</p>
          <p className={classes.link}>General Insurances</p>
          <p className={classes.link}>Trucks Finance</p>
          <p className={classes.link}>Finance Information</p>
        </div>
        <div className={classes.column}>
          <h4 className={classes.title}>Search For</h4>
          <p className={classes.link}>Cars</p>
          <p className={classes.link}>Trucks &amp; Machinery</p>
          <p className={classes.link}>Damaged &amp; End of Life Cars</p>
          <p className={classes.link}>Boats &amp; Marine</p>
          <p className={classes.link}>Motorcycles &amp; Scooters</p>
          <p className={classes.link}>General Goods</p>
          <p className={classes.link}>Buses, Caravans &amp; Motorhomes</p>
          <p className={classes.link}>Turners Auctions Schedule</p>
        </div>
        <div className={classes.column}>
          <h4 className={classes.title}>About Us</h4>
          <p className={classes.link}>Overview</p>
          <p className={classes.link}>Turners Careers</p>
          <p className={classes.link}>Terms and Conditions</p>
          <p className={classes.link}>Privacy Policy</p>
          <p className={classes.link}>Turners Live</p>
          <p className={classes.link}>The Good Oil Blog</p>
          <p className={classes.link}>Email Alerts</p>
          <p className={classes.link}>Contact Us</p>
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
