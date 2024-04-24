import cross from "../../Assets/Images/cross.png";
import classes from "./AppliedFilters.module.css";
const AppliedFilters = (props) => {
  return (
    <div className={classes.container}>
      <span>{props.name}</span>
      <img src={cross} alt="cross" />
    </div>
  );
};

export default AppliedFilters;
