import './featuredinfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default function Featuredinfo() {
  return (
<div className='featured'>
      <div className="featuredItem">
        <div className="featuredTitle">revanue</div>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$50</span>
            <span className="featuredMoneyRate">
              -11.4<ArrowDownwardIcon className='featuredIcon'/>
            </span>
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
