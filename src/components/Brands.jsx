const Brands = ({brands, setLaptopDetail, setBrandOnOff}) => {
    return ( 
        <ul className="brands-ul"
            >
            {brands.map((item, index) => (
                <li key={index}
                    onClick={() => {
                        setBrandOnOff(prev => !prev)
                        setLaptopDetail((prev) => ({...prev, laptop_brand_id: item.id}))
                    }}
                >{item.name}</li>
            ))}
        </ul>
     );
}
 
export default Brands;