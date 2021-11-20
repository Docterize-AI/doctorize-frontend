import axios from 'axios';
import { useState } from 'react';

export default function Doctorize() {

    const [file, setFile] = useState(null);
    const [fileType, setFileType] = useState(null);

    const doctorize = async () => {
        const data = new FormData();
        data.append('file', file);
        const response = await axios.post('http://localhost:5000/upload', data);
        console.log(response.data);
    }

    const onChangeHandler = (e) => {
        setFile(e.target.files[0]);
    }

    const fileTypeChange = (e) => {
        setFileType(e.target.value);
    }

    return(
        <div>
            <h1>Doctorize</h1>
            <div>
                <h3>Upload file</h3>
                <form>
                    <input type="file" id="file" name="file" />
                    <select id="fileType" name="fileType" onChange={fileTypeChange}>
                        <option value='image'>Image</option>
                        <option value='audio'>Audio</option>
                    </select>
                    <input type="submit" value="Doctorize file" onChange={onChangeHandler}/>
                </form>
            </div>
        </div>
    );
}