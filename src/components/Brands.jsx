const Brands = ({brands, setLaptopDetail, setBrandOnOff}) => {
    return ( 
        <ul className="brands-ul"
            onClick={() => console.log(brands)}
            >
            {brands.map((item, index) => (
                <li key={index}
                    onClick={() => {
                        setBrandOnOff(prev => !prev)
                        setLaptopDetail((prev) => ({...prev, brand_id: item.name}))
                    }}
                >{item.name}</li>
            ))}
        </ul>
     );
}
 
export default Brands;