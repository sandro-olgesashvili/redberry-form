import React, { useCallback, useEffect, useState } from "react";
import ErrMsg from "../images/errmsg.svg";
import checkdone from '../images/checkdone.svg'

import { useDropzone } from "react-dropzone";


const DragDrop = ({ laptopDetail, setLaptopDetail, lapImgErr }) => {
  
  const [fileimg, setFileimg] = useState(
    JSON.parse(localStorage.getItem("image")) || ""
  );


  useEffect(() => {
    console.log(laptopDetail)
  }, [laptopDetail])

  
  const onDrop = useCallback(
     (acceptedFiles) => {
       acceptedFiles.map((file) => {        
        setLaptopDetail((prev) => ({
          ...prev,
         laptop_image: file
        }));
        const reader = new FileReader();
        reader.onload = () => {
          setFileimg(reader.result);
        };
        reader.readAsDataURL(file);
      });
    },
    
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    
    // noClick: true,
    noKeyboard: true,
    multiple: false,
  });

  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(fileimg));
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={lapImgErr ? "drag-drop drag-drop-err" : "drag-drop"}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div>
            {lapImgErr && (
              <img
                src={ErrMsg}
                alt="err"
                style={{ marginBottom: "19px", width: "38px", height: "34px" }}
              />
            )}
            <p className={lapImgErr ? "text-red" : ""}>
              ჩააგდე
              <br />
              ლეპტოპის ფოტო
            </p>
          </div>
        ) : (
          <div>
            {lapImgErr && (
              <img
                src={ErrMsg}
                alt="err"
                style={{ marginBottom: "19px", width: "38px", height: "34px" }}
              />
            )}
            <p className={lapImgErr ? "text-red" : ""}>
              ჩააგდე ან ატვირთე
              <br />
              ლეპტოპის ფოტო
            </p>
            <button className={fileimg === '' ? '' : 'btn-abs'}  type="button" onClick={open}>
              {fileimg === ''?<>ატვირთე</> : <>თავიდან ატვირთე</> }
            </button>
          </div>
        )}
        {fileimg.length >= 1 ? (
          <img
            alt="dragphoto"
            src={fileimg}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "18px",
            }}
          />
        ) : null}
      </div>
      {fileimg !== "" ?<div className="check">
        <img src={checkdone} alt="check" />
        <span>{laptopDetail.laptop_image.path},  {(laptopDetail.laptop_image.size / 1000000 ).toFixed(0)} mb</span>
      </div>: null}
    </div>
  );
};

export default DragDrop;
