import classes from "./NavHeader.module.css";
import { NavLink, Link } from "react-router-dom";
import turnerslogo from "../assets/turnerslogo.png";

const NavHeader = () => {
  return (
    <div className={classes.container}>
      <div>
        <Link className={classes.turnersLogo} to="/">
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
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/insurance"
            >
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
        <button type="submit" className={`${classes.button} ${classes.loginButton}`} name="login">
          Log in
        </button>
        <button
          type="submit"
          className={`${classes.button} ${classes.registerButton}`}
          name="register"
        >
          Register
        </button>
      </div>
      <div className={classes.lang}>中文</div>
    </div>
  );
};
export default NavHeader;
