import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Doctorize() {

    const router = useRouter();
    const routeToDoctorize = () => {
      router.push('/doctorize');
    }

    const [file, setFile] = useState(null);
    const [fileType, setFileType] = useState(null);

    const doctorize = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', file);
        const response = await axios.post('http://localhost:5000/upload', data);
        console.log(response.data);
        console.log(file, fileType);
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }

    const fileTypeChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setFileType(e.target.value);
    }

    return(
        <div>
            {/* Nav */}
            <div>
                <h1>Doctorize</h1>
            </div>

            {/* Body */}
            <div>
                <h2>We are here to assist you</h2>
                <p>Worried about your rash? Worried you have a disease? Take a quick picture, and we will let you know if you need to seek immediate medical attention.</p>
            </div>

            <div>
                <h3>Upload file</h3>
                <form>
                    <input type="file" id="file" name="file" onChange={onChangeHandler}/>
                    <select id="fileType" name="fileType" onChange={fileTypeChange}>
                        <option value='image'>Image</option>
                        <option value='audio'>Audio</option>
                    </select>
                    <input type="submit" value="Doctorize file" onChange={doctorize}/>
                </form>
            </div>

            <button className={styles.button} onClick={routeToDoctorize}>Doctorize</button>
        </div>
    );
}