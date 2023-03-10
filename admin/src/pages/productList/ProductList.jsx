import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector(state=> state.product.products);

    useEffect(()=>{
        getProducts(dispatch);
    },[dispatch])

    const handlerDelete = (id) => {
        deleteProduct(id, dispatch);
    }
    const columns= [
        { field: '_id', headerName: 'ID', width: 270 },
        { field: 'product', 
            headerName: 'product', width: 250, 
            renderCell:(params)=>{
            return (
                <div className="productListContainer">
                    <img className="productListImg" src={params.row.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZi_qsId1E9CZ50LJR-9CiiSz86xHTfqG1f8XzeZhP3Lw9Lqx5HEddzPoNtmpuExDC88&usqp=CAU"} /> 
                    {params.row.title}
                </div>
            )
        } },
        { field: 'inStock',headerName: 'stock',width: 200,},
        { field: 'price',headerName: 'price',width: 160,},
        { field: 'action',headerName: 'Action',width: 160, renderCell:(params) => {
            return (
                <div className="actionContainer">
                    <Link to={`/products/${params.row._id}`}><button className="editButton">Edit</button></Link>
                    <DeleteOutlineIcon className="deleteButton" onClick={()=> handlerDelete(params.row._id)}/>
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
            rows={products}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            getRowId={row => row._id}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
  )
}
