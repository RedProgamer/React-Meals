import classes from "./MealsCard.module.css";

function MealsCard(props) {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
}

export default MealsCard;