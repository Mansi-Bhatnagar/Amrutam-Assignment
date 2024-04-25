import plus from "../../Assets/Images/plus.png";
import classes from "./CardContainer.module.css";

const CardContainer = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>{props.name}</h3>
        {props.button ? (
          <button>
            Follow
            <img src={plus} alt="plus" />
          </button>
        ) : (
          ""
        )}
      </div>
      {props.children}
    </div>
  );
};

export default CardContainer;
