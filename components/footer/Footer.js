import { MailOutlined } from '@ant-design/icons'
import Link from 'next/link';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer_container}>
            <p className={styles.footer_header}>FOR SPONSORSHIP/PARTNERSHIP</p>
            <p className={styles.footer_header_mobile}>FOR SPONSORSHIP <br /> OR PARTNERSHIP</p>
            <div className={styles.email_link}>
                <MailOutlined className={styles.email_icon} />
                {/* <Image
                src={Email}
                width={26.9}
                height={20.75}
                /> */}
                <Link href='/'>
                <p>info@eventnoire.com</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer
