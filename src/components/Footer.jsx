import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900/90 text-white w-full ">
                <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
                    <div className="md:flex md:justify-between">


                        <div className="mb-6 md:mb-0">
                            <a href="/" className="flex items-center">
                                <span className="self-center text-2xl    dark:text-white">
                                    <Image
                                        src="/logo.png"
                                        alt="logo"
                                        width={150}
                                        height={150}
                                    />
                                    <ul className="flex mt-9 ml-4">
                                        <li className="pr-4">
                                            <FaFacebook className="text-white " />
                                        </li>
                                        <li className="pr-4">
                                            <FaInstagram className="text-white " />
                                        </li>
                                        <li className="pr-4">
                                            <FaXTwitter className="text-white " />
                                        </li>
                                        <li className="pr-4">
                                            <FaLinkedin className="text-white " />
                                        </li>
                                    </ul>
                                </span>
                            </a>
                        </div>
                        <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
                            <div>
                                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                    <li className="">
                                        <a href="#" className="hover:underline">About Us</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline">Sitemap</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline">Credits</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline">Help Center</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline">Community Guidelines</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                    <li >
                                        <a href="#" className="hover:underline ">Accessibility</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline ">Mobile</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline ">Marketing</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline ">Advertising</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline ">Report Issue</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="text-gray-400 dark:text-gray-400 font-medium">
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                    <li className="mt-2">
                                        <a href="#" className="hover:underline">Trust &amp; Safety</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="flex flex-col sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            All trademarks are the property of their respective owners.
                        </span>
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">All Rights Reserved © 2024 Gyanpatra Tech Pvt. Ltd
                        </span>
                    </div> */}
                </div>
            </footer>
        </div>
    );
}

export default Footer;