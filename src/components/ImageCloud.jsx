import React, { useState } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
const API_URL = import.meta.env.VITE_SERVER_URL;
const storedToken = localStorage.getItem("authToken");

const ImageUpload = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setImageUrl(response.data.url);
    } catch (error) {
      console.error("Error uploading the image: ", error);
    }
  };

  return (
    <div>
    <input type="file" onChange={handleFileChange} />
    <button onClick={handleUpload}>Upload</button>
    {imageUrl && <Image style={{ width: '200px', height: 'auto' }} cloudName="yourCloudName" publicId={imageUrl} />}
  </div>
  );
};

export default ImageUpload;
