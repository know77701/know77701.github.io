import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import "./layout.css";

export default function Layout() {
  return (
      <div className='container'>
        <Topbar />
        <Sidebar />
    </div>
  )
}
