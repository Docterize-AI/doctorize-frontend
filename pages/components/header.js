import styles from '../../styles/Home.module.css';

export const Header = () => {
    return (
        <div className={styles['header-container']}>
            <h1>Doctorize</h1>
            <div className={styles['buttons-container']}>
            <button className={styles.button}>Login</button>
            <button className={styles.button}>Request a Doctor</button>
            <button className={styles.button}>About Us</button>
            </div>
        </div>
    );
}