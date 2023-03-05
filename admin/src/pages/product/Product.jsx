import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../data";
import {Link} from "react-router-dom";

export default function Product() {
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
                <Chart data={ productData } title="product Data" grid dataKey="Active Product"/>
            </div>
            <div className="productTopRight">
                <div className="productInfo">
                    <div className="productInfoItems">
                        <img className="productInfoImg" src="https://thumbs.gfycat.com/ScentedTerribleArcherfish-size_restricted.gif" alt="" />
                        <h2 className="productInfoTitle">apple</h2>
                    </div>
                    <div className="productInfoItems">
                        <span className="infoItemTitle">id</span>
                        <span className="infoItemdata">1</span>
                    </div>
                    <div className="productInfoItems">
                        <span className="infoItemTitle">stock</span>
                        <span className="infoItemdata">123</span>
                    </div>
                    <div className="productInfoItems">
                        <span className="infoItemTitle">status</span>
                        <span className="infoItemdata">active</span>
                    </div>
                    <div className="productInfoItems">
                        <span className="infoItemTitle">price</span>
                        <span className="infoItemdata">120,000</span>
                    </div>
                </div>
            </div>            
        </div>
    </div>
  )
}
