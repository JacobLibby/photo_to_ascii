import React, { useState, useEffect } from "react";

const UploadImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  //   if (selectedImage) {
  //     props.setImage(selectedImage);
  //   }
  //   console.log(props.image);

//   function toDataURL(url, callback) {
//     var xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//       var reader = new FileReader();
//       reader.onloadend = function () {
//         callback(reader.result);
//       };
//       reader.readAsDataURL(xhr.response);
//     };
//     xhr.open("GET", url);
//     xhr.responseType = "blob";
//     xhr.send();
//   }


//   function getBase64(file) {
//     var reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//       console.log(reader.result);
//     };
//     reader.onerror = function (error) {
//       console.log("Error: ", error);
//     };
//   }

// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;
//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);
//     var dataURL = canvas.toDataURL("image/png");
//     return dataURL //.replace(/^data:image\/?[A-z]*;base64,/);
//   }
  
  
  useEffect(() => {
    // toDataURL(selectedImage, function(dataUrl) {
    //   window.localStorage.setItem("UPLOADED_IMAGE", dataUrl);


    // console.log(getBase64(selectedImage));
    // window.localStorage.setItem("UPLOADED_IMAGE", getBase64(selectedImage));

    if (selectedImage){
        // var base64 = getBase64Image(document.getElementById("imageid"));
        // console.log(base64)
        // console.log(base64)
    }
  }, [selectedImage]);

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>

      {selectedImage && (
        <div>
          <img
            id="imageid"
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
        //   console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);


          const reader = new FileReader();
          reader.addEventListener("load", () => {
            // console.log(reader.result.split(',')[1])
            // window.localStorage.setItem("UPLOADED_IMAGE",reader.result.split(',')[1])
            window.localStorage.setItem("UPLOADED_IMAGE","SMALL HEADER")
            props.setImage(reader.result.split(',')[1])
          })
          reader.readAsDataURL(event.target.files[0])
          
          //   props.setImage(selectedImage);
          //   props.prop(selectedImage);
        }}
      />
    </div>
  );
};

export default UploadImage;
