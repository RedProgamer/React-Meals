import CartContex from "./cart-component";
import { useReducer, useEffect } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            let updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;

            let existingItemIdx = state.items.findIndex(item => item.id === action.item.id);
            let existingItem = state.items[existingItemIdx];
            
            let updatedItem;
            let updatedItems;
            
            if(existingItem) {
                updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.item.amount,
                };
                
                updatedItems = [...state.items];
                updatedItems[existingItemIdx] = updatedItem;
            }else {
                updatedItems = state.items.concat(action.item);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };

        case 'REMOVE_ITEM':
            const alreadyExistingItemIdx = state.items.findIndex(item => item.id === action.id);
            const alreadyExistingItem = state.items[alreadyExistingItemIdx];
            const alreadyUpdatedTotalAmount = state.totalAmount - alreadyExistingItem.price;

            let alreadyUpdatedItems;

            if(alreadyExistingItem.amount === 1) {
                alreadyUpdatedItems = state.items.filter(item => item.id !== action.id);
            }else {
                const alreadyUpdatedItem = {
                    ...alreadyExistingItem, 
                    amount: alreadyExistingItem.amount - 1};
                alreadyUpdatedItems = [...state.items];
                alreadyUpdatedItems[alreadyExistingItemIdx] = alreadyUpdatedItem;
            }

            return {
                items: alreadyUpdatedItems,
                totalAmount: alreadyUpdatedTotalAmount,
            };

        default:
            return defaultCartState;            
    }
};

function CartProvider(props) {

    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);
    
    const addItemToCart = (item) => {
        dispatchCartState({type: 'ADD_ITEM', item: item});
    };

    const removeItemFromCart = (id) => {
        dispatchCartState({type: 'REMOVE_ITEM', id: id});
    };

    useEffect(() => {
        console.log(cartState);
    }, [cartState]);

    const cartContextHelper = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }

    return (
        <CartContex.Provider value={cartContextHelper}>
            {props.children}
        </CartContex.Provider>
    );
}

export default CartProvider;