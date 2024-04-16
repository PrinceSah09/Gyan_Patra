import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button"

// import Button from "./utility/Button"
import Link from "next/link";
import Image from "next/image"; 


function Navbar() {
    return (
        <>
            {/* First Navbar */}
            <header className="bg-orange-400">
                <div className="flex justify-between max-w-screen-xl mx-6 md:mx-auto lg:mx-auto"><div className="image my-auto">
                    <Image
                        src={"/logo.png"}
                        height={10}
                        width={120}
                        className=""
                    />
                </div>
                    <div className="center"></div>
                    <div className="social-media flex text-2xl gap-2 text-orange-700 py-4">
                        <Link href={'/'} className="rounded-full bg-orange-200 px-2 py-2 hover:scale-110 duration-300"><FaXTwitter /></Link>
                        <Link href={'/'} className="rounded-full bg-orange-200 px-2 py-2 hover:scale-110 duration-300"><FaFacebookSquare /></Link>
                        <Link href={'/'} className="rounded-full bg-orange-200 px-2 py-2 hover:scale-110 duration-300"><FaLinkedin /></Link>
                        <Link href={'/'} className="rounded-full bg-orange-200 px-2 py-2 hover:scale-110 duration-300"><FaInstagram /></Link>
                    </div>
                </div>
            </header>

            {/* Second Navbar */}
            <header className="bg-orange-600 py-4 cursor-pointer ">
                <div className="flex justify-between mx-auto max-w-screen-xl">
                    <ul className="lg:flex  items-center space-x-4 text-white gap-4 text-3xl hidden">
                        <li className="text-lg font-semibold  hover:text-zinc-200 transition duration-300">HOME</li>
                        <li className="text-lg font-semibold hover:text-zinc-200 transition duration-300">ABOUT</li>
                        <li className="text-lg font-semibold hover:text-zinc-200 transition duration-300">MEDIA COVERAGE</li>
                        <li className="text-lg font-semibold hover:text-zinc-200 transition duration-300">GALLERY</li>
                        <li className="text-lg font-semibold hover:text-zinc-200 transition duration-300">EVENT</li>
                        <li className="text-lg font-semibold hover:text-zinc-200 transition duration-300">CONTRIBUTE</li>
                        <li className="text-lg font-semibold hover:text-zinc-200 transition duration-300">CONTACT US</li>
                    </ul>
                    {/* <div className="center"></div> */}
                    <div className="social-media flex items-center text-2xl gap-4">
                        <Button className="bg-orange-500 hover:bg-orange-900 text-white font-semibold py-4 px-4 rounded transition duration-300">DONATE</Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;  