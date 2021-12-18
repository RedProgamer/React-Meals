import classes from "./Wrapper.module.css";

function Wrapper(props) {
    return (
        <div className={classes.root}>{props.children}</div>
    );
}

export default Wrapper;