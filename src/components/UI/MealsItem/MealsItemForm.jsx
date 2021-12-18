import { useRef, useState } from "react";
import InputForm from "../InputForm/InputForm";
import classes from "./MealsItemForm.module.css";

function MealsItemForm(props) {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enternedAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enternedAmount;
        
        if(enternedAmount.trim().length === 0 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }else {
            props.onAddToCart(enteredAmountNumber);
            setAmountIsValid(true);
        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <InputForm ref={amountInputRef} label="Amount" input={{
                id: props.id,
                type: "number",
                min: "1",
                max: "10",
                step: "1",
                defaultValue: "1",
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount!</p>}
        </form>
    );
}

export default MealsItemForm;