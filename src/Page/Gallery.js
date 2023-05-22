import React from 'react';

const Gallery = () => {
    return (
        <div className='pt-14 pb-32 px-10' style={{ backgroundColor: "#0C151E" }}>

            <h2 className='text-center capitalize font-semibold text-5xl md:text-6xl text-white'>The Art <span style={{ color: "#CB976B" }}>Gallery</span></h2>
            <p className='w-4/6 text-center mx-auto mt-10 text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>

            {/* Gallery Start Here */}
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-20">
                {/* left side */}
                <div className='col-span-4 border-2 rounded-lg'>

                    <div className='text-white flex justify-between p-3' style={{ backgroundColor: "#CB976B" }}>
                        <p>Filter by</p>
                        <input className='underline cursor-pointer' type="reset" value="Reset" />
                    </div>

                    <div className='max-w-xs mx-auto my-6'>
                        <select className='w-full max-w-xs rounded-md' style={{ height: "50px" }} name="gender" value="Gender" id="">
                            <option value="" selected>Gender</option>
                            <option value="">All</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                            <option value="">Nonbinary</option>
                        </select>
                    </div>

                    <div className='max-w-xs mx-auto my-6'>
                        <select className='w-full max-w-xs rounded-md' style={{ height: "50px" }} name="Age" value="Gender" id="">
                            <option value="" selected>Age</option>
                            <option value="">18</option>
                            <option value="">19</option>
                            <option value="">20</option>
                            <option value="">21</option>
                        </select>
                    </div>

                    <div className='max-w-xs mx-auto my-6'>
                        <select className='w-full max-w-xs rounded-md' style={{ height: "50px" }} name="Age" value="Gender" id="">
                            <option value="" selected>Today Felling</option>
                            <option value="">Good</option>
                            <option value="">Very Good</option>
                            <option value="">Awesome</option>
                            <option value="">Beautiful</option>
                        </select>
                    </div>
                    <div className='max-w-xs mx-auto my-6'>
                        <select className='w-full max-w-xs rounded-md' style={{ height: "50px" }} name="Age" value="Gender" id="">
                            <option value="" selected>Struggles With</option>
                            <option value="">Good</option>
                            <option value="">Very Good</option>
                            <option value="">Awesome</option>
                            <option value="">Beautiful</option>
                        </select>
                    </div>
                    <div className=' max-w-xs mx-auto my-6'>
                        <select className='w-full max-w-xs rounded-md' style={{ height: "50px" }} name="Age" value="Gender" id="">
                            <option value="" selected>Length of Recovery</option>
                            <option value="">Good</option>
                            <option value="">Very Good</option>
                            <option value="">Awesome</option>
                            <option value="">Beautiful</option>
                        </select>
                    </div>
                </div>


                {/* right side */}
                <div className='col-span-8'>
                    <main className="grid gap-4 grid-cols-12 grid-rows-3 mt-10 md:mt-0">
                        <div className=" flex h-auto col-span-4">
                            <img src={`https://i.ibb.co/fQPknHb/Rectangle-4996.png`} alt="" />
                        </div>
                        <div className="  flex h-auto col-span-2">
                            <img src={`https://i.ibb.co/bsGSC7n/Rectangle-4998.png`} alt="" />
                        </div>
                        <div className=" flex h-auto col-span-4 row-span-2">
                            <img src={`https://i.ibb.co/mNX34bh/Rectangle-5013.png`} alt="" />
                        </div>
                        <div className=" flex  h-auto col-span-2 row-span-2">
                            <img src={`https://i.ibb.co/FYtD6pp/Rectangle-5015.png`} alt="" />
                        </div>
                        <div className=" flex h-auto col-span-2">
                            <img src={`https://i.ibb.co/sKbJYng/Rectangle-5000.png`} alt="" />
                        </div>
                        <div className="flex h-auto row-span-2 col-span-4">
                            <img src={`https://i.ibb.co/vxPSgQs/Rectangle-5002.png`} alt="" />
                        </div>
                        <div className=" flex h-auto col-span-2">
                            <img src={`https://i.ibb.co/myz5nWd/Rectangle-5006.png`} alt="" />
                        </div>
                        <div className=" flex h-auto col-span-2">
                            <img src={`https://i.ibb.co/1ngLGyN/Rectangle-5016.png`} alt="" />
                        </div>
                        <div className=" flex h-auto col-span-4">
                            <img src={`https://i.ibb.co/wSxhNcQ/Rectangle-5014.png`} alt="" />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Gallery;