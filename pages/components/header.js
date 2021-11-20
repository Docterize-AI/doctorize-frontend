import styles from '../../styles/Home.module.css';
import Image from 'next/image'
import logo from './images/image.jpeg';
import { useRouter } from 'next/router';

export const Header = () => {
    return (
        <div className={styles['header-container']}>
            <Image src={logo} alt="logo goes here" width={100} height={95}/>
            <h1>Doctorize</h1>
            <div className={`${styles['buttons-container']}`}>
            <button className={`${styles.button} ${styles.yellow}`} onClick={() => }>Request a Doctor</button>
            <button className={`${styles.button} ${styles.yellow}`}>About Us</button>
            <button className={`${styles.button} ${styles.red}`}>Login</button>
            </div>
        </div>
    );
}