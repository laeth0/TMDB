"use client"

import { useState } from "react"
import Carusel from "./Carusel"
import SelectMenu from "./SelectMenu"

type SectionMoviesShowProps = {
    title: string,
    sectionData: Array<{title: string,url: string}>
}

export default function SectionMoviesShow({title,sectionData}: SectionMoviesShowProps) {
    const [selected, setSelected] = useState<string>(sectionData[0].title)
    let Specific_URL: { title: string, url: string } =sectionData.find(ele => ele.title === selected);
    return (
        <section>
            <div className="container flex flex-col gap-8">
                <div className="flex gap-3 px-6">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <SelectMenu dataSelect={sectionData.map(ele => ele.title)} setSelected={setSelected} />
                </div>
                <Carusel Specific_URL={Specific_URL?.url} />
            </div>
        </section>
    )
}
