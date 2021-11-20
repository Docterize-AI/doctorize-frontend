import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { BsUpload } from 'react-icons/bs';
import { Header } from './components/header';
import docStyles from '../styles/Doctorize.module.css';

export default function Doctorize() {

    const router = useRouter();

    const [file, setFile] = useState(null);
    const [fileType, setFileType] = useState(null);

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
    }
    const doctorize = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file', file);
        const response = await axios.post('http://localhost:5000/upload', data, {
            headers: headers
        }).catch(
            console.log("doctorize btn err")
        )

        console.log(response);

        router.push({ 
            pathname: '/results', 
            query: { result: response.data } 
        })

        // console.log(file, fileType);
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
        <div className={docStyles.main}>
            {/* Nav */}
            <div>
                <Header />
            </div>

            {/* Body */}
            <div className={docStyles.content}>
                <h1>We are here to assist you</h1>
                <p>Worried about your rash? Worried you have a disease? Take a quick picture, and we will let you know if you need to seek immediate medical attention.</p>
            </div>

            <div>
                <form encType="multipart/form-data">
                    <input className={docStyles['upload-button']} type="file" id="file" name="file" onChange={onChangeHandler}/>
                    <BsUpload />
                    <select id="fileType" name="fileType" onChange={fileTypeChange}>
                        <option value='image'>Image</option>
                        <option value='audio'>Audio</option>
                    </select>
                </form>
            </div>

            <button className={docStyles.doctorize} onClick={doctorize}>Doctorize</button>
        </div>
    );
}