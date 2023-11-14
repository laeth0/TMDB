"use client"
import { BsFillBellFill } from "react-icons/bs";
import { UserButton} from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs"; //# i can use it in client components

export default function UserButtonAndBill() {
    const { user } = useUser(); //# i can use it in client components

    return (
        <>
            <BsFillBellFill size={20} />
            <UserButton afterSignOutUrl="/sign-up" userProfileMode="navigation" userProfileUrl={`/profile/${user?.fullName}`} />
        </>
    )
}
