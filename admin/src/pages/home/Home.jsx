import "./home.css"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import Chart from "../../components/chart/Chart"
import {data} from "../../data";
import WidgetLg from "../../components/Widgets/WidgetLg";
import WidgetSm from "../../components/Widgets/WidgetSm";

export default function Home() {
  return (
    <div className="home">
        <div className="homeWrapper">
            <Featuredinfo />
            <Chart data={data} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
              <WidgetLg />
              <WidgetSm />
            </div>
        </div>
    </div>
  )
}
