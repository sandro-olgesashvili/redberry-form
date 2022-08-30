const TeamsOption = ({ options, setOpenClose,setObjInputs, objInputs }) => {
  return (
    <ul className="teams-option">
      {options.map((option, index) => (
        <li 
          key={index}
          onClick={() => {
            setOpenClose(false);
            setObjInputs({...objInputs, team_id: option.name, position_id:'პოზიცია' ,id: option.id})
          }}
        >
          {option.name}
        </li>
      ))}
    </ul>
  );
};

export default TeamsOption;
