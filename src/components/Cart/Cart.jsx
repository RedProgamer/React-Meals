import { useContext } from 'react';
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from './CartItem';
import CartContext from '../store/cart-component';

function Cart(props) {
    const ctx = useContext(CartContext);

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0;

    const cartItemAddHandler = item => {
        ctx.addItem({...item, amount: 1});
    };
    const cartItemRemoveHandler = id => {
        ctx.removeItem(id);
    };

    const mealsInCart = 
    (
    <ul className={classes['cart-items']}>
        {ctx.items.map(meal => ( 
            <CartItem name={meal.name} price={meal.price} amount={meal.amount} onRemove={cartItemRemoveHandler.bind(null, meal.id)} onAdd={cartItemAddHandler.bind(null, meal)}/>
        ))}</ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {mealsInCart}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span className={classes.price}>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;