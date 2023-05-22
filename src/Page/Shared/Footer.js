import React from 'react';

const Footer = () => {
    return (
        <div className='p-14' style={{ backgroundColor: "#CB976B" }}>
            <div className='w-5/6 mx-auto text-center'>
                <img className='w-16 h-12 mx-auto' src={`https://i.ibb.co/gzvSMMs/Group-1000004432.png`} alt="img" />
                <ul className='text-white text-xl my-5 font-semibold grid gap-3 grid-cols-3 md:grid-cols-5 lg:w-3/6 mx-auto '>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Gallery</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Event</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
                <hr />
                <p className='font-semibold text-xl text-white my-5'>© 2022 . All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;