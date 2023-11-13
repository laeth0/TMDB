"use client"
import { Root, Field, Label, Control, Submit } from '@radix-ui/react-form';

export default function Header() {

    return (
        <section>
            <div className="container flex flex-col px-10 items-center justify-evenly bg-headerImage bg-cover bg-no-repeat min-h-[300px] max-h-[360px] h-[calc(100vh/2.5)]">
                <div className="w-full text-white" >
                    <h2 className="text-5xl font-bold">Welcome.</h2>
                    <h3 className="text-3xl font-semibold">Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <Root className="w-full" action="/search" method="get" acceptCharset="utf-8" >
                    <Field name="search" className='flex w-full relative' >
                        <Label htmlFor="" className='flex justify-center items-center flex-1'>
                            <Control asChild>
                                <input className="py-2.5 px-6 w-full outline-none rounded-full tracking-wide text-gray-600 placeholder:text-gray-600 " type="text" placeholder='Search for a movie......' />
                            </Control>
                        </Label>
                        <Submit asChild>
                            <input className="absolute right-0 py-2.5 px-6  bg-LighterGreen-to-LightBlue font-bold rounded-full text-white" type="submit" value="Search" />
                        </Submit>
                    </Field>
                </Root>
            </div>
        </section >
    )
}
