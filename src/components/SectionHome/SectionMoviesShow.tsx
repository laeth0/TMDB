"use client"
import dynamic from 'next/dynamic';
import { useState, useEffect } from "react"
import Carusel from "./Carusel"
const ToggleGroup = dynamic(() => import("./ToggleGroup"));
const SelectMenu = dynamic(() => import("./SelectMenu"));

type SectionMoviesShowProps = {
    title: string,
    sectionData: Array<{ title: string, url: string }>
}

export default function SectionMoviesShow({ title, sectionData }: SectionMoviesShowProps) {
    const [selected, setSelected] = useState<string>(sectionData[0].title)
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
        <section>
            <div className="container flex flex-col gap-8">
                <div className="flex gap-3 px-6 items-center">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    {isSmallScreen ?
                        <SelectMenu dataSelect={sectionData.map(ele => ele.title)} setSelected={setSelected} /> :
                        <ToggleGroup dataSelect={sectionData.map(ele => ele.title)} setSelected={setSelected} /> 
                    }
                </div>
                <Carusel Specific_URL={sectionData.find(ele => ele.title === selected)?.url || ""} />
            </div>
        </section>
    )
}
