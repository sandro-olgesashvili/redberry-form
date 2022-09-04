import { Link } from "react-router-dom";
import Vector from "../images/Vector.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const LaptopList = () => {
    const [laptopData, setLaptopData] = useState([]);

  useEffect(() => {
    fetch(
      "https://pcfy.redberryinternship.ge/api/laptops?token=c980747f224c6577ccc7e44b6b0a05b4")
      .then((res) => res.json())
      .then((data) => setLaptopData(data.data));
  }, []);


    const navigate= useNavigate()
    return ( 
        <section className="laptop-list">
            <button onClick={() => navigate(-1)} className="back-btn">
                <img src={Vector} alt="vector" />
            </button>
            <h2 className="laptop-list-header">ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</h2>
            <div className="laptop-list-items">
                {laptopData.map((item, index) => (
                    <div key={index} className='laptop-list-item'>
                        <img src={`https://pcfy.redberryinternship.ge/${item.laptop.image}`} alt="img" />
                        <div className="laptop-list-item-text">
                            <p>{item.user.name} {item.user.surname}</p>
                            <span>{item.laptop.name}</span>
                            <Link className="see-more" to={`/laptoplist/${item.laptop.id}`}>მეტის ნახვა</Link>
                        </div>

                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default LaptopList;