import React from 'react'
import Image from "next/image"

const imageStyle = {
    border: '1px solid #fff',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}


function Gallery() {
    return (
        <>
            <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% lg:h-auto '>

                <div className=' m-auto flex flex-col md:flex-row md:flex-wrap justify-center max-w-screen-xl md:mx-auto '>
                    <div className='lg:w-[30%] md:w-[30%] h-[300px] bg-white/80 drop-shadow-xl backdrop-blur-xl m-4 p-2 cursor-pointer rounded-md hover:scale-105 duration-300'>
                        <Image
                            src="/landscape-1.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                        <h2 className='absolute  top-[240px] text-white left-8 text-2xl font-bold	'>Title</h2>
                    </div>
                    <div className='lg:w-[30%] md:w-[30%] h-[300px] bg-white/80 drop-shadow-xl backdrop-blur-xl m-4 p-2 cursor-pointer rounded-md hover:scale-105 duration-300'>
                        <Image
                            src="/landscape-2.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                        <h2 className='absolute  top-[240px] text-white left-8 text-2xl font-bold z-20	'>Title</h2>
                    </div>

                    <div className='lg:w-[30%] md:w-[30%] h-[300px] bg-white/80 drop-shadow-xl backdrop-blur-xl m-4 p-2 cursor-pointer rounded-md hover:scale-105 duration-300'>
                        <Image
                            src="/landscape-2.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                        <h2 className='absolute  top-[240px] text-white left-8 text-2xl font-bold	'>Title</h2>
                    </div>

                    <div className='lg:w-[30%] md:w-[30%] h-[300px] bg-white/80 drop-shadow-xl backdrop-blur-xl m-4 p-2 cursor-pointer rounded-md hover:scale-105 duration-300'>
                        <Image
                            src="/landscape-3.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                        <h2 className='absolute  top-[240px] text-white left-8 text-2xl font-bold	'>Title</h2>
                    </div>

                    <div className='lg:w-[30%] md:w-[30%] h-[300px] bg-white/80 drop-shadow-xl backdrop-blur-xl m-4 p-2 cursor-pointer rounded-md hover:scale-105 duration-300'>
                        <Image
                            src="/landscape-4.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                        <h2 className='absolute  top-[240px] text-white left-8 text-2xl font-bold	'>Title</h2>
                    </div>

                    <div className='lg:w-[30%] md:w-[30%] h-[300px] bg-white/80 drop-shadow-xl backdrop-blur-xl m-4 p-2 cursor-pointer rounded-md hover:scale-105 duration-300'>
                        <Image
                            src="/landscape-2.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                        <h2 className='absolute  top-[240px] text-white left-8 text-2xl font-bold	'>Title</h2>
                    </div>
                    <div className='lg:w-[30%] md:w-[30%] h-[300px] bg-white/80 drop-shadow-xl backdrop-blur-xl m-4 p-2 cursor-pointer rounded-md hover:scale-105 duration-300'>
                        <Image
                            src="/landscape-1.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                        <h2 className='absolute  top-[240px] text-white left-8 text-2xl font-bold	'>Title</h2>
                    </div>
                    <div className='lg:w-[30%] md:w-[30%] h-[300px] bg-white/80 drop-shadow-xl backdrop-blur-xl m-4 p-2 cursor-pointer rounded-md hover:scale-105 duration-300'>
                        <Image
                            src="/landscape-2.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                        <h2 className='absolute  top-[240px] text-white left-8 text-2xl font-bold z-20	'>Title</h2>
                    </div>

                    <div className='lg:w-[30%] md:w-[30%] h-[300px] bg-white/80 drop-shadow-xl backdrop-blur-xl m-4 p-2 cursor-pointer rounded-md hover:scale-105 duration-300'>
                        <Image
                            src="/landscape-2.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                        <h2 className='absolute  top-[240px] text-white left-8 text-2xl font-bold	'>Title</h2>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Gallery  