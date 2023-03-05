import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { productsRows } from "../../data";
import { useState } from "react";

export default function ProductList() {
    const [data, setData] = useState(productsRows);
    const handlerDelete = (id) => {
        setData(data.filter(item=> item.id !==id));
    }
    const columns= [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'product', 
            headerName: 'product', width: 130, renderCell:(params)=>{
            return (
                <div className="productListContainer">
                    <img className="productListImg" src={params.row.productImg}/> 
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock',headerName: 'stock',width: 200,},
        { field: 'price',headerName: 'price',width: 160,},
        { field: 'status', headerName: 'status', width: 130 },
        { field: 'action',headerName: 'Action',width: 160, renderCell:(params) => {
            return (
                <div className="actionContainer">
                    <Link to={`/products/${params.row.id}`}><button className="editButton">Edit</button></Link>
                    <DeleteOutlineIcon className="deleteButton" onClick={()=> handlerDelete(params.row.id)}/>
                </div>
            )
        }},
      ];

  return (
    <div className="productList">
        <div className="productListTopContainer">
            <h2 className="productListTitle">Product List</h2>
            <button className="createProductBtn">
                <Link to="/newProduct" style={{color:"white"}}>Create</Link>
            </button>
        </div>
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
