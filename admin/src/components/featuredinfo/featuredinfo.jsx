import './featuredinfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';
import {userRequest} from "../../requestMethods";

export default function Featuredinfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        const sortedData = res.data.sort((a, b) => a.total - b.total);
        setIncome(sortedData);
        setPerc((sortedData[0].total * 100) / sortedData[1].total - 100);
      } catch {}
    };
    getIncome();
  }, []);
  return (
<div className='featured'>
      <div className="featuredItem">
        <div className="featuredTitle">revanue</div>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">${income[0]?.total}</span>
              {perc < 0 ? (
                <span className="featuredMoneyRate">
                  %{Math.floor(perc)}{" "} <ArrowDownwardIcon className='featuredIcon'/> 
                </span>
              ) : (
                <span className="featuredMoneyRate native">
                  %{Math.floor(perc)}{" "} <ArrowUpwardIcon className='featuredIcon native'/>
                </span>
              )
              }
          </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle">revanue</div>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$15,000</span>
            <span className="featuredMoneyRate">
              -11.4<ArrowDownwardIcon className='featuredIcon'/>
            </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle">revanue</div>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,000</span>
            <span className="featuredMoneyRate native">
              11.4<ArrowUpwardIcon className='featuredIcon native'/>
            </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
    </div>
  )
}
