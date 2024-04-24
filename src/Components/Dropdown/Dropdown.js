import classes from "./Dropdown.module.css";
const Dropdown = (props) => {
  return (
    <div
      className={classes.dropdownContainer}
      onClick={props.onClick}
      style={props.style}
    >
      <span>{props.name}</span>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1.5L7 6.5L13 1.5"
          stroke="#828282"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {props.dropdown ? (
        <div className={classes.dropdown}>
          <span>Options...</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
