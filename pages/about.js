import { Header } from './components/header';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.main}>
            <Header />
            <div className={`${styles.content} ${styles.main}`}>
                <h1>About Us</h1>
            </div>
        </div>
    );
}