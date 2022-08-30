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
              cpu: {
                name: item.name,
              },
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
