import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleLaptop = () => {
  const { id } = useParams();

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
        `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=bae8e75dfddb300fd995a39a32dbdebc`
      )
      .then((res) => setLaptopDetail(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <img src={`https://pcfy.redberryinternship.ge/${laptopDetail.laptop.image}`} alt="" />
    </section>
  );
};

export default SingleLaptop;
