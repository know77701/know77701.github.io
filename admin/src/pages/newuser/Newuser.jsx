import "./newuser.css";

export default function Newuser() {
  return (
    <div className='newuser'>
        <h2 className="newuserTitle">Create user</h2>
        <div className="inputContainer">
            <div className="createUserItem">
                <div className="subTitle">User Name</div>
                <input type="text" className="createInput" />
            </div>
            <div className="createUserItem">
                <div className="subTitle">Full Name</div>
                <input type="text" className="createInput" />
            </div>
            <div className="createUserItem">
                <div className="subTitle">Email</div>
                <input type="text" className="createInput" />
            </div>    
            <div className="createUserItem">
                <div className="subTitle">Password</div>
                <input type="text" className="createInput" />
            </div>
            <div className="createUserItem">
                <div className="subTitle">Phone</div>
                <input type="text" className="createInput" />
            </div>
            <div className="createUserItem">
                <div className="subTitle">Address</div>
                <input type="text" className="createInput" />
            </div>
            <div className="createUserItem">
                <div className="subTitle">Gender</div>
                <div className="radioBtnContainer">
                    <label htmlFor="Male">
                        <input type="radio" className="radioBtnM" value="Male" name="gender" />
                        <span className="radioTitle">Male</span>
                    </label>
                    <label htmlFor="Female">
                        <input type="radio" className="radioBtnF" value="Female" name="gender" />
                        <span className="radioTitle">Female</span> 
                    </label>
                </div>
            </div>
            <div className="createUserItem">
                <div className="subTitle">active</div>
                <select name="active" className="selectBox">
                    <option value="Y">Yes 🍊</option>
                    <option value="N">No</option>
                </select>
            </div>
        </div>
            <button className="createUserSaveBtn">Save</button>
    </div>
  )
}
