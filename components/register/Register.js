import Image from "next/image";
import { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Modal from "../modal/Modal";
import styles from "./Register.module.scss";

function Register({ur}) {
  const [showModal, setShowModal] = useState(false);
  const [formState, handleSubmit] = useForm(process.env.NEXT_PUBLIC_UPDATED);
  const formRef = useRef(null);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmition = (...params) => {
    handleSubmit(...params).then(res => {
      formRef.current.reset();
    })
  }

  return (
      <div ref={ur} className={styles.register_container}>
        <p className={styles.header}>STAY UPDATED</p>

        <div className={styles.register}>
          <div className={styles.ladyImage} id={styles.form_display}>
            <Image
              src="https://res.cloudinary.com/xand6r/image/upload/v1642019639/Stay_Updated_lb6icp.png"
              width={490}
              height={490}
              id={styles.ladyImage}
              loading="eager"
              alt=""
            />
          </div>

          <div ref={ur} className={styles.mobile_form_display}>
            <p className={styles.header_mobile}>STAY UPDATED</p>
            <div className={styles.ladyImage_mobile} id={styles.form_display}>
              <Image
                src="https://res.cloudinary.com/xand6r/image/upload/v1642019639/Stay_Updated_lb6icp.png"
                width={490}
                height={490}
                id={styles.ladyImage}
                alt=""
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmition}
            className={styles.form}
            id={styles.form_display}
            action="https://formspree.io/f/xwkyvknz"
            method="POST"
          >
            <section className={styles.input__wrapper}>
              <label>Full name</label>
              <input
                required
                placeholder="Enter first and last name"
                type="text"
                name="name"
              />
              <ValidationError
                field="name"
                prefix="name"
                errors={formState.errors}
              />
            </section>

            <section className={styles.input__wrapper}>
              <label htmlFor="email">Email</label>
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
                errors={formState.errors}
              />
            </section>

            <section className={styles.input__wrapper}>
              <label>Phone</label>
              <input
                name="phone"
                required
                placeholder="Enter phone number"
                type="tel"
              />
            </section>

            <section className={styles.input__wrapper}>
              <label className={styles.text}>Date of birth</label>
              <div style={{ position: "relative" }}>
                <input required placeholder="dd/mm/yy" type="date" name="date" />
              </div>
            </section>
            <button
              disabled={formState.submitting}
              onClick={openModal}
              type="submit"
              className={styles.form_btn}
              value="Send"
            >
              Submit
            </button>
            <ValidationError errors={formState.errors} />
          </form>
        </div>

        { formState.succeeded && showModal ? <Modal onCancel={closeModal} /> : null}
      </div>
  );
}

export default Register;
