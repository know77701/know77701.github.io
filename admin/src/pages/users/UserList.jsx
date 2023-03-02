import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { rows } from "../../data";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(rows);

    const handlerDelete = (id) => {
        setData(data.filter(item=> item.id !==id));
    }
    
    const columns= [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'username', headerName: 'username', width: 130, renderCell:(params)=>{
            return (
                <div className="userListName">
                    <img className="userImage" src={params.row.img}/> 
                    {params.row.username}
                </div>
            )
        } },
        { field: 'status', headerName: 'status', width: 130 },
        { field: 'email',headerName: 'email',width: 200,},
        { field: 'transaction',headerName: 'transaction',width: 160,},
        { field: 'action',headerName: 'Action',width: 160, renderCell:(params) => {
            return (
                <div className="actionContainer">
                    <Link to={`/users/${params.row.id}`}><button className="editButton">Edit</button></Link>
                    <DeleteOutlineIcon className="deleteButton" onClick={()=> handlerDelete(params.row.id)}/>
                </div>
            )
        }},
      ];
      

  return (
    <div className="userList">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
    </div>
  )
}
