"use client"
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'
import Link from 'next/link'
import NavbarImage from '@/../public/NavbarImage.svg'
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs"; //# i can use it in client components

export default function SmallScreenNavbar({ openSideBar, handleOpenSideBar }: { openSideBar: boolean; handleOpenSideBar:Function}) {
    const { user } = useUser(); //# i can use it in client components

    return (
        <div className="flex items-center justify-around flex-1">
            <GiHamburgerMenu size={20} onClick={handleOpenSideBar} className="cursor-pointer" aria-expanded={openSideBar ? "true" : "false"} />
            <Link href="/" aria-label="the is the header image and take you to main page" >
                <Image className="h-5 w-auto" src={NavbarImage} alt="the is the header image" />
            </Link>
            <div className="flex gap-6 items-center">
                <UserButton afterSignOutUrl="/sign-up" userProfileMode="navigation" userProfileUrl={`/profile/${user?.fullName}`} />
                <FaSearch className="text-[#01B4E4]" size={20} />
            </div>
        </div>
    )
}
