import React from 'react'
import { Button } from "@/components/ui/button"


function Card() {
    return (
        <div class='max-w-screen-xl mx-auto my-4'>
            <div class='holder flex flex-col lg:flex-row   justify-center mx-4 lg:mx-auto'>
                <div class='m-4 card1-section lg:w-[40%] p-4 shadow-xl rounded-lg'>
                    <h2 class='text-3xl font-bold py-6'>NGO Intro</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus accusantium dolores ipsam ab! Aliquid possimus reiciendis sunt laudantium aliquam neque deserunt at, corporis accusantium ad repudiandae natus praesentium quos? Lorem ipsum dolor ducimus vero veritatis officia nostrum corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nemo. Ducimus eos voluptate odio, eligendi pariatur dolores? Aut distinctio excepturi impedit dolores alias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae inventore nemo quas accusantium? Reprehenderit mollitia accusantium tenetur consequuntur quisquam soluta ipsa consequatur quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis voluptate necessitatibus nobis. Est eligendi recusandae architecto eius quod molestiae quasi natus aliquid</p>

                    <Button className="mt-4 bg-orange-500 hover:bg-orange-900 text-white font-semibold py-4 px-4 rounded transition duration-300">Read More</Button>
                </div>
                <div class='card2-section flex flex-col lg:flex-row lg:flex-wrap  gap-4  lg:w-[60%] p-4 justify-center '>
                    <div className='p-2 px-4 w-full lg:w-[45%] rounded-lg shadow-xl bg-orange-200'>
                        <h3 className='text-xl font-bold py-4'>Gyan ki Pathshala</h3>
                        <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum suscipit corrupti expedita! Rem ipsum quia amet ex aliquam dolore sint? Recusandae repudiandae voluptatibus quia architecto. Ad aliquam vero at repudiandae.</p>
                    </div>
                    <div className='p-2 px-4 w-full lg:w-[45%] rounded-lg shadow-xl bg-red-200'>
                        <h3 className='text-xl font-bold py-4'>Hunger Free</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas officia, quia facere libero dolore rerum praesentium similique enim sapiente eveniet, exercitationem ut eius laboriosam! Saepe cumque ad culpa debitis deleniti?</p>
                    </div>
                    <div className='p-2 px-4 w-full lg:w-[45%] rounded-lg shadow-xl bg-green-200'>
                        <h3 className='text-xl font-bold py-4'>Skill</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eaque, explicabo nobis deserunt odit ipsam voluptates impedit inventore esse ducimus nostrum dicta error, unde reiciendis soluta fugiat sed? Voluptas, deleniti?</p>
                    </div>
                    <div className='p-2 px-4 w-full lg:w-[45%] rounded-lg shadow-xl bg-violet-200'>
                        <h3 className='text-xl font-bold py-4'>Awareness</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus corporis dolore sit eveniet sunt totam doloribus ipsam aspernatur fugiat, dolores maxime eligendi quasi? Illo laudantium tempore quibusdam quas eligendi!</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;