import {Fragment} from "react";
import classes from "./Header.module.css";
import mealsimage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Reactmeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsimage} alt="a table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
