import { MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./Footer.module.scss";

function Footer({pr}) {
  return (
    <div ref={pr} className={styles.footer_container}>
      <p className={styles.footer_header}>FOR SPONSORSHIP/PARTNERSHIP</p>
      <p className={styles.footer_header_mobile}>
        FOR SPONSORSHIP <br /> OR PARTNERSHIP
      </p>
      <div className={styles.email_link}>
        <MailOutlined className={styles.email_icon} />
        <div
          onClick={(e) => {
            window.location = "mailto:info@eventnoire.com";
            e.preventDefault();
          }}
        >
          <p>info@eventnoire.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
