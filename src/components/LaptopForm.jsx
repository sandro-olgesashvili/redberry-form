import DragDrop from "./DragDrop";
import VectorDown from "../images/Vectordown.svg";
import Brands from "./Brands";
import { useState, useRef } from "react";
import Cpu from "./Cpu";

const LaptopForm = ({
  setLaptopDetail,
  laptopDetail,
  brands,
  handleChangeLaptop,
  cpus,
  handleChangeCpu,
  setPage
}) => {
  const [brandOnOff, setBrandOnOff] = useState(false);
  const [cpuOnOff, setCpuOnOff] = useState(false);
  const ref = useRef(null);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DragDrop laptopDetail={laptopDetail} setLaptopDetail={setLaptopDetail} />
      <div className="laptop-name-brand">
        <div className="addnote-form-two-inputs">
          <label>ლეპტოპის სახელი</label>
          <input
            type="text"
            placeholder="HP"
            name="name"
            value={laptopDetail.name}
            onChange={(e) => handleChangeLaptop(e)}
          />
          <small>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </small>
        </div>
        <div className="laptop-brand">
          <span>{laptopDetail.brand_id}</span>
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
        <div className="cpu-select">
          <span>{laptopDetail.cpu.name}</span>
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
        <div className="addnote-form-two-inputs">
          <label>CPU-ს ბირთვი</label>
          <input
            type="number"
            name="cores"
            placeholder="14"
            value={laptopDetail.cpu.cores}
            onChange={(e) => {
              handleChangeCpu(e);
            }}
          />
          <small>მხოლოდ ციფრები</small>
        </div>
        <div className="addnote-form-two-inputs">
          <label>CPU-ს ბირთვი</label>
          <input
            type="number"
            name="threads"
            placeholder="365"
            value={laptopDetail.cpu.threads}
            onChange={(e) => {
              handleChangeCpu(e);
            }}
          />
          <small>მხოლოდ ციფრები</small>
        </div>
      </div>
      <div className="cpu-second-line">
        <div className="addnote-form-two-inputs">
          <label>ლეპტოპის RAM (GB)</label>
          <input
            type="number"
            name="ram"
            placeholder="16"
            value={laptopDetail.ram}
            onChange={(e) => {
              handleChangeLaptop(e);
            }}
          />
          <small>მხოლოდ ციფრები</small>
        </div>
        <div className="cpu-radio">
          <label className="cpu-header">მეხსიერების ტიპი</label>
          <div className="cpu-radio-container">
            <div className="cpu-radio-choose">
              <input
                type="radio"
                name="hard_drive_type"
                value="ssd"
                onChange={(e) => handleChangeLaptop(e)}
              />
              <label>SSD</label>
            </div>
            <div className="cpu-radio-choose">
              <input
                type="radio"
                name="hard_drive_type"
                value="hdd"
                onChange={(e) => handleChangeLaptop(e)}
              />
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
              placeholder='დდ / თთ / წწწწ'
              type="text"
              name="purchase_date"
              value={laptopDetail.purchase_date}
              onChange={(e) => {
                handleChangeLaptop(e);
              }}
              onFocus={() => (ref.current.type = "date")}
              onBlur={() => (ref.current.type = "text")}
            />
          </div>
          <div className="addnote-form-two-inputs">
            <label>ლეპტოპის ფასი</label>
            <input
              type="number"
              name="price"
              placeholder="365"
              value={laptopDetail.price}
              onChange={(e) => {
                handleChangeLaptop(e);
              }}
            />
            <small>მხოლოდ ციფრები</small>
          </div>
        </div>
      </div>
      <div className="cpu-radio">
          <label className="cpu-header">ლეპტოპის მდგომარეობა</label>
          <div className="cpu-radio-container">
            <div className="cpu-radio-choose">
              <input
                type="radio"
                name="state"
                value="ssd"
                onChange={(e) => handleChangeLaptop(e)}
              />
              <label>SSD</label>
            </div>
            <div className="cpu-radio-choose">
              <input
                type="radio"
                name="state"
                value="hdd"
                onChange={(e) => handleChangeLaptop(e)}
              />
              <label>HHD</label>
            </div>
          </div>
        </div>
        <div className="two-btn">
            <button type="button" className="back-btn-page" onClick={() => setPage(1)}>უკან</button>
            <button type="submit" className="finish-btn">დამახსოვრება</button>
        </div>
    </div>
  );
};

export default LaptopForm;
