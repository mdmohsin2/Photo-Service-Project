import React from 'react';

const Explore = () => {
    return (
        <div className='pt-14 pb-32 px-10' style={{ backgroundColor: "#0C151E" }}>

            <h2 style={{ color: "#CB976B" }} className='text-center font-semibold text-5xl md:text-6xl capitalize'>explore  <span className='text-white'>artist's journey</span></h2>

            <div className='mt-28'>
                <div className='grid gap-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                    <div>
                        <img className='mx-auto' src={`https://i.ibb.co/mTCTfjP/Rectangle-5010.png`} alt="" />
                    </div>
                    <div className='text-center lg:mt-8'>
                        <img className='mx-auto' src={`https://i.ibb.co/kcwfjJK/Group-1000004391.png`} alt="" />
                        <h4 className='font-bold text-2xl text-white capitalize my-3'>Title of the art</h4>
                        <p className='text-white text-sm'>Contrary to popular belief, Lorem <br /> Ipsum is not random text.</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={`https://i.ibb.co/SwyXCGx/Rectangle-5013.png`} alt="" />
                    </div>
                    <div className='text-center lg:mt-8'>
                        <img className='mx-auto' src={`https://i.ibb.co/LgVf2PH/Group-1000004391-1.png`} alt="" />
                        <h4 className='font-bold text-2xl text-white capitalize my-3'>Title of the art</h4>
                        <p className='text-white text-sm'>Various versions have evolved over the years, sometimes by accident.</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={`https://i.ibb.co/fG4hWwf/Rectangle-5014.png`} alt="" />
                    </div>
                </div>

                <div className='px-20 my-10'>
                    <img src={`https://i.ibb.co/Jy33Xhw/Group-1000004389.png`} alt="" />
                </div>

                <div className='grid gap-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                    <div className='text-center'>
                        <img className='mx-auto' src={`https://i.ibb.co/9bQzbGV/Group-1000004390.png`} alt="" />
                        <h4 className='font-bold text-2xl text-white capitalize my-3'>Title of the art</h4>
                        <p className='text-white text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteratioN.</p>
                    </div>
                    <div>
                        <img className='mx-auto' src={`https://i.ibb.co/tcxF5Q6/Rectangle-5011.png`} alt="" />
                    </div>
                    <div className='text-center'>
                        <img className='mx-auto' src={`https://i.ibb.co/L0YjbK2/Group-1000004390-1.png`} alt="" />
                        <h4 className='font-bold text-2xl text-white capitalize my-3'>Title of the art</h4>
                        <p className='text-white text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteratioN.</p>
                    </div>
                    <div className=''>
                        <img className='mx-auto' src={`https://i.ibb.co/6tg371j/Rectangle-5012.png`} alt="" />
                    </div>
                    <div className='text-center'>
                        <img className='mx-auto' src={`https://i.ibb.co/rQRyCpM/Group-1000004390-2.png`} alt="" />
                        <h4 className='font-bold text-2xl text-white capitalize my-3'>Title of the art</h4>
                        <p className='text-white text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteratioN.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;