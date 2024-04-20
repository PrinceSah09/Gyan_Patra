import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";
import Gallery from '@/components/Gallery';

export default function Home() {
    return (
        <>
            <Navbar />
            <Gallery />
            <Footer />
        </>
    )
}
