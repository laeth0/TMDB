import { SignUp } from "@clerk/nextjs";
import { type NextPage } from 'next'

const SignUpPage: NextPage = () => {
    return (
        <div className="flex justify-center items-center py-20">
            <SignUp appearance={{
                variables: {
                    colorPrimary: "rgb(3, 37, 65)"
                },
                elements: {
                    footerActionLink: "font-bold ",
                }
            }} />
        </div>
    );
}
export default SignUpPage