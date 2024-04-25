import { useState } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import Tag from "../../Components/Tags/Tag";
import background from "../../Assets/Images/background.png";
import bruce from "../../Assets/Images/bruce.png";
import sp1 from "../../Assets/Images/sp1.png";
import sp2 from "../../Assets/Images/sp2.png";
import sp3 from "../../Assets/Images/sp3.png";
import sp4 from "../../Assets/Images/sp4.png";
import classes from "./Detail.module.css";
import Review from "../../Components/Review/Review";
import Box from "../../Components/Box/Box";

const Detail = () => {
  const [show, setShow] = useState(false);
  const [readText, setReadText] = useState("Read More");
  const readHandler = () => {
    setShow((prev) => !prev);
    setReadText((prev) => (prev === "Read More" ? "Read Less" : "Read More"));
  };
  const tagStyle = {
    fontFamily: "Nunito",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "20px",
    letterSpacing: "-0.01em",
  };
  const concernTagStyle = {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "18px",
    color: "#3A643B",
  };
  return (
    <div>
      <div className={classes.header}>
        <img src={background} alt="background" />
        <div className={classes.statsContainer}>
          <img src={bruce} alt="doctor-bruce" className={classes.bruce} />
          <div className={classes.stats}>
            <div className={classes.name}>
              <div>
                <h4>Dr. Bruce Willis</h4>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0L17.0711 2.92893L20 10L17.0711 17.0711L10 20L2.92893 17.0711L0 10L2.92893 2.92893L10 0Z"
                    fill="#2E37A4"
                  />
                  <path
                    d="M14.6654 7.25L8.2487 13.2083L5.33203 10.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h5>Gynecologist</h5>
              <div className={classes.rating}>
                <span>4.2</span>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.74768 1.23357C7.05389 0.60547 7.94895 0.60547 8.25516 1.23357L9.88275 4.57212C10.004 4.82079 10.2401 4.99366 10.5137 5.03416L14.1719 5.57554C14.8561 5.6768 15.1304 6.51637 14.6379 7.00209L11.979 9.62418C11.7842 9.81633 11.6954 10.0915 11.7411 10.3613L12.3666 14.0539C12.4829 14.7403 11.7603 15.2613 11.1457 14.9341L7.89552 13.2035C7.64916 13.0723 7.35368 13.0723 7.10732 13.2035L3.85713 14.9341C3.24257 15.2613 2.51998 14.7403 2.63626 14.0539L3.26177 10.3613C3.30747 10.0915 3.21865 9.81633 3.0238 9.62418L0.364954 7.00209C-0.127572 6.51637 0.146702 5.6768 0.830989 5.57554L4.48911 5.03416C4.76278 4.99366 4.99886 4.82079 5.12009 4.57212L6.74768 1.23357Z"
                    fill="#F79624"
                  />
                </svg>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.74768 1.23357C7.05389 0.60547 7.94895 0.60547 8.25516 1.23357L9.88275 4.57212C10.004 4.82079 10.2401 4.99366 10.5137 5.03416L14.1719 5.57554C14.8561 5.6768 15.1304 6.51637 14.6379 7.00209L11.979 9.62418C11.7842 9.81633 11.6954 10.0915 11.7411 10.3613L12.3666 14.0539C12.4829 14.7403 11.7603 15.2613 11.1457 14.9341L7.89552 13.2035C7.64916 13.0723 7.35368 13.0723 7.10732 13.2035L3.85713 14.9341C3.24257 15.2613 2.51998 14.7403 2.63626 14.0539L3.26177 10.3613C3.30747 10.0915 3.21865 9.81633 3.0238 9.62418L0.364954 7.00209C-0.127572 6.51637 0.146702 5.6768 0.830989 5.57554L4.48911 5.03416C4.76278 4.99366 4.99886 4.82079 5.12009 4.57212L6.74768 1.23357Z"
                    fill="#F79624"
                  />
                </svg>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.74768 1.23357C7.05389 0.60547 7.94895 0.60547 8.25516 1.23357L9.88275 4.57212C10.004 4.82079 10.2401 4.99366 10.5137 5.03416L14.1719 5.57554C14.8561 5.6768 15.1304 6.51637 14.6379 7.00209L11.979 9.62418C11.7842 9.81633 11.6954 10.0915 11.7411 10.3613L12.3666 14.0539C12.4829 14.7403 11.7603 15.2613 11.1457 14.9341L7.89552 13.2035C7.64916 13.0723 7.35368 13.0723 7.10732 13.2035L3.85713 14.9341C3.24257 15.2613 2.51998 14.7403 2.63626 14.0539L3.26177 10.3613C3.30747 10.0915 3.21865 9.81633 3.0238 9.62418L0.364954 7.00209C-0.127572 6.51637 0.146702 5.6768 0.830989 5.57554L4.48911 5.03416C4.76278 4.99366 4.99886 4.82079 5.12009 4.57212L6.74768 1.23357Z"
                    fill="#F79624"
                  />
                </svg>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.74768 1.23357C7.05389 0.60547 7.94895 0.60547 8.25516 1.23357L9.88275 4.57212C10.004 4.82079 10.2401 4.99366 10.5137 5.03416L14.1719 5.57554C14.8561 5.6768 15.1304 6.51637 14.6379 7.00209L11.979 9.62418C11.7842 9.81633 11.6954 10.0915 11.7411 10.3613L12.3666 14.0539C12.4829 14.7403 11.7603 15.2613 11.1457 14.9341L7.89552 13.2035C7.64916 13.0723 7.35368 13.0723 7.10732 13.2035L3.85713 14.9341C3.24257 15.2613 2.51998 14.7403 2.63626 14.0539L3.26177 10.3613C3.30747 10.0915 3.21865 9.81633 3.0238 9.62418L0.364954 7.00209C-0.127572 6.51637 0.146702 5.6768 0.830989 5.57554L4.48911 5.03416C4.76278 4.99366 4.99886 4.82079 5.12009 4.57212L6.74768 1.23357Z"
                    fill="#F79624"
                  />
                </svg>
              </div>
            </div>
            <div className={classes.values}>
              <div>
                <h5>Followers</h5>
                <span>850</span>
              </div>
              <div>
                <h5>Following</h5>
                <span>18K</span>
              </div>
              <div>
                <h5>Posts</h5>
                <span>250</span>
              </div>
            </div>
            <button className={classes.bookBtn}>Book an Appointment</button>
          </div>
        </div>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.sec1}>
          <CardContainer name={"A Little About me"} button={true}>
            <div className={classes.intro}>
              <p>
                Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
                Surat. love to work with all my hospital staff and seniour
                doctors. Completed my graduation in Gynaecologist Medicine from
                the{" "}
                {show ? (
                  <span>University of Medical Sciences in Surat.</span>
                ) : (
                  ""
                )}
              </p>

              <div className={classes.read}>
                <div />
                <span onClick={readHandler}>{readText}</span>
              </div>
              <div className={classes.lang}>
                <h3>Language Spoken</h3>
                <Tag style={tagStyle} name={"English"} />
                <Tag style={tagStyle} name={"Hindi"} />
                <Tag style={tagStyle} name={"Telugu"} />
              </div>
              <div className={classes.links}>
                <div>
                  <svg
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                      stroke="#3A643B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z"
                      stroke="#3A643B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.9997 10.3703C15.1231 11.2025 14.981 12.0525 14.5935 12.7993C14.206 13.5461 13.5929 14.1517 12.8413 14.53C12.0898 14.9082 11.2382 15.0399 10.4075 14.9062C9.57683 14.7726 8.80947 14.3804 8.21455 13.7855C7.61962 13.1905 7.22744 12.4232 7.09377 11.5925C6.96011 10.7619 7.09177 9.9102 7.47003 9.15868C7.84829 8.40716 8.45389 7.79404 9.20069 7.40654C9.94749 7.01904 10.7975 6.87689 11.6297 7.0003C12.4786 7.12619 13.2646 7.52176 13.8714 8.12861C14.4782 8.73545 14.8738 9.52138 14.9997 10.3703Z"
                      stroke="#3A643B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 5.5H16.51"
                      stroke="#3A643B"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="24"
                    height="17"
                    viewBox="0 0 24 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5406 3.42C22.4218 2.94541 22.1799 2.51057 21.8392 2.15941C21.4986 1.80824 21.0713 1.55318 20.6006 1.42C18.8806 1 12.0006 1 12.0006 1C12.0006 1 5.12057 1 3.40057 1.46C2.92982 1.59318 2.50255 1.84824 2.16192 2.19941C1.82129 2.55057 1.57936 2.98541 1.46057 3.46C1.14579 5.20556 0.991808 6.97631 1.00057 8.75C0.989351 10.537 1.14334 12.3213 1.46057 14.08C1.59153 14.5398 1.83888 14.9581 2.17872 15.2945C2.51855 15.6308 2.93939 15.8738 3.40057 16C5.12057 16.46 12.0006 16.46 12.0006 16.46C12.0006 16.46 18.8806 16.46 20.6006 16C21.0713 15.8668 21.4986 15.6118 21.8392 15.2606C22.1799 14.9094 22.4218 14.4746 22.5406 14C22.8529 12.2676 23.0069 10.5103 23.0006 8.75C23.0118 6.96295 22.8578 5.1787 22.5406 3.42Z"
                      stroke="#3A643B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.75 12.0205L15.5 8.75047L9.75 5.48047V12.0205Z"
                      stroke="#3A643B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006Z"
                      stroke="#3A643B"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer name={"I Specialize In"}>
            <div className={classes.specialize}>
              <div>
                <div className={classes.spContainer}>
                  <img src={sp1} alt="specialization" />
                </div>
                <h3>Women’s Health</h3>
              </div>
              <div>
                <div className={classes.spContainer}>
                  <img src={sp2} alt="specialization" />
                </div>
                <h3>Skin Care</h3>
              </div>
              <div>
                <div className={classes.spContainer}>
                  <img src={sp3} alt="specialization" />
                </div>
                <h3>Immunity</h3>
              </div>
              <div>
                <div className={classes.spContainer}>
                  <img src={sp4} alt="specialization" />
                </div>
                <h3>Hair care</h3>
              </div>
            </div>
          </CardContainer>
          <CardContainer name={"The Concerns I Treat"}>
            <div className={classes.concerns}>
              <Tag name={"Skin Treatment"} style={concernTagStyle} />
              <Tag name={"Pregnancy"} style={concernTagStyle} />
              <Tag name={"Period Doubts"} style={concernTagStyle} />
              <Tag name={"Endometriosis"} style={concernTagStyle} />
              <Tag name={"Pelvic Pain"} style={concernTagStyle} />
              <Tag name={"Ovarian Cysts"} style={concernTagStyle} />
              <Tag
                name={"+ 5 More"}
                style={{
                  ...concernTagStyle,
                  background: "#ffffff",
                  border: "1px solid #E0DFDF",
                }}
              />
            </div>
          </CardContainer>
          <CardContainer name={"My Work Experience"}>
            <div className={classes.experienceContainer}>
              <h3>I have been in practice for : 7+ Years</h3>
              <div className={classes.experience}>
                <div className={classes.expImgContainer}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 5V19C23 19.55 22.8043 20.021 22.413 20.413C22.0217 20.805 21.5507 21.0007 21 21H18C17.7167 21 17.4793 20.904 17.288 20.712C17.0967 20.52 17.0007 20.2827 17 20C17 19.7167 17.096 19.4793 17.288 19.288C17.48 19.0967 17.7173 19.0007 18 19H21V5H12V5.5C12 5.78333 11.904 6.021 11.712 6.213C11.52 6.405 11.2827 6.50067 11 6.5C10.7167 6.5 10.4793 6.404 10.288 6.212C10.0967 6.02 10.0007 5.78267 10 5.5V4.95C10 4.41667 10.1917 3.95833 10.575 3.575C10.9583 3.19167 11.4167 3 11.95 3H21C21.55 3 22.021 3.196 22.413 3.588C22.805 3.98 23.0007 4.45067 23 5ZM1 12.025C1 11.6917 1.075 11.3833 1.225 11.1C1.375 10.8167 1.58333 10.5833 1.85 10.4L6.85 6.825C7.03333 6.69167 7.221 6.59567 7.413 6.537C7.605 6.47833 7.80067 6.44933 8 6.45C8.2 6.45 8.396 6.47933 8.588 6.538C8.78 6.59667 8.96733 6.69233 9.15 6.825L14.15 10.4C14.4167 10.5833 14.625 10.8167 14.775 11.1C14.925 11.3833 15 11.6917 15 12.025V19C15 19.55 14.8043 20.021 14.413 20.413C14.0217 20.805 13.5507 21.0007 13 21H11C10.45 21 9.97933 20.8043 9.588 20.413C9.19667 20.0217 9.00067 19.5507 9 19V16H7V19C7 19.55 6.80433 20.021 6.413 20.413C6.02167 20.805 5.55067 21.0007 5 21H3C2.45 21 1.97933 20.8043 1.588 20.413C1.19667 20.0217 1.00067 19.5507 1 19V12.025ZM3 12V19H5V16C5 15.45 5.196 14.9793 5.588 14.588C5.98 14.1967 6.45067 14.0007 7 14H9C9.55 14 10.021 14.196 10.413 14.588C10.805 14.98 11.0007 15.4507 11 16V19H13V12L8 8.45L3 12ZM17.5 9H18.5C18.6333 9 18.75 8.95 18.85 8.85C18.95 8.75 19 8.63333 19 8.5V7.5C19 7.36667 18.95 7.25 18.85 7.15C18.75 7.05 18.6333 7 18.5 7H17.5C17.3667 7 17.25 7.05 17.15 7.15C17.05 7.25 17 7.36667 17 7.5V8.5C17 8.63333 17.05 8.75 17.15 8.85C17.25 8.95 17.3667 9 17.5 9ZM17.5 13H18.5C18.6333 13 18.75 12.95 18.85 12.85C18.95 12.75 19 12.6333 19 12.5V11.5C19 11.3667 18.95 11.25 18.85 11.15C18.75 11.05 18.6333 11 18.5 11H17.5C17.3667 11 17.25 11.05 17.15 11.15C17.05 11.25 17 11.3667 17 11.5V12.5C17 12.6333 17.05 12.75 17.15 12.85C17.25 12.95 17.3667 13 17.5 13ZM17.5 17H18.5C18.6333 17 18.75 16.95 18.85 16.85C18.95 16.75 19 16.6333 19 16.5V15.5C19 15.3667 18.95 15.25 18.85 15.15C18.75 15.05 18.6333 15 18.5 15H17.5C17.3667 15 17.25 15.05 17.15 15.15C17.05 15.25 17 15.3667 17 15.5V16.5C17 16.6333 17.05 16.75 17.15 16.85C17.25 16.95 17.3667 17 17.5 17Z"
                      fill="#2E37A4"
                    />
                  </svg>
                </div>
                <div className={classes.expSec}>
                  <div>
                    <h4>Midtown Medical Clinic</h4>
                    <span>Senior doctor</span>
                  </div>
                  <div>
                    <h5>2016-present</h5>
                  </div>
                </div>
              </div>
              <div
                className={classes.experience}
                style={{ marginBottom: "42px" }}
              >
                <div className={classes.expImgContainer}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 5V19C23 19.55 22.8043 20.021 22.413 20.413C22.0217 20.805 21.5507 21.0007 21 21H18C17.7167 21 17.4793 20.904 17.288 20.712C17.0967 20.52 17.0007 20.2827 17 20C17 19.7167 17.096 19.4793 17.288 19.288C17.48 19.0967 17.7173 19.0007 18 19H21V5H12V5.5C12 5.78333 11.904 6.021 11.712 6.213C11.52 6.405 11.2827 6.50067 11 6.5C10.7167 6.5 10.4793 6.404 10.288 6.212C10.0967 6.02 10.0007 5.78267 10 5.5V4.95C10 4.41667 10.1917 3.95833 10.575 3.575C10.9583 3.19167 11.4167 3 11.95 3H21C21.55 3 22.021 3.196 22.413 3.588C22.805 3.98 23.0007 4.45067 23 5ZM1 12.025C1 11.6917 1.075 11.3833 1.225 11.1C1.375 10.8167 1.58333 10.5833 1.85 10.4L6.85 6.825C7.03333 6.69167 7.221 6.59567 7.413 6.537C7.605 6.47833 7.80067 6.44933 8 6.45C8.2 6.45 8.396 6.47933 8.588 6.538C8.78 6.59667 8.96733 6.69233 9.15 6.825L14.15 10.4C14.4167 10.5833 14.625 10.8167 14.775 11.1C14.925 11.3833 15 11.6917 15 12.025V19C15 19.55 14.8043 20.021 14.413 20.413C14.0217 20.805 13.5507 21.0007 13 21H11C10.45 21 9.97933 20.8043 9.588 20.413C9.19667 20.0217 9.00067 19.5507 9 19V16H7V19C7 19.55 6.80433 20.021 6.413 20.413C6.02167 20.805 5.55067 21.0007 5 21H3C2.45 21 1.97933 20.8043 1.588 20.413C1.19667 20.0217 1.00067 19.5507 1 19V12.025ZM3 12V19H5V16C5 15.45 5.196 14.9793 5.588 14.588C5.98 14.1967 6.45067 14.0007 7 14H9C9.55 14 10.021 14.196 10.413 14.588C10.805 14.98 11.0007 15.4507 11 16V19H13V12L8 8.45L3 12ZM17.5 9H18.5C18.6333 9 18.75 8.95 18.85 8.85C18.95 8.75 19 8.63333 19 8.5V7.5C19 7.36667 18.95 7.25 18.85 7.15C18.75 7.05 18.6333 7 18.5 7H17.5C17.3667 7 17.25 7.05 17.15 7.15C17.05 7.25 17 7.36667 17 7.5V8.5C17 8.63333 17.05 8.75 17.15 8.85C17.25 8.95 17.3667 9 17.5 9ZM17.5 13H18.5C18.6333 13 18.75 12.95 18.85 12.85C18.95 12.75 19 12.6333 19 12.5V11.5C19 11.3667 18.95 11.25 18.85 11.15C18.75 11.05 18.6333 11 18.5 11H17.5C17.3667 11 17.25 11.05 17.15 11.15C17.05 11.25 17 11.3667 17 11.5V12.5C17 12.6333 17.05 12.75 17.15 12.85C17.25 12.95 17.3667 13 17.5 13ZM17.5 17H18.5C18.6333 17 18.75 16.95 18.85 16.85C18.95 16.75 19 16.6333 19 16.5V15.5C19 15.3667 18.95 15.25 18.85 15.15C18.75 15.05 18.6333 15 18.5 15H17.5C17.3667 15 17.25 15.05 17.15 15.15C17.05 15.25 17 15.3667 17 15.5V16.5C17 16.6333 17.05 16.75 17.15 16.85C17.25 16.95 17.3667 17 17.5 17Z"
                      fill="#2E37A4"
                    />
                  </svg>
                </div>
                <div className={classes.expSec}>
                  <div>
                    <h4>Midtown Medical Clinic</h4>
                    <span>Senior doctor</span>
                  </div>
                  <div>
                    <h5 style={{ paddingRight: "31px" }}>2010-2015</h5>
                  </div>
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer name={"Featured Reviews (102)"}>
            <Review
              name={"Alicent Hightower"}
              date={"20 January 2023"}
              problem={"Consulted for Skin care"}
              description={
                "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods"
              }
            />
            <Review
              name={"Alicent Hightower"}
              date={"20 January 2023"}
              problem={"Consulted for Pregnancy"}
              description={
                "Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods"
              }
            />
          </CardContainer>
        </div>
        <div className={classes.sec2}>
          <div className={classes.fees}>
            <h3>Appointment Fee</h3>
            <span>₹699.00</span>
          </div>
          <div className={classes.mode}>
            <div className={classes.heading}>
              <h3>Select your mode of session</h3>
              <div className={classes.modeBorder} />
            </div>
            <div className={classes.modeNames}>
              <div>
                <h4>In-Clinic</h4>
                <span>45 Mins</span>
              </div>
              <div
                style={{ border: "1px solid #3A643B85", background: "#F2FBF2" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    border: "none",
                    gap: "8px",
                    height: "max-content",
                    color: "#3A643B",
                  }}
                >
                  <h4>Video</h4>
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10.5" r="10" fill="#3A643B" />
                    <path
                      d="M14.5 7.25L7.625 14.125L4.5 11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span>45 Mins</span>
              </div>
              <div>
                <h4>Chat</h4>
                <span>10 Mins</span>
              </div>
            </div>
          </div>
          <div className={classes.time}>
            <div className={classes.timeHeader}>
              <h3>Pick a Time slot</h3>
              <div className={classes.timeBorder} />
              <div className={classes.calendar}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 2V6"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 2V6"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 10H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className={classes.timeSlotsContainer}>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0193 9.98043C20.0086 4.45744 15.523 -0.0109155 9.99998 -0.000256465C4.47699 0.0104026 0.00864036 4.49603 0.0192994 10.019C0.0299585 15.542 4.51559 20.0104 10.0386 19.9997C15.5616 19.989 20.0299 15.5034 20.0193 9.98043ZM18.5193 9.98332C18.5236 12.2377 17.6323 14.4014 16.0413 15.9985C14.4503 17.5957 12.29 18.4954 10.0357 18.4997C7.78135 18.5041 5.61762 17.6127 4.02048 16.0217C2.42335 14.4307 1.52365 12.2705 1.5193 10.0161C1.51495 7.76179 2.40631 5.59806 3.99728 4.00093C5.58826 2.4038 7.74854 1.50409 10.0029 1.49974C12.2572 1.49539 14.4209 2.38675 16.0181 3.97773C17.6152 5.56871 18.5149 7.72898 18.5193 9.98332ZM12.058 14.5258C12.1982 14.3849 12.2767 14.1941 12.2763 13.9954C12.276 13.7966 12.1967 13.6062 12.056 13.4658L8.57928 10.0025L12.0426 6.52581C12.1748 6.38338 12.2465 6.1952 12.2427 6.0009C12.2389 5.80661 12.1599 5.62138 12.0222 5.48423C11.8845 5.34708 11.699 5.26873 11.5047 5.26567C11.3104 5.26262 11.1225 5.33511 10.9805 5.46786L6.98826 9.47557C6.84809 9.61647 6.76956 9.80725 6.76995 10.006C6.77033 10.2047 6.84959 10.3952 6.99031 10.5356L10.998 14.5278C11.1389 14.668 11.3297 14.7465 11.5284 14.7462C11.7272 14.7458 11.9177 14.6665 12.058 14.5258Z"
                  fill="#808080"
                />
              </svg>
              <Box
                style={{
                  background: "#F2FBF2",
                  marginBottom: "24px",
                  marginTop: "24px",
                }}
              >
                <h4 className={classes.timeDate} style={{ color: "#3A643B" }}>
                  Mon, 10 Oct
                </h4>
                <h5 className={classes.slots} style={{ color: "#818181" }}>
                  10 slots
                </h5>
              </Box>
              <Box>
                <h4 className={classes.timeDate}>Tue, 11 Oct</h4>
                <h5 className={classes.slots} style={{ color: "#D5512E" }}>
                  02 slots
                </h5>
              </Box>
              <Box>
                <h4 className={classes.timeDate}>Wed, 12 Oct</h4>
                <h5 className={classes.slots} style={{ color: "#F1B93A" }}>
                  05 slots
                </h5>
              </Box>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0390625 10C0.0390625 15.523 4.51606 20 10.0391 20C15.5621 20 20.0391 15.523 20.0391 10C20.0391 4.477 15.5621 0 10.0391 0C4.51606 0 0.0390625 4.477 0.0390625 10ZM1.53906 10C1.53906 7.74566 2.4346 5.58365 4.02865 3.98959C5.62271 2.39553 7.78472 1.5 10.0391 1.5C12.2934 1.5 14.4554 2.39553 16.0495 3.98959C17.6435 5.58365 18.5391 7.74566 18.5391 10C18.5391 12.2543 17.6435 14.4163 16.0495 16.0104C14.4554 17.6045 12.2934 18.5 10.0391 18.5C7.78472 18.5 5.62271 17.6045 4.02865 16.0104C2.4346 14.4163 1.53906 12.2543 1.53906 10ZM8.00906 5.47C7.86861 5.61062 7.78972 5.80125 7.78972 6C7.78972 6.19875 7.86861 6.38937 8.00906 6.53L11.4791 10L8.00906 13.47C7.87658 13.6122 7.80446 13.8002 7.80789 13.9945C7.81132 14.1888 7.89003 14.3742 8.02744 14.5116C8.16485 14.649 8.35024 14.7277 8.54454 14.7312C8.73884 14.7346 8.92689 14.6625 9.06906 14.53L13.0691 10.53C13.2095 10.3894 13.2884 10.1988 13.2884 10C13.2884 9.80125 13.2095 9.61063 13.0691 9.47L9.06906 5.47C8.92844 5.32955 8.73781 5.25066 8.53906 5.25066C8.34031 5.25066 8.14969 5.32955 8.00906 5.47Z"
                  fill="#808080"
                />
              </svg>
            </div>
            <div className={classes.morning}>
              <h4>Morning</h4>
              <div className={classes.morningSlots}>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  09:00 AM
                </Box>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  09:30 AM
                </Box>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  10:00 AM
                </Box>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  10:15 AM
                </Box>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  10:15 AM
                </Box>
                <Box
                  style={{
                    padding: "24.5px 17.5px",
                    borderRadius: "22px",
                    background: "#3A643B",
                    color: "#FFFFFF",
                  }}
                >
                  11:00 AM
                </Box>
              </div>
            </div>
            <div className={classes.evening}>
              <h4>Evening</h4>
              <div className={classes.eveningSlots}>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  04:00 PM
                </Box>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  04:15 PM
                </Box>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  04:30 PM
                </Box>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  04:45 PM
                </Box>
                <Box style={{ padding: "24.5px 17.5px", borderRadius: "22px" }}>
                  05:15 PM
                </Box>
              </div>
            </div>
            <button className={classes.appoint}>Make An Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
