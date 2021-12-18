import { Fragment } from 'react';
import MealsSummary from "./MealsSummary";
import MealsAvailable from "./MealsAvailable";

function Meals() {
    return (
        <Fragment>
            <MealsSummary />
            <MealsAvailable />
        </Fragment>
    );
}

export default Meals;