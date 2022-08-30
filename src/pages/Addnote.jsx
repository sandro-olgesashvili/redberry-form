import { useState, useEffect } from "react";
import PostionOption from "../components/PostionOption";
import TeamsOption from "../components/TeamsOption";
import Vectordown from "../images/Vectordown.svg";
import LogoCircle from "../images/LOGO-102.png";
import Vector from "../images/Vector.png";
import { useNavigate } from "react-router-dom";
import LaptopForm from "../components/LaptopForm";

const Addnote = () => {
  ////
  const [nameErr, setNameErr] = useState(false);
  const [surnameErr, SetSurnameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phone_numberErr, setPhone_numberErr] = useState(false);
  const [teamErr, setTeamErr] = useState(false);
  const [postionErr, setPostionErr] = useState(false);

  ///

  const navigate = useNavigate();
  const [page, setPage] = useState(2);

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
      id: "",
    }
  );

  const handleChange = (e) => {
    setObjInputs({
      ...objInputs,
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
  });

  let check = () => {
    let regExName = /[ა-ჰ]{2,}/g;

    let regExSurname = /[ა-ჰ]{2,}/g;

    let regExEmail = /[a-zA-Z]+@redberry\.ge/gi;

    let regExPhoneNumber = /995[0-9]{9,10}/gi;

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
      setPhone_numberErr(true);
      console.log("err");
      console.log(objInputs.phone_number);
    } else {
      setPhone_numberErr(false);
    }
    if (
      nameErr === false &&
      surnameErr === false &&
      phone_numberErr === false &&
      emailErr === false &&
      teamErr === false &&
      postionErr === false
    ) {
      setPage(2);
    }
  };

  return (
    <div className="addnote">
      <button
        type="button"
        className="back-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Vector} alt="vector" />
      </button>
      <div className="addnote-header">
        <p className={page === 1 ? "underline" : null}>თანამშრომლის ინფო</p>
        <p className={page === 2 ? "underline" : null}>
          ლეპტოპის მახასიათებლები
        </p>
      </div>
      <form className="addnote-form">
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
                  ? "addnote-form-select red-line-team"
                  : "addnote-form-select"
              }
            >
              <span>{objInputs.team_id}</span>
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
              <span>{objInputs.position_id}</span>
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
                type="number"
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
        {page === 2 ? <LaptopForm brands={brands} cpus={cpus} /> : null}
      </form>
      <div className="logo-circle">
        <img src={LogoCircle} alt="logo" />
      </div>
    </div>
  );
};

export default Addnote;
