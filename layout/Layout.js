import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import styles from './Layout.module.scss';

function Layout({ children }) {
    
    return (
        <div className={styles.layout}>
            <Navbar />
              { children }
            <Footer />
        </div>
    )
}

export default Layout
