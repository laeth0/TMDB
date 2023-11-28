import { SignIn } from "@clerk/nextjs";
import { type NextPage } from 'next'

const SignInPage: NextPage = () => {
    return (
        <div className="flex justify-center items-center py-20 h-screen">
            <SignIn appearance={{
                variables: {
                    colorPrimary: "rgb(3, 37, 65)"
                },
                elements: {
                    footerActionLink: "font-bold ",
                }
            }}/>

        </div>
        );
}
export default SignInPage