import React, { useCallback, useEffect } from "react";

import { useDropzone } from "react-dropzone";

const DragDrop = ({ laptopDetail, setLaptopDetail }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setLaptopDetail({
        ...laptopDetail,
        image: acceptedFiles.map((file) => URL.createObjectURL(file)),
      });
    },
    [setLaptopDetail, laptopDetail]
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    multiple: false,
  });

  useEffect(() => {
    console.log(laptopDetail);
  });

  return (
    <div {...getRootProps()} className="drag-drop">
      <input {...getInputProps()} required />
      {isDragActive ? (
        <div>
          <p>
            ჩააგდე
            <br />
            ლეპტოპის ფოტო
          </p>
        </div>
      ) : (
        <div>
          <p onClick={() => console.log(laptopDetail)}>
            ჩააგდე ან ატვირთე
            <br />
            ლეპტოპის ფოტო
          </p>
          <button type="button" onClick={open}>
            ატვირთე
          </button>
        </div>
      )}
      {laptopDetail.image.length >= 1 ? (
        <img
          alt="dragphoto"
          src={laptopDetail.image}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "18px",
          }}
        />
      ) : null}
    </div>
  );
};

export default DragDrop;
