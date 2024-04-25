import classes from "./Box.module.css";
const Box = (props) => {
  return (
    <div className={classes.container} style={props.style}>
      {props.children}
    </div>
  );
};

export default Box;
