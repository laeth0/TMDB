"use client"
import { FaSearch } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RiEnglishInput } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import * as Menubar from '@radix-ui/react-menubar';
import Image from 'next/image'
import Link from 'next/link'
import NavbarImage from '@/../public/NavbarImage.svg'
import { SignUpButton, SignInButton } from "@clerk/nextjs";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import SideBar from './SideBar'
import { useState } from "react";
import { useUser } from "@clerk/nextjs"; //# i can use it in client components

export default function Navbar() {
    const [openSideBar, setOpenSideBar] = useState(false)
    const handleOpenSideBar = () => setOpenSideBar(!openSideBar)
    const { user } = useUser(); //# i can use it in client components

    return (
        <>
            <header className="h-[7.5vh] bg-tmdbDarkBlue flex items-center  text-white">

                <div className="container hidden md:flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <Link href="/" aria-label="the is the header image and take you to main page">
                            <Image className="h-5 w-auto" src={NavbarImage} alt="the is the header image" />
                        </Link>
                        <Menubar.Root className="flex p-[3px] rounded-md shadow-[0_2px_10px]">
                            <Menubar.Menu>
                                <Menubar.Trigger className="py-2 px-3 select-none font-medium leading-none rounded text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                                    Movies
                                </Menubar.Trigger>

                                <Menubar.Portal>
                                    <Menubar.Content align="start" sideOffset={5} alignOffset={-3} className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]" >
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Popular
                                        </Menubar.Item>
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Now Playing
                                        </Menubar.Item>
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Upcoming
                                        </Menubar.Item>
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Top Rated
                                        </Menubar.Item>
                                    </Menubar.Content>
                                </Menubar.Portal>
                            </Menubar.Menu>

                            <Menubar.Menu>
                                <Menubar.Trigger className="py-2 px-3 select-none font-medium leading-none rounded text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                                    TV Shows
                                </Menubar.Trigger>

                                <Menubar.Portal>
                                    <Menubar.Content align="start" sideOffset={5} alignOffset={-3} className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]" >
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Popular
                                        </Menubar.Item>
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Airing Today
                                        </Menubar.Item>
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            On TV
                                        </Menubar.Item>
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Top Rated
                                        </Menubar.Item>
                                    </Menubar.Content>
                                </Menubar.Portal>
                            </Menubar.Menu>

                            <Menubar.Menu>
                                <Menubar.Trigger className="py-2 px-3 select-none font-medium leading-none rounded text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                                    People
                                </Menubar.Trigger>

                                <Menubar.Portal>
                                    <Menubar.Content align="start" sideOffset={5} alignOffset={-3} className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]" >
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Popular People
                                        </Menubar.Item>
                                    </Menubar.Content>
                                </Menubar.Portal>
                            </Menubar.Menu>

                            <Menubar.Menu>
                                <Menubar.Trigger className="py-2 px-3 select-none font-medium leading-none rounded text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                                    More
                                </Menubar.Trigger>

                                <Menubar.Portal>
                                    <Menubar.Content align="start" sideOffset={5} alignOffset={-3} className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]" >
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Discussion
                                        </Menubar.Item>
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Leaderboard
                                        </Menubar.Item>
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            Support
                                        </Menubar.Item>
                                        <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                            API
                                        </Menubar.Item>
                                    </Menubar.Content>
                                </Menubar.Portal>
                            </Menubar.Menu>

                        </Menubar.Root>
                    </div>

                    {/*//- end of first section */}
                    <div className="flex gap-8 justify-center items-center">
                        <Menubar.Root className="flex p-[3px] gap-8 px-6 items-center rounded-md shadow-[0_2px_10px]">
                            {/*//! Add Button */}
                            <Menubar.Menu>
                                <Menubar.Trigger className="select-none font-medium leading-none rounded text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                                    <AiOutlinePlus size={20} />
                                </Menubar.Trigger>
                                <Menubar.Portal>
                                    <Menubar.Content align="start" sideOffset={5} alignOffset={-3} className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]" >
                                        <SignedIn>
                                            <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Add New Movie
                                            </Menubar.Item>
                                            <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Add New TV Show
                                            </Menubar.Item>
                                        </SignedIn>
                                        <SignedOut>
                                            <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                                                Cant find a movie or TV show? Login to create it.
                                            </Menubar.Item>
                                        </SignedOut>

                                    </Menubar.Content>
                                </Menubar.Portal>
                            </Menubar.Menu>
                            {/*//! langusge button */}
                            <RiEnglishInput size={20} />
                            {/*//! login and logout */}
                            <SignedIn>
                                <BsFillBellFill size={20} />
                                <UserButton afterSignOutUrl="/sign-up" userProfileMode="navigation" userProfileUrl={`/profile/${user?.fullName}`} />
                            </SignedIn>
                            <SignedOut>
                                <SignInButton>
                                    <button>login</button>
                                </SignInButton>
                                <SignUpButton>{/*if i use mode="modal" mean i want the component open like a modal or dialog*/}
                                    <button> join TMDB </button>
                                </SignUpButton>
                            </SignedOut>
                            {/*//! search button */}
                            <FaSearch className="text-[#01B4E4]" size={20} />

                        </Menubar.Root>
                    </div>
                </div>
                {/*//- end of div container */}


                <div className="flex md:hidden items-center justify-around flex-1">
                    <GiHamburgerMenu size={20} onClick={handleOpenSideBar} className="cursor-pointer" aria-expanded={openSideBar ? "true" : "false"} />
                    <Link href="/" aria-label="the is the header image and take you to main page" >
                        <Image className="h-5 w-auto" src={NavbarImage} alt="the is the header image" />
                    </Link>
                    <div className="flex gap-6 items-center">
                        <UserButton afterSignOutUrl="/sign-up" userProfileMode="navigation" userProfileUrl={`/profile/${user?.fullName}`} />
                        <FaSearch className="text-[#01B4E4]" size={20} />
                    </div>
                </div>

            </header>
            <SideBar openSideBar={openSideBar} handleOpenSideBar={handleOpenSideBar} />
        </>
    )
}
