import classes from "./MealsAvailable.module.css";
import MealsItem from "../UI/MealsItem/MealsItem";
import MealsCard from "../UI/MealsCard/MealsCard";

const INITAL_FOOD = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

function MealsAvailable() {
    const mealsList = INITAL_FOOD.map(meal => <MealsItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

    return (
        <section className={classes.meals}>
            <MealsCard>
                <ul>
                    {mealsList}
                </ul>
            </MealsCard>    
        </section>
    );
}

export default MealsAvailable;