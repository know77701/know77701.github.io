import './featuredinfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function featuredinfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <div className="featuredTitle">revanue</div>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$50,000</span>
            <span className="featuredMoneyRate">
                <ArrowDownwardIcon/>-11.4
            </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
    </div>
  )
}
