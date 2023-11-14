
import { SignUpButton, SignInButton } from "@clerk/nextjs";

export default function SignButtons() {
    return (
        <>
            <SignInButton>
                <button>login</button>
            </SignInButton>
            <SignUpButton>{/*if i use mode="modal" mean i want the component open like a modal or dialog*/}
                <button> join TMDB </button>
            </SignUpButton>
        </>
    )
}
