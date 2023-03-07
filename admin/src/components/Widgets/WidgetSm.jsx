import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetSm.css";
import {format} from "timeago.js"

export default function WidgetSm() {
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    const getOrders = async () =>{
      try{
        const res = await userRequest.get("orders");
        setOrders(res.data);
      }catch{}
    }
    getOrders();
  }, []);

  const Button = ({type}) =>{
    return <button className={"widgetBtn " + type}>{type}</button>
  }

  return (
    <div className="widgetSm">
      <h2 className="transactionTitle">Latest transactions</h2>
      <table className="widgetTable">
        <thead>
          <tr className="widgetTr">
            <th className="widgetTh">Customer</th>
            <th className="widgetTh">Date</th>
            <th className="widgetTh">Amount</th>
            <th className="widgetTh">Status</th>
          </tr>
        </thead>
        <tbody>
        {orders.map((order)=>(
        <tr className="widgetTr" key={order._id}>
          <td className="widgetUser">
            <span className="widgetName">{order.userId}</span>
          </td>
          <td className="widgetDate">{format(order.createdAt)}</td>
          <td className="widgetPrice">$ {order.amount}</td>
          <td className="widgetStatus">
            <Button type={order.status}/>
          </td>
        </tr>
        ))}
      </tbody>
      </table>
    </div>
  )
}
