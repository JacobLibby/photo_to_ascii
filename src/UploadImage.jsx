import React, { useState, useEffect } from "react";

const UploadImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
//   if (selectedImage) {
//     props.setImage(selectedImage);
//   }
//   console.log(props.image);


  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
   
  useEffect(() => {
    toDataURL(selectedImage, function(dataUrl) {
      window.localStorage.setItem("UPLOADED_IMAGE", dataUrl);
    })

    
  }, [selectedImage]);

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        //   props.setImage(selectedImage);
          //   props.prop(selectedImage);
        }}
      />
    </div>
  );
};

export default UploadImage;
