import doctor from "../../Assets/Images/doctor.png";
import link from "../../Assets/Images/link.png";
import scholar from "../../Assets/Images/scholar.png";
import comment from "../../Assets/Images/comment.png";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={classes.container}>
      <img src={doctor} alt="doctor" className={classes.doctor} />
      <div className={classes.rating}>
        <span>4.5</span>
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.85547 16.3333L5.20964 10.4792L0.667969 6.54167L6.66797 6.02083L9.0013 0.5L11.3346 6.02083L17.3346 6.54167L12.793 10.4792L14.1471 16.3333L9.0013 13.2292L3.85547 16.3333Z"
            fill="#EFDA3B"
          />
        </svg>
      </div>
      <div className={classes.info}>
        <h2>{props.name}</h2>
        <div>
          <img src={link} alt="link" className={classes.link} />
          <span>Male-Female Infertility</span>
        </div>
        <div>
          <img src={scholar} alt="scholar" className={classes.scholar} />
          <span>7 years of Experience</span>
        </div>
        <div>
          <img src={comment} alt="comment" className={classes.comment} />
          <span>Speaks: English, Hindi, Marathi</span>
        </div>
        <div className={classes.options}>
          <div>
            <h5>Video Consultation</h5>
            <span>₹800</span>
          </div>
          <div>
            {" "}
            <h5>Chat Consultation</h5>
            <span>Free</span>
          </div>
        </div>
      </div>
      <button className={classes.viewBtn}>View Profile</button>
      <button className={classes.bookBtn}>Book a consultation</button>
    </div>
  );
};

export default Card;
