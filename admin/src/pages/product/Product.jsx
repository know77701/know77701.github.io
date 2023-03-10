import "./product.css";
import Chart from "../../components/chart/Chart";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import PublishIcon from '@mui/icons-material/Publish';
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId)
     );
    const [pStats, setPStats] = useState([])

    const MONTHS = useMemo(()=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"])  
        console.log(product);
        useEffect(() => {
            const getStats = async () => {
              try {
                const res = await userRequest.get("orders/income?pid=" + productId);
                console.log(res);
                const list = res.data.sort((a,b)=>{
                    return a._id - b._id
                })
                list.map((item) =>
                  setPStats((prev) => [
                    ...prev,
                    { name: MONTHS[item._id - 1], Sales: item.total },
                  ])
                );
              } catch (err) {
                console.log(err);
              }
            };
            getStats();
          }, [productId, MONTHS]);
    

  return (
    <div className="product">
        <div className="productTitleContainer">
            <h2 className="productTitle">Product</h2>
            <Link>
                <button className="productAddBtn">Create</button>
            </Link>
        </div>
        <div className="productTopContainer">
            <div className="productTopLeft">
                <Chart data={ pStats } dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfo">
                    <div className="productInfoItems">
                        <img className="productInfoImg" src={product.img} alt="" />
                        <h2 className="productInfoTitle">{product.title}</h2>
                    </div>
                    <div className="productInfoItems">
                        <span className="infoItemTitle">id</span>
                        <span className="infoItemdata">{product._id}</span>
                    </div>
                    <div className="productInfoItems">
                        <span className="infoItemTitle">stock</span>
                        <span className="infoItemdata">{product.inStock ? "Yes" : "No"}</span>
                    </div>
                    <div className="productInfoItems">
                        <span className="infoItemTitle">status</span>
                        <span className="infoItemdata">active</span>
                    </div>
                    <div className="productInfoItems">
                        <span className="infoItemTitle">price</span>
                        <span className="infoItemdata">${product.price}</span>
                    </div>
                </div>
            </div>            
        </div>
        <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={product.title}/>
                  <label>Product Descript</label>
                  <input type="text" placeholder={product.desc}/>
                  <label>Price</label>
                  <input type="text" placeholder={product.price}/>
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label htmlFor="file">
                          <PublishIcon />
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}
