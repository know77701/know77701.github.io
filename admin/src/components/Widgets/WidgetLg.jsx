import "./widgetLg.css"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetLg() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async () =>{
      try{
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      }catch{
        
      }
    }
    getUsers();
  }, []);

  return (
    <div className="widgetLg">
      <div className="widgetLgTitleContainer">
        <h2 className="widgetLgTitle">new Members</h2>
      </div>
      <div className="newMemberContainer">
        {users.map(user=>(
          <div className="newMemberNameItem" key={user._id}>
          <img className="newMemberImg" src={users.img || "https://thumbs.gfycat.com/WarmheartedCelebratedAbyssiniancat-size_restricted.gif"} alt="" />
          <div className="newMemberNameContainer">
            <div className="newMemberName">{user.username}</div>
          </div>
          <div className="newMemberBtn">
            <ArrowCircleRightIcon style={{ marginRight:"3px", fontSize:"20px"}}/> Display
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
