import styles from '../../styles/Specialists.module.css';
import Image from 'next/image'
import Doctor1 from './images/doctor1-square.png'
import Doctor2 from './images/doctor2-square.png'
import 'bootstrap/dist/css/bootstrap.css';

export const Specialists = (props) => {

    const doctors = [
        {
            name: "Cristina Yang",
            hospital: "Ontario Hospital"
        },
        {
            name: "Miranda Bailey",
            hospital: "Toronto Hospital"
        },
        {
            name: "Izzie Stevens",
            hospital: "Ottawa Hospital"
        },
      ]

    return (
        <div className="row">
            {/* {doctors.map(doc => {
                <div className="col-3">
                        <div className={styles.imgBox}>
                        <Image
                            className={`${styles.img}`}
                            src={Doctor1}
                            alt="Doctor"
                            width={300}
                            height={300}
                        />
                        </div>
                        <div className={styles.textBox}>
                            <p className={styles.doctorName}>{doc.name}</p>
                            <p className={styles.hospital}>{doc.hospital}</p>
                        </div>
                </div>
            }) } */}
                <div className="col-4">
                        <div className={styles.imgBox}>
                        <Image
                            className={`${styles.img}`}
                            src={Doctor1}
                            alt="Doctor"
                            width={300}
                            height={300}
                        />
                        </div>
                        <div className={styles.textBox}>
                            <p className={styles.doctorName}>{doctors[0].name}</p>
                            <p className={styles.hospital}>{doctors[0].hospital}</p>
                        </div>
                </div>

                <div className="col-4">
                        <div className={styles.imgBox}>
                        <Image
                            className={`${styles.img}`}
                            src={Doctor1}
                            alt="Doctor"
                            width={300}
                            height={300}
                        />
                        </div>
                        <div className={styles.textBox}>
                            <p className={styles.doctorName}>{doctors[1].name}</p>
                            <p className={styles.hospital}>{doctors[1].hospital}</p>
                        </div>
                </div>

                <div className="col-4">
                        <div className={styles.imgBox}>
                        <Image
                            className={`${styles.img}`}
                            src={Doctor1}
                            alt="Doctor"
                            width={300}
                            height={300}
                        />
                        </div>
                        <div className={styles.textBox}>
                            <p className={styles.doctorName}>{doctors[2].name}</p>
                            <p className={styles.hospital}>{doctors[2].hospital}</p>
                        </div>
                </div>
        </div>
    );
}

//need to refactor later