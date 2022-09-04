import { useState, useEffect } from "react";
import PostionOption from "../components/PostionOption";
import TeamsOption from "../components/TeamsOption";
import Vectordown from "../images/Vectordown.svg";
import LogoCircle from "../images/LOGO-102.png";
import Vector from "../images/Vector.png";
import { useNavigate } from "react-router-dom";
import LaptopForm from "../components/LaptopForm";
import { Link } from "react-router-dom";
import Suc from "../images/suc.png";

import axios from "axios";

const Addnote = () => {
  ////
  const [nameErr, setNameErr] = useState(false);
  const [surnameErr, SetSurnameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phone_numberErr, setPhone_numberErr] = useState(false);
  const [teamErr, setTeamErr] = useState(false);
  const [postionErr, setPostionErr] = useState(false);

  const [onOff, setOnOff] = useState(false);

  ///

  const navigate = useNavigate();
  const [page, setPage] = useState(
    JSON.parse(localStorage.getItem("page")) || 1
  );

  const [openClose, setOpenClose] = useState(false);
  const [openClosePost, setOpenClosePost] = useState(false);

  const [options, setOptions] = useState([]);
  const [postionOpt, setPostionOpt] = useState([]);
  const [brands, setBrands] = useState([]);
  const [cpus, setCpus] = useState([]);

  const [objInputs, setObjInputs] = useState(
    JSON.parse(localStorage.getItem("items")) || {
      name: "",
      surname: "",
      team_id: "თიმი",
      position_id: "პოზიცია",
      email: "",
      phone_number: "",
    }
  );
  const [laptopDetail, setLaptopDetail] = useState(
    JSON.parse(localStorage.getItem("laptop")) || {
      token: "c980747f224c6577ccc7e44b6b0a05b4",
      laptop_name: "",
      laptop_image: '',
      laptop_brand_id: "ლეპტოპის ბრენდი",
      laptop_cpu: "CPU",
      laptop_cpu_cores: "",
      laptop_cpu_threads: "",
      laptop_ram: "",
      laptop_hard_drive_type: "",
      laptop_state: "",
      laptop_purchase_date: "",
      laptop_price: "",
    }
  );

  async function onSubmit(e) {
    e.preventDefault();
    const data = {
      ...objInputs,
      ...laptopDetail,
    };

    if (onOff === true) {
      await axios({
        method: "post",
        url: "https://pcfy.redberryinternship.ge/api/laptop/create",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => console.log("done"))
        .catch((err) => console.log(err));
      localStorage.removeItem("page");
      localStorage.removeItem("image");
      localStorage.removeItem("items");
      localStorage.removeItem("file");
      localStorage.removeItem("laptop");
    }
  }

  const handleChange = (e) => {
    setObjInputs({
      ...objInputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeLaptop = (e) => {
    setLaptopDetail({
      ...laptopDetail,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/teams")
      .then((res) => res.json())
      .then((data) => setOptions(data.data));

    fetch("https://pcfy.redberryinternship.ge/api/positions")
      .then((res) => res.json())
      .then((data) => setPostionOpt(data.data));
    fetch("https://pcfy.redberryinternship.ge/api/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data.data));
    fetch("https://pcfy.redberryinternship.ge/api/cpus")
      .then((res) => res.json())
      .then((data) => setCpus(data.data));
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(objInputs));
    localStorage.setItem("laptop", JSON.stringify(laptopDetail));
    localStorage.setItem("page", JSON.stringify(page));
  });

  let check = () => {
    let regExName = /^([ა-ჰ][^-\s]{1,})$/g;

    let regExSurname = /^([ა-ჰ][^-\s]{1,})$/g;

    let regExEmail = /^([a-zA-Z0-9]+@redberry\.ge)$/g;

    let regExPhoneNumber = /^(\+995[0-9]{9})$/g;

    if (regExName.test(objInputs.name) === false) {
      return setNameErr(true);
    } else {
      setNameErr(false);
    }

    if (regExSurname.test(objInputs.surname) === false) {
      return SetSurnameErr(true);
    } else {
      SetSurnameErr(false);
    }
    if (objInputs.team_id === "თიმი") {
      return setTeamErr(true);
    } else {
      setTeamErr(false);
    }
    if (objInputs.position_id === "პოზიცია") {
      return setPostionErr(true);
    } else {
      setPostionErr(false);
    }
    if (regExEmail.test(objInputs.email) === false) {
      return setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (regExPhoneNumber.test(objInputs.phone_number) === false) {
      return setPhone_numberErr(true);
    } else {
      setPhone_numberErr(false);
    }

    return setPage(2);
  };

  return (
    <div className="addnote">
      <button
        type="button"
        className="back-btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={Vector} alt="vector" />
      </button>
      {page === 1 ? (
        <div className="addnote-header-for-mobile-container">
          <p className="addnote-header-for-mobile">თანამშრომლის ინფო</p>
          <span>{`${page}/2`}</span>
        </div>
      ) : (
        <div className="addnote-header-for-mobile-container">
          <p className="addnote-header-for-mobile">ლეპტოპის მახასიათებლები</p>
          <span>{`${page}/2`}</span>
        </div>
      )}
      <div className="addnote-header">
        <p
          className={page === 1 ? "underline" : null}
          onClick={() => setPage(1)}
        >
          თანამშრომლის ინფო
        </p>
        <p className={page === 2 ? "underline" : null} onClick={() => check()}>
          ლეპტოპის მახასიათებლები
        </p>
      </div>
      <form className="addnote-form" onSubmit={(e) => onSubmit(e)}>
        {page === 1 ? (
          <div className="addnote-form-main">
            <div className="addnote-form-cont">
              <div
                className={
                  nameErr
                    ? "addnote-form-two-inputs red-line"
                    : "addnote-form-two-inputs"
                }
              >
                <label>სახელი</label>
                <input
                  className={nameErr ? "red-line" : null}
                  type="text"
                  name="name"
                  minLength="2"
                  placeholder="სახელი"
                  required
                  value={objInputs.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <small className={nameErr ? "red-line-sm" : null}>
                  მინიმუმ 2 სიმბოლო, ქართული ასოები
                </small>
              </div>
              <div
                className={
                  surnameErr
                    ? "addnote-form-two-inputs red-line"
                    : "addnote-form-two-inputs"
                }
              >
                <label htmlFor="">გვარი</label>
                <input
                  className={surnameErr ? "red-line" : ""}
                  type="text"
                  name="surname"
                  minLength="2"
                  placeholder="გვარი"
                  value={objInputs.surname}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
                <small className={surnameErr ? "red-line-sm" : ""}>
                  მინიმუმ 2 სიმბოლო, ქართული ასოები
                </small>
              </div>
            </div>
            <div
              className={
                teamErr
                  ? "addnote-form-select margin-for-select red-line-team"
                  : "addnote-form-select margin-for-select"
              }
            >
              {objInputs.team_id === "თიმი" ? (
                <span>{objInputs.team_id}</span>
              ) : (
                options.map((item, index) => {
                  if (item.id === objInputs.team_id) {
                    return <span key={index}> {item.name}</span>;
                  }
                })
              )}
              <button
                type="button"
                className="addnote-form-select-btn"
                onClick={() => setOpenClose(!openClose)}
              >
                <img src={Vectordown} alt="arrow" />
              </button>
              {openClose && (
                <TeamsOption
                  options={options}
                  setOpenClose={setOpenClose}
                  setObjInputs={setObjInputs}
                  objInputs={objInputs}
                  setPostionErr={setPostionErr}
                />
              )}
            </div>
            <div
              className={
                postionErr
                  ? "addnote-form-select red-line-team"
                  : "addnote-form-select"
              }
            >
              {objInputs.position_id === "პოზიცია" ? (
                <span>{objInputs.position_id}</span>
              ) : (
                postionOpt.map((item, index) => {
                  if (item.id === objInputs.position_id) {
                    return <span key={index}>{item.name}</span>;
                  }
                })
              )}
              <button
                type="button"
                className="addnote-form-select-btn"
                onClick={() => setOpenClosePost(!openClosePost)}
              >
                <img src={Vectordown} alt="arrow" />
              </button>
              {openClosePost && (
                <PostionOption
                  postionOpt={postionOpt}
                  setOpenClosePost={setOpenClosePost}
                  setObjInputs={setObjInputs}
                  objInputs={objInputs}
                />
              )}
            </div>
            <div
              className={
                emailErr
                  ? "addnote-form-one-inputs red-line"
                  : "addnote-form-one-inputs"
              }
            >
              <label>მეილი</label>
              <input
                className={emailErr ? "red-line-team" : null}
                type="email"
                name="email"
                placeholder="grish666@redberry.ge"
                required
                value={objInputs.email}
                onChange={(e) => handleChange(e)}
              />
              <span className={emailErr ? "red-line-sm" : null}>
                უნდა მთავრდებოდეს @redberry.ge-ით
              </span>
            </div>
            <div
              className={
                phone_numberErr
                  ? "addnote-form-one-inputs red-line"
                  : "addnote-form-one-inputs"
              }
            >
              <label>ტელეფონის ნომერი</label>
              <input
                className={phone_numberErr ? "red-line-team" : null}
                type="text"
                name="phone_number"
                placeholder="+995 598 00 07 01"
                value={objInputs.phone_number}
                onChange={(e) => handleChange(e)}
                required
              />
              <span className={phone_numberErr ? "red-line-sm" : null}>
                უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს
              </span>
            </div>
            <div className="next-btn">
              <button
                type="button"
                onClick={() => {
                  check();
                }}
              >
                შემდეგი
              </button>
            </div>
          </div>
        ) : null}
        {page === 2 ? (
          <LaptopForm
            brands={brands}
            cpus={cpus}
            setLaptopDetail={setLaptopDetail}
            laptopDetail={laptopDetail}
            handleChangeLaptop={handleChangeLaptop}
            setPage={setPage}
            setOnOff={setOnOff}
            onOff={onOff}
          />
        ) : null}
        {/* {page === 2 ?(<div className="two-btn">
          <button
            type="button"
            className="back-btn-page"
            onClick={() => setPage(1)}
          >
            უკან
          </button>
          <button type="submit" className="finish-btn">
            დამახსოვრება
          </button>
        </div>): null} */}
      </form>
      <div className="logo-circle">
        <img src={LogoCircle} alt="logo" />
      </div>
      {onOff && (
        <div className="success">
          <div className="success-container">
            <img src={Suc} alt="success" />
            <h3>ჩანაწერი დამატებულია!</h3>
            <div className="success-option">
              <Link to="/laptoplist">
                <button className="finish-btn">სიაში გადაყვანა</button>
              </Link>
              <Link to="/">
                <span className="back-btn-page">მთავარი</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addnote;
