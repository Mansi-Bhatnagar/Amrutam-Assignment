import { useState } from "react";
import Card from "../../Components/Card/Card";
import Dropdown from "../../Components/Dropdown/Dropdown";
import AppliedFilters from "../../Components/AppliedFilters/AppliedFilters";
import classes from "./FindDoctors.module.css";
const FindDoctors = () => {
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [expertiseDropdown, setExpertiseDropdown] = useState(false);
  const [genderDropdown, setGenderDropdown] = useState(false);
  const [feesDropdown, setFeesDropdown] = useState(false);
  const [languagesDropdown, setLanguagesDropdown] = useState(false);
  const [allFiltersDropdown, setAllFiltersDropdown] = useState(false);

  const locationDropdownHandler = () => {
    setLocationDropdown((prev) => !prev);
  };
  const expertiseDropdownHandler = () => {
    setExpertiseDropdown((prev) => !prev);
  };
  const genderDropdownHandler = () => {
    setGenderDropdown((prev) => !prev);
  };
  const feesDropdownHandler = () => {
    setFeesDropdown((prev) => !prev);
  };
  const languagesDropdownHandler = () => {
    setLanguagesDropdown((prev) => !prev);
  };
  const allFiltersDropdownHandler = () => {
    setAllFiltersDropdown((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <div className={classes.searchSection}>
        {/* <div className={`${classes.circle1} ${classes.circle}`} />
        <div className={`${classes.circle2} ${classes.circle}`} />
        <div className={`${classes.circle3} ${classes.circle}`} />
        <div className={`${classes.circle4} ${classes.circle}`} /> */}
        <h1>find expert doctors for an in-clinic session here</h1>
        <div className={classes.searchInputs}>
          <div
            className={classes.locationDropdownContainer}
            onClick={locationDropdownHandler}
          >
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2942 6.23375L10.2936 6.23315C9.8086 5.74897 9.21086 5.5 8.52734 5.5C7.84381 5.5 7.24623 5.749 6.76179 6.23345C6.27686 6.71838 6.02734 7.31621 6.02734 8C6.02734 8.68367 6.27679 9.28123 6.76179 9.76555C7.24611 10.2506 7.84367 10.5 8.52734 10.5C9.21113 10.5 9.80897 10.2505 10.2939 9.76555C10.7783 9.28111 11.0273 8.68354 11.0273 8C11.0273 7.31649 10.7784 6.71874 10.2942 6.23375ZM3.27929 2.59258L3.27936 2.59251C4.79844 1.19121 6.54089 0.5 8.52734 0.5C10.5138 0.5 12.2563 1.19121 13.7753 2.59251L13.7754 2.59258C15.2663 3.96736 16.0273 5.81773 16.0273 8.2C16.0273 9.67313 15.4747 11.2999 14.3084 13.09C13.1427 14.8788 11.3634 16.839 8.9525 18.9698C8.90026 19.0124 8.83495 19.0506 8.75178 19.0818C8.67074 19.1122 8.59674 19.125 8.52734 19.125C8.45794 19.125 8.38395 19.1122 8.3029 19.0818C8.21973 19.0506 8.15442 19.0124 8.10218 18.9698C5.69129 16.839 3.912 14.8788 2.74624 13.09C1.58003 11.2999 1.02734 9.67313 1.02734 8.2C1.02734 5.81773 1.78835 3.96736 3.27929 2.59258Z"
                fill="#3A643B"
                stroke="#3A643B"
              />
            </svg>
            <span>Select Location</span>
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.51953 1.5L7.50151 8.16667L13.4835 1.5"
                stroke="#131313"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {locationDropdown ? (
              <div className={classes.locationDropdown}>
                <span>Options...</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={classes.infoInputContainer}>
            <input
              type="text"
              placeholder="eg. Doctor, specialisation, clinic name"
            />
            <svg
              width="29"
              height="24"
              viewBox="0 0 29 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8354 4L13.1811 5.41L19.7279 11H5.44922V13H19.7279L13.1811 18.59L14.8354 20L24.2215 12L14.8354 4Z"
                fill="#1C1B1F"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={classes.filterSection}>
        <Dropdown
          name={"Expertise"}
          onClick={expertiseDropdownHandler}
          dropdown={expertiseDropdown}
        />
        <Dropdown
          name={"Gender"}
          onClick={genderDropdownHandler}
          dropdown={genderDropdown}
        />
        <Dropdown
          name={"Fees"}
          onClick={feesDropdownHandler}
          dropdown={feesDropdown}
        />
        <Dropdown
          name={"Languages"}
          onClick={languagesDropdownHandler}
          dropdown={languagesDropdown}
        />
        <Dropdown
          name={"All Filters"}
          onClick={allFiltersDropdownHandler}
          dropdown={allFiltersDropdown}
          style={{ background: "#DCEEDC", color: "#3A643B" }}
        />
      </div>
      <div className={classes.appliedFiltersContainer}>
        <AppliedFilters name={"Hair care"} />
        <AppliedFilters name={"Female"} />
        <AppliedFilters name={"Rs.0-Rs.500"} />
        <AppliedFilters name={"Hindi"} />
      </div>
      <div className={classes.cardContainer}>
        <Card name={"Dr. Bruce Willis"} />
        <Card name={"Dr. Prerna Narang"} />
        <Card name={"Dr. Prerna Narang"} />
      </div>
    </div>
  );
};

export default FindDoctors;
