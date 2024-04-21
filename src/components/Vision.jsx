import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator"

function Vision() {
    return (
        <div>
            <div className='w-full bg-zinc-600/60'>
                <div className='max-w-screen-xl  lg:mx-auto flex-wrap mx-2 flex lg:gap-4 justify-center'>
                    <div className='lg:w-[30%]  my-4 p-4 items-center flex flex-col text-center gap-2'>

                        <div className='text-9xl'>
                            <FaPeopleGroup />
                        </div>
                        <h2 className='text-4xl'>Dummy sd</h2>
                        <h3>Dummy ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere illo cumque.</h3>
                    </div>
                    <Separator orientation="vertical" className="border h-[250px] mt-10 lg:block hidden" />
                    <Separator orientation="horizontal" className="border mt-10 md:hidden block" />
                    <div className='lg:w-[30%]  my-4 p-4 items-center flex flex-col text-center gap-2'>
                        <div className='text-9xl'>
                            <FaPeopleGroup />
                        </div>
                        <h2 className='text-4xl'>Dummy sd</h2>
                        <h3>Dummy ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere illo cumque.</h3>
                    </div>
                    <Separator orientation="vertical" className="border h-[250px] mt-10 lg:block hidden" />
                    <Separator orientation="horizontal" className="border mt-10 md:hidden block" />
                    <div className='lg:w-[30%]  my-4 p-4 items-center flex  flex-col text-center gap-2'>
                        <div className='text-9xl'>
                            <FaPeopleGroup />
                        </div>
                        <h2 className='text-4xl'>Dummy sd</h2>
                        <h3>Dummy ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere illo cumque.</h3>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Vision