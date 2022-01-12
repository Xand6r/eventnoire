import Image from "next/image";
import ImageOne from "../../public/images/All-star-one.png";
import ImageTwo from "../../public/images/All-star-two.png";
import Calender from "../../public/images/calender.svg";
import Location from "../../public/images/location.svg";
import styles from "./Eventnoire.module.scss";

function Eventnoire() {
  return (
    <div className={styles.eventnoire}>
      <p className={styles.header}>EVENTNOIRE EXPERIENCES 2022</p>
      <p className={styles.header_mobile}>
        EVENTNOIRE <br /> EXPERIENCES 2022
      </p>
      <div className={styles.eventnoire_images}>
        <div className={styles.image_container}>
          <Image
            className={styles.imageOne}
            src={ImageOne}
            width={539}
            height={324}
            alt=""
          />
          <div className={styles.eventnoire_card}>
            <div className={styles.dates_display}>
              <div className={styles.dates}>
                <Image src={Calender} width={17.5} height={20.75} alt="" />
                <p>Feb 18th-20th, 2022</p>
              </div>
              <div className={styles.dates}>
                <Image
                  src={Location}
                  width={17.5}
                  height={20.75}
                  className={styles.dates_img}
                  alt=""
                />
                <p>Cleaveland, Ohio</p>
              </div>
            </div>
            <button className={styles.btn}>Get Tickets</button>
          </div>
        </div>

        <div className={styles.image_container}>
          <Image
            className={styles.imageOne}
            src={ImageTwo}
            width={539}
            height={324}
            alt=""
          />
          <div className={styles.eventnoire_card}>
            <div className={styles.dates_display}>
              <div className={styles.dates}>
                <Image src={Calender} width={17.5} height={20.75} alt="" />
                <p>Feb 18th-20th, 2022</p>
              </div>
              <div className={styles.dates}>
                <Image src={Location} width={17.5} height={20.75} alt="" />
                <p>Los Angeles, CA</p>
              </div>
            </div>
            <button className={styles.btn}>Get Tickets</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventnoire;
