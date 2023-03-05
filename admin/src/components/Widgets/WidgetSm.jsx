import "./widgetSm.css";

export default function WidgetSm() {
  const Button = ({type}) =>{
    return <button className={"widgetBtn " + type}>{type}</button>
  }
  return (
    <div className="widgetSm">
      <h2 className="transactionTitle">Latest transactions</h2>
      <table className="widgetTable">
        <tr className="widgetTr">
          <th className="widgetTh">Customer</th>
          <th className="widgetTh">Date</th>
          <th className="widgetTh">Amount</th>
          <th className="widgetTh">Status</th>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img className="widgetUserImg" src="https://cdn.psnews.co.kr/news/photo/202101/1460114_21613_573.png" alt="" />
            <span className="widgetName">Susan Carol</span>
          </td>
          <td className="widgetDate">2023.03.05</td>
          <td className="widgetPrice">$122.00</td>
          <td className="widgetStatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
          <img className="widgetUserImg" src="https://cdn.psnews.co.kr/news/photo/202101/1460114_21613_573.png" alt="" />
            <span className="widgetName">Susan Carol</span>
          </td>
          <td className="widgetDate">2023.03.05</td>
          <td className="widgetPrice">$122.00</td>
          <td className="widgetStatus">
            <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
          <img className="widgetUserImg" src="https://cdn.psnews.co.kr/news/photo/202101/1460114_21613_573.png" alt="" />
            <span className="widgetName">Susan Carol</span>
          </td>
          <td className="widgetDate">2023.03.05</td>
          <td className="widgetPrice">$122.00</td>
          <td className="widgetStatus">
            <Button type="Pending"/>
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
          <img className="widgetUserImg" src="https://cdn.psnews.co.kr/news/photo/202101/1460114_21613_573.png" alt="" />
            <span className="widgetName">Susan Carol</span>
          </td>
          <td className="widgetDate">2023.03.05</td>
          <td className="widgetPrice">$122.00</td>
          <td className="widgetStatus">
            <Button type="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  )
}
