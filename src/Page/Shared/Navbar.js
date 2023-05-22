import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link className='mr-5 font-bold text-white'>Home</Link></li>
        <li><Link className='mr-5 font-bold text-white'>Gallery</Link></li>
        <li><Link className='mr-5 font-bold text-white'>About</Link></li>
        <li><Link className='mr-5 font-bold text-white'>Event</Link></li>
    </React.Fragment>
    
    return (
        <div style={{
            backgroundImage: `url('https://i.ibb.co/LpMQsM2/banner.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingBottom: "100px"
        }}>
            <div className="navbar max-w-screen-lg mx-auto py-12" >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden bg-white mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a href='/' className=" normal-case text-xl">
                        <img className='w-4/6' src={`https://i.ibb.co/tz4QMLq/Group-1000004432.png`} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end" >
                    <a style={{ backgroundColor: "#CB976B" }} href='/' className="btn btn-sm">Contact Us</a>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-12  lg:grid-cols-12 gap-10 max-w-screen-lg mx-auto mt-20'>

                <div className='text-start md:col-span-8 text-white md:px-4 px-6 mt-16'>
                    <h4 className='font-medium text-xl md:text-2xl'>The Art Revolution!</h4>
                    <h2 className='capitalize font-semibold text-3xl md:text-6xl my-5' style={{ color: "#CB976B" }}>Recovery<span className='text-white'> through Resonance</span></h2>
                    <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                </div>

                <div className=' md:col-span-4 text-white mx-auto text-center'>
                    <img className='mx-auto max-h-72' src={`https://i.ibb.co/rbpqgmR/banner1.png`} alt="" />
                    <h2 className='font-semibold text-lg mt-5 mb-2'>“The Dark Flower Base”</h2>
                    <p>Artist : Gorge (22 years)</p>
                    <p>Today’s Feeling : Happy, Cheefull</p>
                    <p>Struggles With : Drinking</p>
                    <p>Sobriety : Old Timer</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;