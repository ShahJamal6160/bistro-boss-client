import { FaAd, FaBookOpen, FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <FaShoppingCart></FaShoppingCart>
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                    </li>
                    <li>
                        <FaShoppingCart></FaShoppingCart>
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <FaShoppingCart></FaShoppingCart>
                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <FaShoppingCart></FaShoppingCart>
                        <NavLink to='/dashboard/review'><FaAd></FaAd>Add a Review</NavLink>
                    </li>
                    <li>
                        <FaShoppingCart></FaShoppingCart>
                        <NavLink to='/dashboard/bookings'><FaBookOpen></FaBookOpen> My Bookings</NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;