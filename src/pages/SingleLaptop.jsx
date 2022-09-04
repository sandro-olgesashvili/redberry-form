import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import lari from "../images/currency.svg";
import Vector from "../images/Vector.png";
import axios from "axios";

const SingleLaptop = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [teamId, setTeamId] = useState([]);
  const [positionId, setPositionId] = useState([]);
  const [brandId, setBrandId] = useState([]);

  const [laptopDetail, setLaptopDetail] = useState({
    user: {
      name: "",
      surname: "",
      team_id: "",
      position_id: "",
      email: "",
      phone_number: "",
    },
    laptop: {
      name: "",
      image: "",
      brand_id: "",
      cpu: {
        name: "",
        cores: "",
        threads: "",
      },
      ram: "",
      hard_drive_type: "",
      state: "",
      purchase_date: null,
      price: "",
    },
  });

  useEffect(() => {
    axios
      .get(
        `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=4991177449ded293b86625268fd5469c`
      )
      .then((res) => setLaptopDetail(res.data.data))
      .catch((err) => console.log(err));

    fetch("https://pcfy.redberryinternship.ge/api/teams")
      .then((res) => res.json())
      .then((data) => setTeamId(data.data));
    fetch("https://pcfy.redberryinternship.ge/api/positions")
      .then((res) => res.json())
      .then((data) => setPositionId(data.data));
    fetch("https://pcfy.redberryinternship.ge/api/brands")
      .then((res) => res.json())
      .then((data) => setBrandId(data.data));
  }, []);
  return (
    <section className="laptop-info">
      <button onClick={() => navigate(-1)} className="back-btn">
        <img src={Vector} alt="vector" />
      </button>
      <h3 className="laptop-info-header">ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</h3>
      <div className="laptop-info-container">
        <div className="laptop-info-image-personal-info">
          <img
            src={`https://pcfy.redberryinternship.ge/${laptopDetail.laptop.image}`}
            alt="img"
          />
          <div className="laptop-info-image-personal">
          <div className="span-label">
            <span>სახელი:</span>
            <span>თიმი:</span>
            <span>პოზიცია:</span>
            <span>მეილი:</span>
            <span>ტელ.ნომერი</span>
          </div>
          <div className="span-data">
            <span>{laptopDetail.user.name}</span>

            {teamId
              .filter((item) => item.id === laptopDetail.user.team_id)
              .map((item, index) => (
                <span key={index}>{item.name}</span>
              ))}

            {positionId
              .filter((item) => item.id === laptopDetail.user.position_id)
              .map((item, index) => (
                <span key={index}>{item.name}</span>
              ))}
            <span>{laptopDetail.user.email}</span>
            <span>{laptopDetail.user.phone_number}</span>
          </div>
          </div>
        </div>
        <div className="laptop-info-technical">
          <div className="laptop-info-technical-first">
            <div className="span-label">
              <span>ლეპტოპის სახელი:</span>
              <span>ლეპტოპის ბრენდი:</span>
              <span>RAM:</span>
              <span>მეხსიერების ტიპი:</span>
            </div>
            <div className="span-data">
              <span>{laptopDetail.laptop.name}</span>
              {brandId
                .filter((item) => item.id === laptopDetail.laptop.brand_id)
                .map((item, index) => (
                  <span key={index}>{item.name}</span>
                ))}
              <span>{laptopDetail.laptop.ram}</span>
              <span>{laptopDetail.laptop.hard_drive_type}</span>
            </div>
          </div>
          <div className="laptop-info-technical-second">
            <div className="span-label">
              <span>CPU:</span>
              <span>CPU-ს ბირთვი:</span>
              <span>CPU-ს ნაკადი:</span>
            </div>
            <div className="span-data">
              <span>{laptopDetail.laptop.cpu.name}</span>
              <span>{laptopDetail.laptop.cpu.cores}</span>
              <span>{laptopDetail.laptop.cpu.threads}</span>
            </div>
          </div>
        </div>
        <div className="laptop-info-price-state">
          <div className="laptop-info-price-state-first">
            <div className="span-label">
              <span className="span-label-dektop">ლეპტოპის მდგომარეობა:</span>
              <span className="span-label-mobile">მდგომარეობა:</span>
              <span>ლეპტოპის ფასი:</span>
            </div>
            <div className="span-data">
              {laptopDetail.laptop.state === 'new' ? <span>ახალი</span> : <span>მეორადი</span>}
              <span className="currency-span"
              >
                {laptopDetail.laptop.price} <img src={lari} alt="lari" />
              </span>
            </div>
          </div>
          <div className="laptop-info-price-state-second">
            <div className="span-label">
              <span>შეძენის რიცხვი:</span>
            </div>
            <div className="span-data">
              <span>{laptopDetail.laptop.purchase_date}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleLaptop;
