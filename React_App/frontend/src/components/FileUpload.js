import React,{useState} from "react";
import axios from 'axios';

const ExcelUploader = () =>{ 
    const [selectedfile,setSelectedFile]=useState(null);
    const handlefilechange = (e) =>{ setSelectedFile(e.target.files[0])};

    const handlesubmit = async () =>
        {
        const formData = new FormData();
        formData.append('file',selectedfile);

        try
        {
            const response = await axios.post('http://127.0.0.1:5000/upload',formData);
            console.log("file uploaded successfully",response.status);

        }
        catch(e)
        {
            console.error('Error Uploading File',e);
        }
    };

    return(
        <div>
            <input type="file" onChange={handlefilechange} />
            <button onClick={handlesubmit}>Upload</button>
        </div>
    )

};
export default ExcelUploader;