import { Fragment } from 'react';
import mealsIMG from "../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactsFoods</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsIMG} alt="Template Background" />
            </div>
        </Fragment>
    );
}

export default Header;