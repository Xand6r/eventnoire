import Image from "next/image";
import ImageOne from "../../public/images/All-star-one.png";
import ImageTwo from "../../public/images/All-star-two.png";
import Calender from "../../public/images/calender.svg";
import Clock from "../../public/images/clock.svg";
import Location from "../../public/images/location.svg";
import styles from "./Eventnoire.module.scss";

function Eventnoire({ ur, pr }) {
  const getTicket = (link) => {
    if (!Boolean(link)) {
      return alert("Coming soon");
    }
    window.open(link, "_blank");
  };

  return (
    <div className={styles.eventnoire}>
      <p className={styles.header}>EVENTNOIRE EXPERIENCES 2022</p>
      <p className={styles.header_mobile}>
        {/* EVENTNOIRE <br /> EXPERIENCES 2022
         */}
         <HeaderMobile />
      </p>
      <div className={styles.eventnoire_images}>
        <div className={styles.image_container}>
          <div
            style={{
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <Image
              className={styles.imageOne}
              src={ImageTwo}
              width={539}
              height={324}
              alt=""
            />
          </div>
          <div className={styles.eventnoire_card}>
            <div className={styles.dates_display}>
              <div className={styles.info_wrapper}>
                <div className={styles.dates}>
                  <Image src={Calender} width={17.5} height={20.75} alt="" />
                  <p>SAT. FEB 12TH, 2022</p>
                </div>
                <div className={styles.time}>
                  <Image src={Clock} width={17.5} height={20.75} alt="" />
                  <span>3PM - 9PM</span>
                </div>
              </div>

              <div className={styles.dates}>
                <Image
                  src={Location}
                  width={17.5}
                  height={20.75}
                  className={styles.dates_img}
                  alt=""
                />
                <p>THE RESERVE - 650 S Spring St, Los Angeles, CA 90014</p>
              </div>
            </div>
            <button
              onClick={() => {
                getTicket(
                  "https://events.eventnoire.com/e/2chainz/tickets"
                );
              }}
              className={styles.btn}
            >
              Get Tickets
            </button>
          </div>
        </div>

        <div className={styles.image_container}>
          <div
            style={{
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <Image
              className={styles.imageOne}
              src={ImageOne}
              width={539}
              height={324}
              alt=""
            />
          </div>
          <div className={styles.eventnoire_card}>
            <div className={styles.dates_display}>
              <div className={styles.info_wrapper}>
                <div className={styles.dates}>
                  <Image src={Calender} width={17.5} height={20.75} alt="" />
                  <p>FRI. FEB 18TH, 2022</p>
                </div>
                <div className={styles.time}>
                  <Image src={Clock} width={17.5} height={20.75} alt="" />
                  <span>9PM - 2AM</span>
                </div>
              </div>
              <div className={styles.dates}>
                <Image src={Location} width={17.5} height={20.75} alt="" />
                <p>MORE DETAILS COMING SOON</p>
              </div>
            </div>
            <button
              onClick={() =>
                ur.current.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
              className={styles.btn}
            >
              Stay Updated
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const HeaderMobile = () => (
  <svg
    width="306"
    height="57"
    viewBox="0 0 306 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M72.141 21.0001V15.9301H59.931V13.4101H71.691V8.3701H59.931V5.9701H72.141V0.900098L54.291 0.900098V21.0001H72.141Z"
      fill="url(#paint0_linear_194_388)"
    />
    <path
      d="M88.7141 21.0001L96.7841 0.900098L90.0041 0.900098L84.9341 15.3001H84.5441L79.3541 0.900098L72.5441 0.900098L80.6141 21.0001H88.7141Z"
      fill="url(#paint1_linear_194_388)"
    />
    <path
      d="M115.237 21.0001V15.9301H103.027V13.4101H114.787V8.3701H103.027V5.9701H115.237V0.900098L97.3867 0.900098V21.0001H115.237Z"
      fill="url(#paint2_linear_194_388)"
    />
    <path
      d="M122.48 21.0001V13.1401L122.24 9.3001H122.63L125.18 13.2601L131.12 21.0001H137.12V0.900098H131.48V8.6701L131.75 13.0501H131.36L128.42 8.4301L122.84 0.900098L116.84 0.900098V21.0001H122.48Z"
      fill="url(#paint3_linear_194_388)"
    />
    <path
      d="M151.23 21.0001V5.9701H158.31V0.900097L138.48 0.900098V5.9701H145.59V21.0001H151.23Z"
      fill="url(#paint4_linear_194_388)"
    />
    <path
      d="M165.312 21.0001V13.1401L165.072 9.3001H165.462L168.012 13.2601L173.952 21.0001H179.952V0.900097L174.312 0.900097V8.6701L174.582 13.0501H174.192L171.252 8.4301L165.672 0.900097H159.672V21.0001H165.312Z"
      fill="url(#paint5_linear_194_388)"
    />
    <path
      d="M192.592 21.3001C199.762 21.3001 203.842 17.2201 203.842 10.9501C203.842 4.6801 199.762 0.600098 192.592 0.600098C185.602 0.600098 181.462 4.6801 181.462 10.9501C181.462 17.2201 185.602 21.3001 192.592 21.3001ZM192.592 15.9001C188.512 15.9001 187.462 14.9401 187.462 10.9501C187.462 6.9601 188.512 6.0001 192.592 6.0001C196.672 6.0001 197.842 6.9601 197.842 10.9501C197.842 14.9401 196.672 15.9001 192.592 15.9001Z"
      fill="url(#paint6_linear_194_388)"
    />
    <path
      d="M210.986 21.0001V0.900097L205.346 0.900097V21.0001H210.986Z"
      fill="url(#paint7_linear_194_388)"
    />
    <path
      d="M218.427 21.0001V14.1601H220.737C222.927 14.1601 223.527 14.5801 224.247 16.0801L226.647 21.0001H233.157L230.667 15.9601C229.917 14.4301 229.257 13.4401 227.187 12.9001V12.6001C231.027 12.1201 232.617 10.2301 232.617 7.0501C232.617 3.1201 229.827 0.900097 224.517 0.900097L212.787 0.900097V21.0001H218.427ZM218.427 5.9701H224.457C226.107 5.9701 226.707 6.3601 226.707 7.9501C226.707 9.6601 226.107 9.9601 224.457 9.9601H218.427V5.9701Z"
      fill="url(#paint8_linear_194_388)"
    />
    <path
      d="M251.907 21.0001V15.9301H239.697V13.4101H251.457V8.3701H239.697V5.9701H251.907V0.900097L234.057 0.900097V21.0001H251.907Z"
      fill="url(#paint9_linear_194_388)"
    />
    <path
      d="M18.7035 56.0001V50.9301H6.49352V48.4101H18.2535V43.3701H6.49352V40.9701H18.7035V35.9001H0.853516L0.853516 56.0001H18.7035Z"
      fill="url(#paint10_linear_194_388)"
    />
    <path
      d="M26.4866 56.0001L31.1066 49.4601H31.4966L36.3266 56.0001H43.7066L36.1466 46.2501V45.8601L43.7066 35.9001H36.3266L31.7366 42.4101H31.3466L26.4866 35.9001H19.1066L26.6966 45.7401V46.1301L19.1066 56.0001H26.4866Z"
      fill="url(#paint11_linear_194_388)"
    />
    <path
      d="M49.9408 56.0001V50.9301H55.4308C60.2008 50.9301 63.2008 48.1701 63.2008 43.4001C63.2008 38.6301 60.2008 35.9001 55.4308 35.9001H44.3008V56.0001H49.9408ZM54.8008 40.9701C56.7808 40.9701 57.5908 41.3601 57.5908 43.4001C57.5908 45.4701 56.7808 45.8601 54.8008 45.8601H49.9408V40.9701H54.8008Z"
      fill="url(#paint12_linear_194_388)"
    />
    <path
      d="M82.2484 56.0001V50.9301H70.0384V48.4101H81.7984V43.3701H70.0384V40.9701H82.2484V35.9001H64.3984V56.0001H82.2484Z"
      fill="url(#paint13_linear_194_388)"
    />
    <path
      d="M89.4916 56.0001V49.1601H91.8016C93.9916 49.1601 94.5916 49.5801 95.3116 51.0801L97.7116 56.0001H104.222L101.732 50.9601C100.982 49.4301 100.322 48.4401 98.2516 47.9001V47.6001C102.092 47.1201 103.682 45.2301 103.682 42.0501C103.682 38.1201 100.892 35.9001 95.5816 35.9001H83.8516V56.0001H89.4916ZM89.4916 40.9701H95.5216C97.1716 40.9701 97.7716 41.3601 97.7716 42.9501C97.7716 44.6601 97.1716 44.9601 95.5216 44.9601H89.4916V40.9701Z"
      fill="url(#paint14_linear_194_388)"
    />
    <path
      d="M110.761 56.0001V35.9001H105.121V56.0001H110.761Z"
      fill="url(#paint15_linear_194_388)"
    />
    <path
      d="M130.413 56.0001V50.9301H118.202V48.4101H129.962V43.3701H118.202V40.9701H130.413V35.9001H112.562V56.0001H130.413Z"
      fill="url(#paint16_linear_194_388)"
    />
    <path
      d="M137.656 56.0001V48.1401L137.416 44.3001H137.806L140.356 48.2601L146.296 56.0001H152.296V35.9001H146.656V43.6701L146.926 48.0501H146.536L143.596 43.4301L138.016 35.9001H132.016V56.0001H137.656Z"
      fill="url(#paint17_linear_194_388)"
    />
    <path
      d="M164.905 56.3001C171.655 56.3001 175.705 53.0901 175.705 47.7201V47.2101H169.405V47.7201C169.405 50.0001 168.325 50.9001 164.995 50.9001C160.915 50.9001 159.805 49.9401 159.805 45.9501C159.805 41.9601 160.915 41.0001 164.995 41.0001C168.325 41.0001 169.405 41.9001 169.405 44.1801V44.6901H175.705V44.1801C175.705 38.8101 171.655 35.6001 164.905 35.6001C157.915 35.6001 153.805 39.6801 153.805 45.9501C153.805 52.2201 157.915 56.3001 164.905 56.3001Z"
      fill="url(#paint18_linear_194_388)"
    />
    <path
      d="M195.041 56.0001V50.9301H182.831V48.4101H194.591V43.3701H182.831V40.9701H195.041V35.9001H177.191V56.0001H195.041Z"
      fill="url(#paint19_linear_194_388)"
    />
    <path
      d="M206.395 56.3001C213.175 56.3001 215.815 53.2401 215.815 49.7901C215.815 47.2101 214.495 44.6901 209.575 43.9701L203.275 43.0401C202.195 42.8901 201.835 42.5901 201.835 41.9601C201.835 41.0901 202.465 40.7001 205.345 40.7001C209.125 40.7001 209.755 41.1801 209.755 42.6201V43.0701H215.395V42.8901C215.395 38.3901 212.335 35.6001 205.945 35.6001C198.685 35.6001 196.195 38.9601 196.195 42.1701C196.195 45.4101 198.085 47.4201 201.835 47.9301L208.135 48.7701C209.785 48.9801 210.175 49.2801 210.175 50.0001C210.175 50.9001 209.815 51.1701 206.395 51.1701C202.615 51.1701 202.135 50.8101 202.135 49.4601V48.8301H196.495V49.0101C196.495 54.1101 200.245 56.3001 206.395 56.3001Z"
      fill="url(#paint20_linear_194_388)"
    />
    <path
      d="M243.771 56.0001V50.9301H236.601L230.961 51.6201C230.961 50.6001 231.891 50.3901 233.211 50.0601L237.711 48.9501C241.311 48.0501 243.831 46.2801 243.831 42.5001C243.831 38.3901 241.311 35.6001 234.951 35.6001C227.871 35.6001 225.111 39.2901 225.111 43.3401V43.7901H230.631V43.4001C230.631 41.5701 231.381 40.7301 234.741 40.7301C237.801 40.7301 238.191 41.3901 238.191 42.4101C238.191 43.3401 237.681 43.7301 236.391 44.1501L230.931 45.8901C226.611 47.2701 225.021 49.0401 225.021 52.4601V56.0001H243.771Z"
      fill="url(#paint21_linear_194_388)"
    />
    <path
      d="M255.446 56.3001C262.256 56.3001 265.826 52.1301 265.826 45.9501C265.826 39.8001 262.256 35.6001 255.446 35.6001C248.606 35.6001 245.036 39.8001 245.036 45.9501C245.036 52.1301 248.606 56.3001 255.446 56.3001ZM255.446 50.8101C251.996 50.8101 251.096 49.6701 251.096 45.9501C251.096 42.2301 251.996 41.0901 255.446 41.0901C258.866 41.0901 259.766 42.2301 259.766 45.9501C259.766 49.6701 258.866 50.8101 255.446 50.8101Z"
      fill="url(#paint22_linear_194_388)"
    />
    <path
      d="M285.578 56.0001V50.9301H278.408L272.768 51.6201C272.768 50.6001 273.698 50.3901 275.018 50.0601L279.518 48.9501C283.118 48.0501 285.638 46.2801 285.638 42.5001C285.638 38.3901 283.118 35.6001 276.758 35.6001C269.678 35.6001 266.918 39.2901 266.918 43.3401V43.7901H272.438V43.4001C272.438 41.5701 273.188 40.7301 276.548 40.7301C279.608 40.7301 279.998 41.3901 279.998 42.4101C279.998 43.3401 279.488 43.7301 278.198 44.1501L272.738 45.8901C268.418 47.2701 266.828 49.0401 266.828 52.4601V56.0001H285.578Z"
      fill="url(#paint23_linear_194_388)"
    />
    <path
      d="M305.383 56.0001V50.9301H298.213L292.573 51.6201C292.573 50.6001 293.503 50.3901 294.823 50.0601L299.323 48.9501C302.923 48.0501 305.443 46.2801 305.443 42.5001C305.443 38.3901 302.923 35.6001 296.563 35.6001C289.483 35.6001 286.723 39.2901 286.723 43.3401V43.7901H292.243V43.4001C292.243 41.5701 292.993 40.7301 296.353 40.7301C299.413 40.7301 299.803 41.3901 299.803 42.4101C299.803 43.3401 299.293 43.7301 298.003 44.1501L292.543 45.8901C288.223 47.2701 286.633 49.0401 286.633 52.4601V56.0001H305.383Z"
      fill="url(#paint24_linear_194_388)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint9_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint10_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint11_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint14_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint16_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint17_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint18_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint19_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint20_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint21_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint22_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint23_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
      <linearGradient
        id="paint24_linear_194_388"
        x1="0.853516"
        y1="22.6051"
        x2="305.458"
        y2="23.6265"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7D4FE0" />
        <stop offset="0.510417" stopColor="#F39180" />
        <stop offset="1" stopColor="#7AD5E9" />
      </linearGradient>
    </defs>
  </svg>
);

export default Eventnoire;
