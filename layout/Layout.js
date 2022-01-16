import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./Layout.module.scss";

function Layout({ children, ur, pr }) {
  return (
    <div className={styles.layout}>
      <Navbar ur={ur} pr={pr}/>
      {children}
      <Footer pr={pr}/>
    </div>
  );
}

export default Layout;
