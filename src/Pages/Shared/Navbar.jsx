import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../Hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li>
            <Link to='/dashboard/cart'>
                <button className="btn">
                   <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>

        {
            user ?
                <>
                    {/* <span>{user?.displayName}</span> */}
                    <img className="w-8 rounded-lg ml-4" src={user?.photoURL} alt="" />
                    <button onClick={handleLogOut} className="btn btn-active btn-ghost">LogOut</button>
                </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 
            bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <a className="btn btn-ghost normal-case text-xl">Bistro-Boss <br /> Restaurant</a>
                        {/* <p>Restaurant</p> */}
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;