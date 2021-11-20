import axios from 'axios';
import { useState } from 'react';

export default function Doctorize() {

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
            <h1>Doctorize</h1>
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
        </div>
    );
}