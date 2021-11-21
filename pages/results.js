import { Header } from './components/header';
import { useRouter } from 'next/router';
import styles from '../styles/Results.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { Specialists } from './components/specialists';
import 'bootstrap/dist/css/bootstrap.css';

export default function Results() {

  const router = useRouter();

  const [specialists, setSpecialists] = useState(false);
  
  const connectSpecialist = (e) => {
    e.preventDefault();
    setSpecialists(true);
  }

  const routeToDoctorize = () => {
    router.push('/doctorize');
  }

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
    <div>
        <Header />
        <div className={styles.container}>
          {/* <div className={styles.hero}>
            {/* <h1 className={styles.h1}>Results</h1>}
          </div> */}
          <h1 className={styles.h1}>Doctorize.ai <span className={styles.span}>thinks:</span></h1>
          <div className={styles.resultBox}>
          {router.query.result.split(',')[0].includes('no ') ? 
            <p className={styles.result}>{"You don't have "}<span className={styles.spanBold}>
              {router.query.result.split(',')[0].includes('Tumor') ? 'Tumor' : 'COVID-19, Pneumonia, or Tuberculosis'}</span>
            </p>
          : <p className={styles.result}>You may have <span className={styles.spanBold}>{router.query.result.split(',')[0]}{router.query.result.split(',')[0] == 'Benign' || router.query.result.split(',')[0] == 'Benign' && ' tumor'}</span></p>
          }
            
            <p className={styles.result}>with <span className={styles.spanBold}>{(parseFloat(router.query.result.split(',')[1]) * 100).toString()}%</span> probability.</p>
            <div className={styles.pBox}>
              <p className={styles.p}>However, this result still cannot be considered completely accurate.</p>
              <p className={styles.p}>{"A doctor's diagnosis is required for a more accurate diagnosis."}</p>
            </div>
          </div>
          {/* <Image src={router.query.img.name} alt="img"/> */}
        </div>

        {!router.query.result.split(',')[0].includes('no ') ? 
          <button 
            className={styles.button}
            onClick={connectSpecialist}
          >
            Connect to the specialists with {router.query.result.split(',')[0]}
          </button> :
          <button 
            className={styles.button}
            onClick={routeToDoctorize}
          >
            Doctorize again
          </button>
        } 
        {specialists && 
          <div className="container" style={{marginTop: "100px"}}>
            {/* <div className="row"> */}
            {/* {doctors.map(doc => {
              <Specialists name={doc.name} hospital={doc.hospital}/>
              })
            } */}
            <Specialists />
            {/* </div> */}
          </div>
        }
        
    </div>
);
}