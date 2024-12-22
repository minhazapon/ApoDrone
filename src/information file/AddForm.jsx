
import { useState } from "react";
import { useDropzone } from "react-dropzone";


const AddForm = () => {

    const [photos, setPhotos] = useState([]);

    const onDrop = (acceptedFiles) => {
    const uploadedPhotos = acceptedFiles.map((file) =>
    Object.assign(file, {
    preview: URL.createObjectURL(file), // Generate preview URL
    })
    );
    setPhotos((prevPhotos) => [...prevPhotos, ...uploadedPhotos]);
    };
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*", // Accept only image files
    multiple: true, // Allow multiple files
    });
  
    const removePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
    };
   
  

    return (
        <div>

      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 className=" text-xl droFont ">Drag & Drop Photo Upload</h2>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #007bff",
          borderRadius: "8px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: isDragActive ? "#e9f5ff" : "#f8f9fa",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className=" droFont">Drop the photos here...</p>
        ) : (
          <p className=" droFont ">
            Drag and drop your photos here, or <strong>click</strong> to upload
          </p>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        {photos.length > 0 && <h3>Uploaded Photos:</h3>}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                display: "inline-block",
                width: "120px",
                height: "120px",
              }}
            >
              <img
                src={photo.preview}
                alt="Uploaded"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <button
                onClick={() => removePhoto(index)}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  background: "#dc3545",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  width: "20px",
                  height: "20px",
                  cursor: "pointer",
                  fontSize: "14px",
                  lineHeight: "14px",
                }}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>


            
        </div>
    );
};

export default AddForm;