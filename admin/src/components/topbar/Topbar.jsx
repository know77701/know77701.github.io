import './topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Outlet } from 'react-router-dom';


export default function Topbar() {
  return (
    <div className='topbar'>
        <Outlet />
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">admin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconsContainer">
                    <NotificationsNoneIcon />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <LanguageIcon />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <SettingsIcon />
                </div>
                <img src="https://know701.github.io/assets/images/mainimg.jpg" alt="" className="topImage" />
            </div>
        </div>
    </div>
  )
}
