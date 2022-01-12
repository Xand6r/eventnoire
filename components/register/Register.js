import Image from "next/image";
import { useState } from "react";
import LadyImage from "../../public/images/ladyImg.png";
import Calender from "../../public/images/purpleCalender.svg";
import Backdrop from "../modal/Backdrop";
import Modal from "../modal/Modal";
import styles from "./Register.module.scss";

function Register() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.register_container}>
      <p className={styles.header}>STAY UPDATED</p>
      <div className={styles.register}>
        <div className={styles.ladyImage} id={styles.form_display}>
          <Image
            src={LadyImage}
            width={490}
            height={490}
            id={styles.ladyImage}
            alt=""
          />
        </div>

        <div className={styles.mobile_form_display}>
          <p className={styles.header_mobile}>STAY UPDATED</p>
          <div className={styles.ladyImage_mobile} id={styles.form_display}>
            <Image
              src={LadyImage}
              width={490}
              height={490}
              id={styles.ladyImage}
              alt=""
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          id={styles.form_display}
        >
          <label>
            Full name
            <input
              required
              placeholder="Enter first and last name"
              type="text"
            />
          </label>
          <label>
            Email
            <input required placeholder="Enter email" type="email" />
          </label>
          <label>
            Phone
            <input required placeholder="Enter phone number" type="tel" />
          </label>
          <label className={styles.text}>
            Date of birth
            <input required placeholder="dd/mm/yy" type="tel" />
            <div className={styles.input_calender}>
              <Image src={Calender} width={19.5} height={20.77} />
            </div>
          </label>
          <button onClick={openModal} type="submit" className={styles.form_btn}>
            Submit
          </button>
        </form>
      </div>
      {showModal ? <Modal onCancel={closeModal} /> : null}
      {showModal ? <Backdrop /> : null}
    </div>
  );
}

export default Register;
