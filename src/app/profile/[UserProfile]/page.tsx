import { UserProfile } from "@clerk/nextjs";
import { type NextPage } from 'next'

const Profile: NextPage = () => {
    return (
        <div className="flex justify-center items-center my-16 min-h-screen">
            <UserProfile appearance={{ variables: { colorPrimary: "rgb(3, 37, 65)" } }} />
        </div>
    )
}
export default Profile
