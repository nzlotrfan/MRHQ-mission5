import classes from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import turnerslogo from "../assets/turnerslogo.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <Link className={classes.nohover} to="/">
          <img src={turnerslogo} alt="Turners logo" />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/quotes">
              Find a Car
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/quotes">
              Buy car
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/quotes">
              Sell your car
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/quotes">
              Auto Insurance
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/quotes">
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <input className={classes.search} placeholder="🔍 Search" type="text" />
      </div>
      <div>
        <button type="submit" className={`${classes.button} ${classes.login_btn}`} name="login">
          Log in
        </button>
        <button
          type="submit"
          className={`${classes.button} ${classes.register_btn}`}
          name="register"
        >
          Register
        </button>
      </div>
      <div className={classes.lang}>中文</div>
    </div>
  );
};
export default Header;
