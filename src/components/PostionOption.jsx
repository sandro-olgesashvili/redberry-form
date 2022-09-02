const PostionOption = ({postionOpt, setOpenClosePost, setObjInputs, objInputs }) => {
  return (
    <ul className="teams-option">
        {postionOpt.filter(postion => postion.team_id === objInputs.team_id).map((item, index) => (
            <li key={index}
                onClick={() => {
                    setOpenClosePost(false)
                    setObjInputs({...objInputs, position_id: item.id})
                  }}
            >{item.name}</li>
        ))}
    </ul>
  );
};

export default PostionOption;
