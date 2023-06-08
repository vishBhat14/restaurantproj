import MealsSummary from "./MealSummary";
import AvailableMeals from "./Availablemeals";
import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
