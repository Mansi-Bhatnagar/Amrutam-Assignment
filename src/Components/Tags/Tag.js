import classes from "./Tag.module.css";

const Tag = (props) => {
  return (
    <div className={classes.container} style={props.style}>
      {props.name}
    </div>
  );
};

export default Tag;
