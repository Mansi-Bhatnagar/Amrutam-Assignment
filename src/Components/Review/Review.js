import doctor from "../../Assets/Images/doctor.jpeg";
import classes from "./Review.module.css";

const Review = ({ name, date, problem, description }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img src={doctor} alt="doctor-avatar" />
        <div className={classes.name}>
          <div>
            <h4>{name}</h4>
            <span>{problem}</span>
          </div>
          <h5>{date}</h5>
        </div>
      </div>
      <div className={classes.stars}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.24768 1.23357C7.55389 0.60547 8.44895 0.60547 8.75516 1.23357L10.3828 4.57212C10.504 4.82079 10.7401 4.99366 11.0137 5.03416L14.6719 5.57554C15.3561 5.6768 15.6304 6.51637 15.1379 7.00209L12.479 9.62418C12.2842 9.81633 12.1954 10.0915 12.2411 10.3613L12.8666 14.0539C12.9829 14.7403 12.2603 15.2613 11.6457 14.9341L8.39552 13.2035C8.14916 13.0723 7.85368 13.0723 7.60732 13.2035L4.35713 14.9341C3.74257 15.2613 3.01998 14.7403 3.13626 14.0539L3.76177 10.3613C3.80747 10.0915 3.71865 9.81633 3.5238 9.62418L0.864954 7.00209C0.372428 6.51637 0.646702 5.6768 1.33099 5.57554L4.98911 5.03416C5.26278 4.99366 5.49886 4.82079 5.62009 4.57212L7.24768 1.23357Z"
            fill="#F79624"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.24768 1.23357C7.55389 0.60547 8.44895 0.60547 8.75516 1.23357L10.3828 4.57212C10.504 4.82079 10.7401 4.99366 11.0137 5.03416L14.6719 5.57554C15.3561 5.6768 15.6304 6.51637 15.1379 7.00209L12.479 9.62418C12.2842 9.81633 12.1954 10.0915 12.2411 10.3613L12.8666 14.0539C12.9829 14.7403 12.2603 15.2613 11.6457 14.9341L8.39552 13.2035C8.14916 13.0723 7.85368 13.0723 7.60732 13.2035L4.35713 14.9341C3.74257 15.2613 3.01998 14.7403 3.13626 14.0539L3.76177 10.3613C3.80747 10.0915 3.71865 9.81633 3.5238 9.62418L0.864954 7.00209C0.372428 6.51637 0.646702 5.6768 1.33099 5.57554L4.98911 5.03416C5.26278 4.99366 5.49886 4.82079 5.62009 4.57212L7.24768 1.23357Z"
            fill="#F79624"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.24768 1.23357C7.55389 0.60547 8.44895 0.60547 8.75516 1.23357L10.3828 4.57212C10.504 4.82079 10.7401 4.99366 11.0137 5.03416L14.6719 5.57554C15.3561 5.6768 15.6304 6.51637 15.1379 7.00209L12.479 9.62418C12.2842 9.81633 12.1954 10.0915 12.2411 10.3613L12.8666 14.0539C12.9829 14.7403 12.2603 15.2613 11.6457 14.9341L8.39552 13.2035C8.14916 13.0723 7.85368 13.0723 7.60732 13.2035L4.35713 14.9341C3.74257 15.2613 3.01998 14.7403 3.13626 14.0539L3.76177 10.3613C3.80747 10.0915 3.71865 9.81633 3.5238 9.62418L0.864954 7.00209C0.372428 6.51637 0.646702 5.6768 1.33099 5.57554L4.98911 5.03416C5.26278 4.99366 5.49886 4.82079 5.62009 4.57212L7.24768 1.23357Z"
            fill="#F79624"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.24768 1.23357C7.55389 0.60547 8.44895 0.60547 8.75516 1.23357L10.3828 4.57212C10.504 4.82079 10.7401 4.99366 11.0137 5.03416L14.6719 5.57554C15.3561 5.6768 15.6304 6.51637 15.1379 7.00209L12.479 9.62418C12.2842 9.81633 12.1954 10.0915 12.2411 10.3613L12.8666 14.0539C12.9829 14.7403 12.2603 15.2613 11.6457 14.9341L8.39552 13.2035C8.14916 13.0723 7.85368 13.0723 7.60732 13.2035L4.35713 14.9341C3.74257 15.2613 3.01998 14.7403 3.13626 14.0539L3.76177 10.3613C3.80747 10.0915 3.71865 9.81633 3.5238 9.62418L0.864954 7.00209C0.372428 6.51637 0.646702 5.6768 1.33099 5.57554L4.98911 5.03416C5.26278 4.99366 5.49886 4.82079 5.62009 4.57212L7.24768 1.23357Z"
            fill="#F79624"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.24768 1.23357C7.55389 0.60547 8.44895 0.60547 8.75516 1.23357L10.3828 4.57212C10.504 4.82079 10.7401 4.99366 11.0137 5.03416L14.6719 5.57554C15.3561 5.6768 15.6304 6.51637 15.1379 7.00209L12.479 9.62418C12.2842 9.81633 12.1954 10.0915 12.2411 10.3613L12.8666 14.0539C12.9829 14.7403 12.2603 15.2613 11.6457 14.9341L8.39552 13.2035C8.14916 13.0723 7.85368 13.0723 7.60732 13.2035L4.35713 14.9341C3.74257 15.2613 3.01998 14.7403 3.13626 14.0539L3.76177 10.3613C3.80747 10.0915 3.71865 9.81633 3.5238 9.62418L0.864954 7.00209C0.372428 6.51637 0.646702 5.6768 1.33099 5.57554L4.98911 5.03416C5.26278 4.99366 5.49886 4.82079 5.62009 4.57212L7.24768 1.23357Z"
            fill="#F79624"
          />
        </svg>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Review;