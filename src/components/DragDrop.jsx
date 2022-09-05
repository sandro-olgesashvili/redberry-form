import React, { useCallback,  useState } from "react";
import ErrMsg from "../images/errmsg.svg";
import checkdone from "../images/checkdone.svg";
import photologo from "../images/photologo.png";

import { useDropzone } from "react-dropzone";

const DragDrop = ({ laptopDetail, setLaptopDetail, lapImgErr }) => {
  const [fileimg, setFileimg] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
  
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
  });

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noKeyboard: true,
    multiple: false,
  });



  return (
    <div>
      <div
        {...getRootProps()}
        className={lapImgErr ? "drag-drop drag-drop-err" : "drag-drop"}
      >
        <input {...getInputProps()}/>
        {isDragActive ? (
          <div>
            {lapImgErr && (
              <img className="error-image" src={ErrMsg} alt="err" />
            )}
            <img src={photologo} alt="photologo" className="photo-logo" />
            <p className={lapImgErr ? "text-red for-mobile" : "for-mobile"}>
              ლეპტოპის ფოტოს
              <br />
              ატვირთა
            </p>

            <p className={lapImgErr ? "text-red for-dekstop" : "for-dekstop"}>
              ჩააგდე ან ატვირთე
              <br />
              ლეპტოპის ფოტო
            </p>
          </div>
        ) : (
          <div>
            {lapImgErr && (
              <img src={ErrMsg} className="error-image" alt="err" />
            )}
            <img src={photologo} alt="photologo" className="photo-logo" />
            <p className={lapImgErr ? "text-red for-mobile" : "for-mobile"}>
              ლეპტოპის ფოტოს
              <br />
              ატვირთა
            </p>

            <p className={lapImgErr ? "text-red for-dekstop" : "for-dekstop"}>
              ჩააგდე ან ატვირთე
              <br />
              ლეპტოპის ფოტო
            </p>
            <button
              className={fileimg === "" ? "" : "btn-abs"}
              type="button"
              onClick={open}
            >
              {fileimg === "" ? <>ატვირთე</> : <>თავიდან ატვირთე</>}
            </button>
          </div>
        )}
        {fileimg.length >= 1 ? (
          <img
            alt="dragphoto"
            src={fileimg}
            style={{
              position: "absolute",
              width: "101%",
              height: "101%",
              objectFit: "cover",
              borderRadius: "18px",
            }}
          />
        ) : null}
      </div>

      {fileimg !== "" ? (
        <div className="check">
          <div>
          <img src={checkdone} alt="check" />
          <div className="check-span">
            <span>{laptopDetail.laptop_image.path}, </span>
            <span>
              {(laptopDetail.laptop_image.size / 1000000).toFixed(0)} mb
            </span>
          </div>
          </div>
          <button className="btn-abs-mob" type="button" onClick={open}>
            თავიდან ატვირთე
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DragDrop;
