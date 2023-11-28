"use client"
import { FC, useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const SideBar = dynamic(() => import('./SideBar'));
const SmallScreenNavbar = dynamic(() => import("./SmallScreenNavbar"));
const BigScreenNavbar = dynamic(() => import("./BigScreenNavbar"));

const Navbar:FC=() =>{
    const [openSideBar, setOpenSideBar] = useState<boolean>(false)
    const handleOpenSideBar = () => setOpenSideBar(!openSideBar)
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        // Update isSmallScreen state when the window is resized
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);

        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Call handleResize to set the initial state
        handleResize();

        // Remove the event listener on cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className="h-[7.5vh] bg-tmdbDarkBlue flex items-center  text-white">
                {isSmallScreen ? <SmallScreenNavbar handleOpenSideBar={handleOpenSideBar} /> : <BigScreenNavbar />}
            </header>
            {isSmallScreen ? <SideBar openSideBar={openSideBar} handleOpenSideBar={handleOpenSideBar} /> :null}
        </>
    )
}

export default Navbar;