import './sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import {Link} from "react-router-dom"; 

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <LineStyleIcon className='sidebarIcon'/>
                    <Link to="/">Home</Link>
                </li>               
                <li className="sidebarListItem">
                    <TimelineIcon className='sidebarIcon'/>
                    Analytics
                </li>               
                <li className="sidebarListItem">
                    <TrendingUpIcon className='sidebarIcon'/>
                    Sales
                </li>               
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <PersonIcon className='sidebarIcon'/>
                    <Link to="/users">User</Link>
                </li>               
                <li className="sidebarListItem">
                    <StorefrontIcon className='sidebarIcon'/>
                    Products
                </li>               
                <li className="sidebarListItem">
                    <AttachMoneyIcon className='sidebarIcon'/>
                    Transactions
                </li>               
                <li className="sidebarListItem">
                    <BarChartIcon className='sidebarIcon'/>
                    Reports
                </li>               
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notification</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <MailOutlineIcon className='sidebarIcon'/>
                    Mail
                </li>               
                <li className="sidebarListItem">
                    <DynamicFeedIcon className='sidebarIcon'/>
                    Feedback
                </li>               
                <li className="sidebarListItem">
                    <ChatBubbleOutlineIcon className='sidebarIcon'/>
                    Messages
                </li>               
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <WorkOutlineIcon className='sidebarIcon'/>
                    Manage
                </li>               
                <li className="sidebarListItem">
                    <TimelineIcon className='sidebarIcon'/>
                    Analytics
                </li>               
                <li className="sidebarListItem">
                    <ReportIcon className='sidebarIcon'/>
                    Reports
                </li>               
            </ul>
        </div>
      </div>
    </div>
  )
}
