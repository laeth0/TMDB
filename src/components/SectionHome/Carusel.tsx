"use client"
import Circle from './Circle'
import DropDownMenuForFilmImage from './DropDownMenuForFilmImage';
import { Base_URL_for_TMDB_Images, general_options_for_TMDB_API, Base_URL_for_TMDB_API } from '@/Shared/api';
import Image from 'next/image'
import { MovieListType } from '@/Shared/Types'
import { useEffect, useState } from 'react';

export default function Carusel({ Specific_URL }: { Specific_URL: string }) {
    // const res = await fetch(`${Base_URL_for_TMDB_API}/${Specific_URL}`, general_options_for_TMDB_API);
    // const data: MovieListType = await res.json();

    const [data, setData] = useState<MovieListType | null>();
    const fetchData = () => {
        fetch(`${Base_URL_for_TMDB_API}${Specific_URL}`, general_options_for_TMDB_API)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        setData(null)
        fetchData();

    }, [Specific_URL])

    return (
        <ul className="flex h-[400px] overflow-x-scroll overflow-y-hidden gap-6 bg-CaruselImage bg-[center_105px] bg-no-repeat">
            {
                data?.results.map(movie =>
                    <li className="animate-ShowElements relative flex-[0_0_150px] gap-3 flex flex-col" key={movie.id}>
                        <Image className='h-56 w-[150px] select-none rounded-imageBorderRadius' width={150} height={224} src={`${Base_URL_for_TMDB_Images}${movie.poster_path}`} alt="this is film image" />
                        <div className='flex flex-col items-center'>
                            <h2 className='text-black font-bold w-4/5'>{movie.title || "Beacon 23"}</h2>
                            <p className='text-base text-[rgba(0,0,0,.6)] w-4/5'>{movie.release_date || "2023-09-15"}</p>
                        </div>
                        <Circle vote_average={movie.vote_average} />
                        <DropDownMenuForFilmImage />
                    </li>)
            }
        </ul>
    )
}

