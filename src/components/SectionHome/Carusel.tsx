"use client"
import dynamic from 'next/dynamic';
import { general_options_for_TMDB_API, Base_URL_for_TMDB_API, Base_URL_for_TMDB_Images } from '@/Shared/api';
import { MovieListType } from '@/Shared/Types'
import Circle from './Circle'
import DropDownMenuForFilmImage from './DropDownMenuForFilmImage';
import { useEffect, useState } from 'react';
const Image = dynamic(() => import('next/image'));

export default function Carusel({ Specific_URL }: { Specific_URL: string }) {
    //! const res = await fetch(`${Base_URL_for_TMDB_API}/${Specific_URL}`, general_options_for_TMDB_API);
    //! const data: MovieListType = await res.json();
    //! this way i can fetch data in server side component 

    const [data, setData] = useState<MovieListType>()
    const fetchData = () => {
        fetch(`${Base_URL_for_TMDB_API}/${Specific_URL}`, general_options_for_TMDB_API)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchData()
    }, [Specific_URL])

    return (
        <ul className='flex h-[380px] bg-no-repeat overflow-x-scroll overflow-y-hidden gap-6 bg-CaruselImage bg-[center_105px]'>
            {data?.results.map(movie =>
                <li className="relative flex-[0_0_150px] bg-red gap-3 flex flex-col" key={movie.id}>
                    <Image className='h-56 w-[150px] rounded-imageBorderRadius' width={150} height={225} src={`${Base_URL_for_TMDB_Images}${movie.poster_path}`} alt="this is film image" />
                    <div className='flex flex-col items-center'>
                        <h2 className='text-black font-bold w-4/5'>{movie.title}</h2>
                        <p className='text-base text-[rgba(0,0,0,.6)] w-4/5'>{movie.release_date}</p>
                    </div>
                    <Circle vote_average={movie.vote_average} />
                    <DropDownMenuForFilmImage />
                </li>
            )}
        </ul>
    )
}

