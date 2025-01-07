import { FaAd, FaBook, FaBookOpen, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    //TODO: get isAdmin value from database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>

                            <li>

                                <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils></FaUtensils> add items</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/manageItems'>
                                    <FaList></FaList> Manage Items</NavLink>
                            </li>

                            <li>

                                <NavLink to='/dashboard/bookings'>
                                    <FaBook></FaBook> Manage Bookings</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/allUsers'>
                                    <FaUser></FaUser> All users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>

                                    <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart({cart.length})</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/review'><FaAd></FaAd>Add a Review</NavLink>
                                </li>

                                <li>

                                    <NavLink to='/dashboard/bookings'><FaBookOpen></FaBookOpen> My Bookings</NavLink>
                                </li>
                            </>
                    }


                    <div className="divider"></div>


                    <li>

                        <NavLink to='/'><FaShoppingCart></FaShoppingCart> Home</NavLink>
                    </li>
                    <li>

                        <NavLink to='/order/salad'>
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>

                        <NavLink to='/order/contact'>
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                    <li>

                        <NavLink to='/order/alluser'>
                            <FaEnvelope></FaEnvelope>
                            All User</NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;