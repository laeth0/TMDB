import FooterImage from '@/../public/FooterImage.svg'
import Image from 'next/image'
import Link from 'next/link'
// import { useUser } from "@clerk/nextjs"; //# i can use it in client components
import { currentUser } from '@clerk/nextjs';//# i can use it in server components and this very strong feature


export default async function Footer() {
    // const { user } = useUser(); //# i can use it in client components
    const user = await currentUser();

    return (
        <footer className=" py-10 flex flex-col px-10 items-center sm:justify-center sm:items-start sm:flex-row  bg-tmdbDarkBlue text-white gap-8">
            <div className="flex flex-col items-center gap-6">
                <Image
                    src={FooterImage}
                    className="w-36 hidden sm:block"
                    alt="this is the footer image"
                />
                <Link className='w-fit bg-white rounded-md py-2  px-7 text-tmdbLightBlue min-w-max font-bold' href="/"> {user?.id ? `Hi ${user?.firstName}` : "Join the Community"} </Link>
            </div>
            <div>
                <h3 className="text-xl font-bold">THE BASICS</h3>
                <ul>
                    <li>About TMDB</li>
                    <li> Contact Us</li>
                    <li>Support Forums</li>
                    <li>API</li>
                    <li>System Status</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">GET INVOLVED</h3>
                <ul>
                    <li>Contribution Bible</li>
                    <li> Add New Movie</li>
                    <li>Add New TV Show</li>
                </ul>

            </div>
            <div>
                <h3 className="text-xl font-bold">COMMUNITY</h3>
                <ul>
                    <li>Guidelines</li>
                    <li> Discussions</li>
                    <li>Leaderboard</li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">LEGAL</h3>
                <ul>
                    <li>Terms of Use</li>
                    <li> API Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>DMCA Policy</li>
                </ul>
            </div>
        </footer>
    )
}
