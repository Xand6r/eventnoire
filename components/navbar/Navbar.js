import { useState, useEffect } from "react";
import { BigLogo, SmallLogo } from "./assets";
import Logo from "../../public/images/eventlogo.png";
import Hamburger from "../../public/images/hamburger.png";
import Cancel from "../../public/images/eventCancel.png";
import Image from "next/image";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [show, setShow] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY > 3) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const clicked = () => {
    setShow(true);
  };

  const cancel = () => {
    setShow(false);
  };

  return (
    <nav
      style={{ background: !colorChange ? "transparent" : "white" }}
      className={styles.nav}
    >
      <div className={styles.left_nav}>
        <span className={styles.small__logo}>
          <SmallLogo />
        </span>
        <span className={styles.big__logo}>
          <BigLogo />
        </span>
      </div>

      <div className={styles.right_nav}>
        <p>Stay Updated</p>
        <p>Sponsorship/Partnership</p>
      </div>
      <div className={styles.hamburger} onClick={clicked}>
        {!show ? (
          <Image src={Hamburger} width={22.75} height={13} alt="" />
        ) : null}
      </div>

      {show ? (
        <div className={styles.show_hamburger}>
          <div className={styles.images_display}>
            <Image src={Logo} width={24.44} height={22.18} alt="" />
            <Image
              onClick={cancel}
              src={Cancel}
              width={18.75}
              height={18.17}
              alt=""
            />
          </div>
          <p>Stay Updated</p>
          <p>Sponsorship/Partnership</p>
        </div>
      ) : null}
  
    </nav>
  );
}

export default Navbar;
