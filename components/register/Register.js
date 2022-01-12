import Image from "next/image";
import { useState } from "react";
import { FormspreeProvider } from "@formspree/react";
import { useForm, ValidationError } from "@formspree/react";
import LadyImage from "../../public/images/ladyImg.png";
import Calender from "../../public/images/purpleCalender.svg";
import Backdrop from "../modal/Backdrop";
import Modal from "../modal/Modal";
import styles from "./Register.module.scss";

function Register() {
  const [showModal, setShowModal] = useState(false);
  const [state, handleSubmit] = useForm("ContactEventnoire");

  if (state.succeeded) {
    return <h1>Thanks!</h1>;
  }

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <FormspreeProvider project="1854236719059041356">
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
            action="https://formspree.io/f/xwkyvknz"
            method="POST"
          >
            <label>
              Full name
              <input
                required
                placeholder="Enter first and last name"
                type="text"
                name="name"
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                name="email"
                id="email"
                required
                placeholder="Enter email"
                type="email"
              />
              <ValidationError
                field="email"
                prefix="Email"
                errors={state.errors}
              />
            </label>
            <label>
              Phone
              <input name="phone" required placeholder="Enter phone number" type="tel" />
            </label>
            <label className={styles.text}>
              Date of birth
              <input required placeholder="dd/mm/yy" type="tel" name="date" />
              <div className={styles.input_calender}>
                <Image src={Calender} width={19.5} height={20.77} alt="" />
              </div>
            </label>
            <button
              disabled={state.submitting}
              onClick={openModal}
              type="submit"
              className={styles.form_btn}
              value="Send"
            >
              Submit
            </button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
        {showModal ? <Modal onCancel={closeModal} /> : null}
        {showModal ? <Backdrop /> : null}
      </div>
    </FormspreeProvider>
  );
}

export default Register;
