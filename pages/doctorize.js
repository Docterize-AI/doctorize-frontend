export default function Doctorize() {
    return(
        <div>
            <h1>Doctorize</h1>
            <div>
                <h3>Upload file</h3>
                <form>
                    <input type="file" id="file" name="file" />
                    <select id="fileType" name="fileType">
                        <option value="mp4">MP4</option>
                        <option value="jpg">JPG</option>
                        <option value="png">PNG</option>
                    </select>
                    <input type="submit" value="Doctorize file" />
                </form>
            </div>
        </div>
    );
}