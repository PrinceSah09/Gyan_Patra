import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';


const imageStyle = {
    border: '1px solid #fff',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
}


function Founder() {
    return (
        <div
            className='
                bg-gradient-to-r
                m-auto
                from-indigo-500 
                from-10%
                via-sky-500 
                via-30% 
                to-emerald-500
                to-90%
                lg:h-auto
                p-4
            '
        >
            <div className=' h-auto m-auto flex flex-col md:flex-row justify-center items-center gap-4 max-w-screen-xl md:flex-wrap' >
                <div className=' lg:flex-row flex gap-4 flex-col justify-center'>
                    <div className='lg:w-[35%] rounded-md bg-zinc-200/50 backdrop-blur-xl'>
                        <Image
                            src="/landscape-2.jpg" height={400} width={400} style={imageStyle} classsname='rounded-md' alt='landscape art'
                        />
                    </div>
                    <div className='lg:w-[55%] h-auto rounded-md bg-zinc-300/50 backdrop-blur-xl p-4'>
                        <h1 className='ml-[30px] text-xl font-bold mb-2'>Founder Name</h1>
                        <p className='lg:text-xl w-[90%] sm:text-sm m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime, omnis praesentium quis ratione suscipit quisquam? Impedit deserunt non fuga nostrum optio enim atque earum fugiat quam dolore. Quos aliquam unde, nisi, suscipit sapiente ullam eaque exercitationem numquam sed ipsam, nesciunt cumque ipsum? Esse consectetur rem laudantium excepturi asperiores voluptas minus ex aperiam voluptates eum quod beatae odio nobis architecto sunt, ipsam earum eos, libero dolorum voluptatem illum. </p>
                        <Button className="  text-white mt-8 ml-8  font-bold py-4 px-4 rounded transition duration-300">
                            Contact Us
                        </Button>
                    </div>
                </div>

                <div className='lg:flex-row flex gap-4 flex-col-reverse justify-center'>
                    <div className='lg:w-[55%] h-auto rounded-md bg-zinc-300/50 backdrop-blur-xl p-4'>
                        <h1 className='ml-[30px] text-xl font-bold mb-2'>Founder Name</h1>
                        <p className='lg:text-xl w-[90%] sm:text-sm m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime, omnis praesentium quis ratione suscipit quisquam? Impedit deserunt non fuga nostrum optio enim atque earum fugiat quam dolore. Quos aliquam unde, nisi, suscipit sapiente ullam eaque exercitationem numquam sed ipsam, nesciunt cumque ipsum? Esse consectetur rem laudantium excepturi asperiores voluptas minus ex aperiam voluptates eum quod beatae odio nobis architecto sunt, ipsam earum eos, libero dolorum voluptatem illum. </p>
                        <Button className="  text-white mt-8 ml-8  font-bold py-4 px-4 rounded transition duration-300">
                            Contact Us
                        </Button>
                    </div>
                    <div className='lg:w-[35%] h-auto rounded-md bg-zinc-200/50 backdrop-blur-xl'>
                        <Image
                            src="/landscape-1.jpg" height={300} width={300} style={imageStyle} alt='landscape art'
                        />
                    </div>
                </div>


                <div className=' lg:flex-row flex gap-4 flex-col justify-center'>
                    <div className='lg:w-[35%] rounded-md bg-zinc-200/50 backdrop-blur-xl'>
                        <Image
                            src="/landscape-2.jpg" height={400} width={400} style={imageStyle} classsname='rounded-md' alt='landscape art'
                        />
                    </div>
                    <div className='lg:w-[55%] h-auto rounded-md bg-zinc-300/50 backdrop-blur-xl p-4'>
                        <h1 className='ml-[30px] text-xl font-bold mb-2'>Founder Name</h1>
                        <p className='lg:text-xl w-[90%] sm:text-sm m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime, omnis praesentium quis ratione suscipit quisquam? Impedit deserunt non fuga nostrum optio enim atque earum fugiat quam dolore. Quos aliquam unde, nisi, suscipit sapiente ullam eaque exercitationem numquam sed ipsam, nesciunt cumque ipsum? Esse consectetur rem laudantium excepturi asperiores voluptas minus ex aperiam voluptates eum quod beatae odio nobis architecto sunt, ipsam earum eos, libero dolorum voluptatem illum. </p>
                        <Button className="  text-white mt-8 ml-8  font-bold py-4 px-4 rounded transition duration-300">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Founder