import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <header className="bg-orange-600">
            <div className="flex justify-between mx-auto max-w-screen-xl">
                <div className="image my-auto">
                    <Image
                        src={"/logo.png"}
                        height={120}
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
    )
}

export default Navbar;  