const Cpu = ({ cpus, setLaptopDetail, setCpuOnOff }) => {
  return (
    <ul className="cpu-ul">
      {cpus.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setCpuOnOff((prev) => !prev);
            setLaptopDetail((prev) => ({
              ...prev,
              laptop_cpu:item.name
            }));
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Cpu;
