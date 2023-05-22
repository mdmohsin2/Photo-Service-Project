import React from 'react';

const Upcoming = () => {
    return (
        <div className='pt-8 pb-32' style={{ backgroundColor: "#0C151E" }}>
            <h2 className='text-center font-semibold text-5xl md:text-6xl text-white'>Upcoming <span style={{color:"#CB976B"}}>Events</span></h2>
            <p className='text-gray-300 w-3/6 text-center mx-auto mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <div className='mt-16 mx-auto grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3' style={{ width: "90%" }}>
                <div>
                    <div className='card w-72 md:w-80 mx-auto text-white'>
                        <img className='mb-5' src={`https://i.ibb.co/SV8cvrg/Rectangle-18.png`} alt="img" />
                        <small className='font-medium' style={{ color: "#D1D2D3" }}>John Doe • 19 Jan 2022</small>
                        <h6 className='text-2xl my-3'>A small business is only as good as its tools and it is totally true.</h6>
                        <p className='text-lg my-3' style={{ color: '#D1D2D3' }}>We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                        <button className='btn btn-sm w-1/4 rounded-3xl btn-outline bg-white' style={{ color: "#CB976B" }}>ARTIST</button>
                    </div>
                </div>
                <div>
                    <div className='card w-72 md:w-80 mx-auto text-white'>
                        <img className='mb-5' src={`https://i.ibb.co/r5FHKLJ/Rectangle-19.png`} alt="img" />
                        <small className='font-medium' style={{ color: "#D1D2D3" }}>John Doe • 19 Jan 2022</small>
                        <h6 className='text-2xl my-3'>A small business is only as good as its tools and it is totally true.</h6>
                        <p className='text-lg my-3' style={{ color: '#D1D2D3' }}>We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                        <button className='btn btn-sm w-1/4 rounded-3xl btn-outline bg-white' style={{ color: "#CB976B" }}>ARTIST</button>
                    </div>
                </div>
                <div>
                    <div className='card w-72 md:w-80 mx-auto text-white'>
                        <img className='mb-5' src={`https://i.ibb.co/hcY0vhh/Rectangle-19-1.png`} alt="img" />
                        <small className='font-medium' style={{ color: "#D1D2D3" }}>John Doe • 19 Jan 2022</small>
                        <h6 className='text-2xl my-3'>A small business is only as good as its tools and it is totally true.</h6>
                        <p className='text-lg my-3' style={{ color: '#D1D2D3' }}>We've all experienced the chaos of multiple spreadsheets, tracking and insight tools...</p>
                        <button className='btn btn-sm w-1/4 rounded-3xl btn-outline bg-white' style={{ color: "#CB976B" }}>ARTIST</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;