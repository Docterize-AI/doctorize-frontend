import styles from '../../styles/Home.module.css';
import Image from 'next/image'
// import logo from './images/image.jpeg';
import logo from './images/Doctorize-logo.png';

import { useRouter } from 'next/router';

export const Header = () => {

    const router = useRouter();
    const routeToRequestDoctor = () => {
        router.push('/request_doctor');
    }

    const routeToAbout = () => {
        router.push('/about');
    }

    const routeToLogin = () => {
        router.push('/');
    }

    const routeToDoctorize = () => {
        router.push('/doctorize');
      }

    return (
        <div className={styles['header-container']}>
            <Image
                className={`${styles.headerTitle}`}
                onClick={routeToDoctorize}
                src={logo}
                alt="doctorize logo"
                width={477.11111}
                height={119.55555}
            />
            {/* <h1 
                className={`${styles.headerTitle}`}
                onClick={routeToLogin}>
                    Doctorize.ai
            </h1> */}
            <div className={`${styles['buttons-container']}`}>
            <button className={`${styles.button} ${styles.yellow}`} onClick={routeToRequestDoctor}>Request a Doctor</button>
            <button className={`${styles.button} ${styles.yellow}`} onClick={routeToAbout}>About Us</button>
            <button className={`${styles.button} ${styles.red}`} onClick={routeToLogin}>Login</button>
            </div>
        </div>
    );
}