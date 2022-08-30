import DragDrop from "./DragDrop";
import VectorDown from '../images/Vectordown.svg'
import Brands from "./Brands";
import {  useState } from "react";
import Cpu from './Cpu'



const LaptopForm = ({setLaptopDetail, laptopDetail, brands, handleChangeLaptop,cpus}) => {
    const [brandOnOff, setBrandOnOff] = useState(false)
    const [cpuOnOff, setCpuOnOff] = useState(false)

    return ( 
        <div style={{display:'flex', flexDirection:'column'}}>
            <DragDrop laptopDetail={laptopDetail} setLaptopDetail={setLaptopDetail} />
            <div className="laptop-name-brand">
                <div className="addnote-form-two-inputs">
                    <label>ლეპტოპის სახელი</label>
                    <input type="text" placeholder="HP" name='name' value={laptopDetail.name}  onChange={(e) => handleChangeLaptop(e) } />
                    <small>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </small>
                </div>
                <div className="laptop-brand">
                    <span>{laptopDetail.brand_id}</span>
                    <button type="button" onClick={() => setBrandOnOff(!brandOnOff)}><img src={VectorDown} alt="vector"/></button>
                    {brandOnOff && <Brands brands={brands} setLaptopDetail={setLaptopDetail} setBrandOnOff={setBrandOnOff}/>}
                </div>
            </div>
            <div className="cpu">
                <div className="cpu-select" >
                    <span>{laptopDetail.cpu.name}</span>
                    <button type="button" onClick={() => setCpuOnOff(prev => !prev)}><img src={VectorDown} alt="vec"/></button>
                    {cpuOnOff && <Cpu cpus={cpus} setLaptopDetail={setLaptopDetail} setCpuOnOff={setCpuOnOff}/>}
                </div>
                <div className="addnote-form-two-inputs" >
                    <label>CPU-ს ბირთვი</label>
                    <input type="number" name='cores' value={laptopDetail.cpu.cores} onChange={(e) => {handleChangeLaptop(e)}} />
                    <small>მხოლოდ ციფრები</small>
                </div>
                <div className="addnote-form-two-inputs" >
                    <label>CPU-ს ბირთვი</label>
                    <input type="number" name='threads' value={laptopDetail.cpu.threads} onChange={(e) => {handleChangeLaptop(e)}} />
                    <small>მხოლოდ ციფრები</small>
                </div>
            </div>
        </div>
     );
}
 
export default LaptopForm;