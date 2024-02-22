import { Outlet } from "react-router-dom"
import Navbar from "../../molecules/layout/navbar";
import Footer from "../../molecules/layout/footer"
import "./layout.css"

const Layout = () => {
    return (
        <div className="main">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;