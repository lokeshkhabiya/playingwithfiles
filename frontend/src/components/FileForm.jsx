import axios from 'axios';
import { useState } from 'react';

const FileForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }


  const submit = async (event) => {
    
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("profileImage", file);
      await axios.post('/api/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      setFile(null);
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <div className="flex justify-center items-center h-screen">
        <form encType="multipart/form-data">
            <input type="file" name="profileImage" onChange={handleFileChange}/>
            <button onClick={submit} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
        </form>
    </div>
  )
}

export default FileForm