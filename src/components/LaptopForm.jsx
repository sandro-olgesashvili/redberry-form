import DragDrop from "./DragDrop";
import VectorDown from "../images/Vectordown.svg";
import Brands from "./Brands";
import { useState, useRef } from "react";
import Cpu from "./Cpu";
import ErrImg from "../images/errmsg.svg";

const LaptopForm = ({
  setLaptopDetail,
  laptopDetail,
  brands,
  handleChangeLaptop,
  cpus,
  setPage,
  setOnOff,
  onOff,
}) => {
  const [brandOnOff, setBrandOnOff] = useState(false);
  const [cpuOnOff, setCpuOnOff] = useState(false);
  const ref = useRef(null);

  //errors
  const [lapNameErr, setLapNameErr] = useState(false);
  const [lapImgErr, setLapImgErr] = useState(false);
  const [lapBrandErr, setLapBrandErr] = useState(false);
  const [lapCpuErr, setLapCpuErr] = useState(false);
  const [lapCpucoresErr, setLapCpucoresErr] = useState(false);
  const [lapCputhreads, setLapCputhreads] = useState(false);
  const [ramErr, setRamErr] = useState(false);
  const [hdtErr, setHdtErr] = useState(false);
  const [stateErr, setStateErr] = useState(false);
  const [priceErr, setPriceErr] = useState(false);

  //chec function

  const laptopErrCheck = () => {
    const regexLapName = /[a-zA-Z0-9!@#$%^&*()_+=]/g;

    if (laptopDetail.laptop_image === "") {
      return setLapImgErr(true);
    } else {
      setLapImgErr(false);
    }
    if (regexLapName.test(laptopDetail.laptop_name) === false) {
      return setLapNameErr(true);
    } else {
      setLapNameErr(false);
    }
    if (laptopDetail.laptop_brand_id === "ლეპტოპის ბრენდი") {
      return setLapBrandErr(true);
    } else {
      setLapBrandErr(false);
    }
    if (laptopDetail.laptop_cpu === "CPU") {
      return setLapCpuErr(true);
    } else {
      setLapCpuErr(false);
    }
    if (laptopDetail.laptop_cpu_cores === "") {
      return setLapCpucoresErr(true);
    } else {
      setLapCpucoresErr(false);
    }
    if (laptopDetail.laptop_cpu_threads === "") {
      return setLapCputhreads(true);
    } else {
      setLapCputhreads(false);
    }
    if (laptopDetail.laptop_ram === "") {
      return setRamErr(true);
    } else {
      setRamErr(false);
    }
    if (laptopDetail.laptop_hard_drive_type === "") {
      return setHdtErr(true);
    } else {
      setHdtErr(false);
    }
    if (laptopDetail.laptop_price === "") {
      return setPriceErr(true);
    } else {
      setPriceErr(false);
    }
    if (laptopDetail.laptop_state === "") {
      return setStateErr(true);
    } else {
      setStateErr(false);
    }
    return setOnOff(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DragDrop
        laptopDetail={laptopDetail}
        setLaptopDetail={setLaptopDetail}
        lapImgErr={lapImgErr}
      />
      <div className="laptop-name-brand">
        <div
          className={
            lapNameErr
              ? "addnote-form-two-inputs red-line"
              : "addnote-form-two-inputs"
          }
        >
          <label>ლეპტოპის სახელი</label>
          <input
            className={lapNameErr ? "red-line" : ""}
            type="text"
            placeholder="HP"
            name="laptop_name"
            value={laptopDetail.laptop_name}
            onChange={(e) => handleChangeLaptop(e)}
          />
          <small className={lapNameErr ? "red-line-sm" : ""}>
            ლათინური ასოები, ციფრები, !@#$%^&*()_+={" "}
          </small>
        </div>
        <div
          className={
            lapBrandErr ? "laptop-brand red-line-team" : "laptop-brand"
          }
        >
          {laptopDetail.laptop_brand_id === "ლეპტოპის ბრენდი" ? (
            <span>{laptopDetail.laptop_brand_id}</span>
          ) : (
            brands.map((item, index) => {
              if (item.id === laptopDetail.laptop_brand_id) {
                return <span key={index}>{item.name}</span>;
              }
            })
          )}
          <button type="button" onClick={() => setBrandOnOff(!brandOnOff)}>
            <img src={VectorDown} alt="vector" />
          </button>
          {brandOnOff && (
            <Brands
              brands={brands}
              setLaptopDetail={setLaptopDetail}
              setBrandOnOff={setBrandOnOff}
            />
          )}
        </div>
      </div>
      <div className="cpu">
        <div className={lapCpuErr ? "cpu-select red-line-team" : "cpu-select"}>
          {/* {laptopDetail.laptop_cpu === "CPU" ? (
            <span>{laptopDetail.laptop_cpu}</span>
          ) : (
            cpus.map((cpu, index) => {
              if (cpu.id === laptopDetail.laptop_cpu) {
                return <span key={index}>{cpu.name}</span>;
              }
            })
          )} */}
          <span>{laptopDetail.laptop_cpu}</span>
          <button type="button" onClick={() => setCpuOnOff((prev) => !prev)}>
            <img src={VectorDown} alt="vec" />
          </button>
          {cpuOnOff && (
            <Cpu
              cpus={cpus}
              setLaptopDetail={setLaptopDetail}
              setCpuOnOff={setCpuOnOff}
            />
          )}
        </div>
        <div
          className={
            lapCpucoresErr
              ? "addnote-form-two-inputs red-line"
              : "addnote-form-two-inputs"
          }
        >
          <label>CPU-ს ბირთვი</label>
          <input
            className={lapCpucoresErr ? "red-line" : ""}
            type="number"
            name="laptop_cpu_cores"
            placeholder="14"
            value={laptopDetail.laptop_cpu_cores}
            onChange={(e) => {
              handleChangeLaptop(e);
            }}
          />
          <small className={lapCpucoresErr ? "red-line-sm" : ""}>
            მხოლოდ ციფრები
          </small>
        </div>
        <div
          className={
            lapCputhreads
              ? "addnote-form-two-inputs red-line"
              : "addnote-form-two-inputs"
          }
        >
          <label>CPU-ს ბირთვი</label>
          <input
            className={lapCputhreads ? "red-line" : ""}
            type="number"
            name="laptop_cpu_threads"
            placeholder="365"
            value={laptopDetail.laptop_cpu_threads}
            onChange={(e) => {
              handleChangeLaptop(e);
            }}
          />
          <small className={lapCputhreads ? "red-line-sm" : ""}>
            მხოლოდ ციფრები
          </small>
        </div>
      </div>
      <div className="cpu-second-line">
        <div
          className={
            ramErr
              ? "addnote-form-two-inputs red-line"
              : "addnote-form-two-inputs"
          }
        >
          <label>ლეპტოპის RAM (GB)</label>
          <input
            className={ramErr ? "red-line" : ""}
            type="number"
            name="laptop_ram"
            placeholder="16"
            value={laptopDetail.laptop_ram}
            onChange={(e) => {
              handleChangeLaptop(e);
            }}
          />
          <small className={ramErr ? "red-line-sm" : ""}>მხოლოდ ციფრები</small>
        </div>
        <div className="cpu-radio">
          {hdtErr ? (
            <label className="cpu-header" style={{ color: "#E52F2F" }}>
              მეხსიერების ტიპი
              <img
                src={ErrImg}
                alt="img"
                style={{ width: "20px", height: "20xp", marginLeft: "14px" }}
              />
            </label>
          ) : (
            <label className="cpu-header">მეხსიერების ტიპი</label>
          )}
          <div className="cpu-radio-container">
            <div className="cpu-radio-choose">
              {laptopDetail.laptop_hard_drive_type === "SSD" ? (
                <input
                  checked
                  type="radio"
                  name="laptop_hard_drive_type"
                  value="SSD"
                  onChange={(e) => handleChangeLaptop(e)}
                />
              ) : (
                <input
                  type="radio"
                  name="laptop_hard_drive_type"
                  value="SSD"
                  onChange={(e) => handleChangeLaptop(e)}
                />
              )}
              <label>SSD</label>
            </div>
            <div className="cpu-radio-choose">
              {laptopDetail.laptop_hard_drive_type === "HDD" ? (
                <input
                  checked
                  type="radio"
                  name="laptop_hard_drive_type"
                  value="HDD"
                  onChange={(e) => handleChangeLaptop(e)}
                />
              ) : (
                <input
                  type="radio"
                  name="laptop_hard_drive_type"
                  value="HDD"
                  onChange={(e) => handleChangeLaptop(e)}
                />
              )}
              <label>HHD</label>
            </div>
          </div>
        </div>
      </div>
      <div className="date-price-condition">
        <div className="date-price">
          <div className="addnote-form-two-inputs">
            <label>შეძენის რიცხვი (არჩევითი)</label>
            <input
              ref={ref}
              placeholder="დდ / თთ / წწწწ"
              type="text"
              name="laptop_purchase_date"
              value={laptopDetail.purchase_date}
              onChange={(e) => {
                handleChangeLaptop(e);
              }}
              onFocus={() => (ref.current.type = "date")}
              onBlur={() => (ref.current.type = "text")}
            />
          </div>
          <div
            className={
              priceErr
                ? "addnote-form-two-inputs red-line"
                : "addnote-form-two-inputs"
            }
          >
            <label>ლეპტოპის ფასი</label>
            <input
              className={priceErr ? "red-line" : ""}
              type="number"
              name="laptop_price"
              placeholder="365"
              value={laptopDetail.laptop_price}
              onChange={(e) => {
                handleChangeLaptop(e);
              }}
            />
            <small className={priceErr ? "red-line-sm" : ""}>
              მხოლოდ ციფრები
            </small>
          </div>
        </div>
      </div>
      <div className="cpu-radio">
        {stateErr ? (
          <label className="cpu-header" style={{ color: "#E52F2F" }}>
            ლეპტოპის მდგომარეობა
            <img
              src={ErrImg}
              alt="img"
              style={{ width: "20px", height: "20xp", marginLeft: "14px" }}
            />
          </label>
        ) : (
          <label className="cpu-header">ლეპტოპის მდგომარეობა</label>
        )}
        <div className="cpu-radio-container">
          <div className="cpu-radio-choose">
            {laptopDetail.laptop_state === "new" ? (
              <input
                checked
                type="radio"
                name="laptop_state"
                value="new"
                onChange={(e) => handleChangeLaptop(e)}
              />
            ) : (
              <input
                type="radio"
                name="laptop_state"
                value="new"
                onChange={(e) => handleChangeLaptop(e)}
              />
            )}
            <label>ახალი</label>
          </div>
          <div className="cpu-radio-choose">
            {laptopDetail.laptop_state === "used" ? (
              <input
                checked
                type="radio"
                name="laptop_state"
                value="used"
                onChange={(e) => handleChangeLaptop(e)}
              />
            ) : (
              <input
                type="radio"
                name="laptop_state"
                value="used"
                onChange={(e) => handleChangeLaptop(e)}
              />
            )}
            <label>მეორადი</label>
          </div>
        </div>
      </div>
      <div className="two-btn">
        <button
          type="button"
          className="back-btn-page"
          onClick={() => setPage(1)}
        >
          უკან
        </button>
        {onOff === true ? (
          <button type="submit" className="finish-btn">
            დამახსოვრება
          </button>
        ) : (
          <button type="button" onClick={() => laptopErrCheck()} className="finish-btn">
            დამახსოვრება
          </button>
        )}
      </div>
    </div>
  );
};

export default LaptopForm;
