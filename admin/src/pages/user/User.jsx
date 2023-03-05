import "./user.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export default function user() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userEditBtn"><Link to="/newuser" style={{color:"white"}}>Create</Link></button>
      </div>
      <div className="userCardContainer">
        <div className="showUser">
          <div className="showTopContainer">
            <img src="https://thumbs.gfycat.com/ThoroughAnguishedAlaskanmalamute-size_restricted.gif" alt="" />
            <div className="showTopTitle">
              <span className="userName">name</span>
              <span className="userJob">Job</span>
            </div>
          </div>

          <div className="showBottomContainer">
            <div className="account">
              <div className="accountTitle">account Details</div>
              <div className="userIdContainer">
                <PermIdentityIcon className="icon"/> <span className="userId">userId</span>
              </div>
              <div className="userCalendarContainer">
                <CalendarTodayIcon className="icon"/> <span className="userCalendar">03.01.2023</span>
              </div>
            </div>
            <div className="contact">
              <div className="contactTitle">
                Contact Details
              </div>
              <div className="phoneContainer">
                <LocalPhoneIcon className="icon" /> <span className="phone">01074417631</span>
              </div>
              <div className="emailContainer">
                <EmailIcon className="icon"/> <span className="email">know7701@gmail.com</span>
              </div>
              <div className="addressContainer">
                <HomeIcon className="icon"/> <span className="home">경기도 수원시 매탄동</span>
              </div>
            </div>
          </div>

        </div>
        <div className="updateUser">
          <div className="leftContainer">
            <h1 className="updateTitle">Edit</h1>
            <div className="updateContainer">
              <div className="editTitle">Username</div>
              <input className="editInputBox" type="text" placeholder="userId"/>
            </div>
            <div className="updateContainer">
              <div className="editTitle">Fullname</div>
              <input className="editInputBox" type="text" placeholder="fullname"/>
            </div>
            <div className="updateContainer">
              <div className="editTitle">Email</div>
              <input className="editInputBox" type="text" placeholder="email"/>
            </div>
            <div className="updateContainer">
              <div className="editTitle">Phone</div>
              <div className="editPhoneNumber">01074417631</div>
            </div>
            <div className="updateContainer">
              <div className="editTitle">Address</div>
              <input className="editInputBox" type="text" placeholder="Address"/>
            </div>
          
          </div>
          <div className="rightContainer">
            <div className="fileUpload ">
              <label htmlFor="file">
                <img className="editImg" src="https://thumbs.gfycat.com/ThoroughAnguishedAlaskanmalamute-size_restricted.gif" alt="" />
              </label>
              <input type="file" className="fileUploadForm" />
            </div>
            <button className="updateBtn">update</button>
          </div>
        </div>
      </div>
    </div>
  )
}
