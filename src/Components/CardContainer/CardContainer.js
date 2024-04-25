import plus from "../../Assets/Images/plus.png";
import classes from "./CardContainer.module.css";

const CardContainer = (props) => {
  return (
    <div
      className={classes.container}
      data-aos={props["data-aos"]}
      data-aos-delay={props["data-aos-delay"]}
      data-aos-mirror={props["data-aos-mirror"]}
    >
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
