const PostionOption = ({postionOpt, setOpenClosePost, setObjInputs, objInputs }) => {
  return (
    <ul className="teams-option">
        {postionOpt.filter(postion => postion.team_id === objInputs.id).map((item, index) => (
            <li key={index}
                onClick={() => {
                    setOpenClosePost(false)
                    setObjInputs({...objInputs, position_id: item.name})
                  }}
            >{item.name}</li>
        ))}
    </ul>
  );
};

export default PostionOption;
