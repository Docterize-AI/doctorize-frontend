import { Header } from './components/header';
import styles from '../styles/RequestDoctor.module.css';
import homeStyles from '../styles/Home.module.css';
import Image from 'next/image';
import doctor1 from './components/images/doctor1.png';
import doctor2 from './components/images/doctor2.png';

export default function RequestDoctor() {

    const lst = [
        "Dr. Sam",
        "Dr. Adam",
        "Dr. John",
        "Dr. Jack",
        "Dr. Peter",
        "Dr. Mark",
        "Dr. Tom"
    ]

    return (
        <div>
            <Header />
            <h1 className={styles.title}>Request a Doctor</h1>

            <div className={styles.content}>
                {/* <Image src={doctor1} />  */}
                <div className={styles.buttons}>
                {
                    lst.map(item => {
                        return (
                            <div>
                                <button className={homeStyles.button} onClick={() => window.open("https://mcithedoctorsoffice.ca/locations/scarborough/")}>{item}</button>
                            </div>
                        );
                    })
                }
                </div>
                {/* <Image src={doctor2} /> */}
            </div>
        </div>
    );
}
