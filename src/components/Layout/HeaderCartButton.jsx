import { useContext, useEffect, useState } from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from '../store/cart-component';

function HeaderCartButton(props) {

    const [buttonHighlighted, setButtonHighlighted] = useState(false);

    const ctx = useContext(CartContext);
    const totalCartItems = ctx.items.reduce((curr, item) => {
        return curr + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${buttonHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(ctx.items.length === 0) return;
        setButtonHighlighted(true);

        const timer = setTimeout(() => {
            setButtonHighlighted(false);
        },300);

        return () => {
            clearTimeout(timer);
        };
    }, [ctx.items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{totalCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;