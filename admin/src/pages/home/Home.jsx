import "./home.css"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import Chart from "../../components/chart/Chart"
import {data} from "../../data";
import WidgetLg from "../../components/Widgets/WidgetLg";
import WidgetSm from "../../components/Widgets/WidgetSm";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(()=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"])  
  
  useEffect(()=>{
    const getStats = async ()=>{
        try {
          const res = await userRequest.get("/users/stats")
          res.data.map(item=>(
            setUserStats(prev=>[
              ...prev,
              {name:MONTHS[item._id-1], "Active User": item.total}
            ])
          ))
        } catch (error) {
          
        }
      }
      getStats();
  },[])

  return (
    <div className="home">
        <div className="homeWrapper">
            <Featuredinfo />
            <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
              <WidgetLg />
              <WidgetSm />
            </div>
        </div>
    </div>
  )
}
