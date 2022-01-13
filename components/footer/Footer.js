import { MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./Footer.module.scss";

function Footer({ pr }) {
  return (
    <div ref={pr} className={styles.footer_container}>
      <p className={styles.footer_header}>FOR SPONSORSHIP/PARTNERSHIP</p>
      <p className={styles.footer_header_mobile}>
        FOR SPONSORSHIP <br /> OR PARTNERSHIP
      </p>
      <div className={styles.email_link}>
        <span className={styles.email_icon}>
          <Mail />
        </span>
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

const Mail = () => (
  <svg
    width="22"
    height="17"
    viewBox="0 0 22 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 4.40463C0 1.97202 1.97202 0 4.40463 0H17.3083C19.7409 0 21.713 1.97202 21.713 4.40463V12.3454C21.713 14.778 19.7409 16.75 17.3083 16.75H4.40463C1.97202 16.75 0 14.778 0 12.3454V4.40463ZM4.40463 1.86111C2.99988 1.86111 1.86111 2.99988 1.86111 4.40463V12.3454C1.86111 13.7501 2.99988 14.8889 4.40463 14.8889H17.3083C18.7131 14.8889 19.8519 13.7501 19.8519 12.3454V4.40463C19.8519 2.99988 18.7131 1.86111 17.3083 1.86111H4.40463Z"
      fill="#B7A6F4"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.14906 5.33529C5.45742 4.92414 6.04069 4.84082 6.45183 5.14918L10.6704 8.31307C10.7806 8.39578 10.9323 8.39578 11.0426 8.31307L15.2611 5.14918C15.6722 4.84082 16.2555 4.92414 16.5639 5.33529C16.8722 5.74643 16.7889 6.32971 16.3778 6.63807L12.1592 9.80196C11.3872 10.381 10.3257 10.381 9.55369 9.80196L5.33517 6.63807C4.92402 6.32971 4.8407 5.74643 5.14906 5.33529Z"
      fill="#B7A6F4"
    />
  </svg>
);
export default Footer;
