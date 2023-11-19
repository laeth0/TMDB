"use client"
import Circle from './Circle'
import DropDownMenuForFilmImage from './DropDownMenuForFilmImage';
import { Base_URL_for_TMDB_Images, general_options_for_TMDB_API, Base_URL_for_TMDB_API } from '@/Shared/api';
import Image from 'next/image'
import { MovieListType } from '@/Shared/Types'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Carusel({ Specific_URL }: { Specific_URL: string }) {
    // const res = await fetch(`${Base_URL_for_TMDB_API}/${Specific_URL}`, general_options_for_TMDB_API);
    // const data: MovieListType = await res.json();
    const { ref, inView, entry } = useInView({ triggerOnce: true });

    const [data, setData] = useState<MovieListType | null>();

    useEffect(() => {
        const fetchData = () => {
            fetch(`${Base_URL_for_TMDB_API}${Specific_URL}`, general_options_for_TMDB_API)
                .then(res => res.json())
                .then(data => setData(data))
                .catch(err => console.log(err))
        }
        
        setData(null)
        if (inView)
            fetchData();
    }, [Specific_URL, inView])

    return (
        <ul ref={ref} className="flex h-[400px] overflow-x-scroll overflow-y-hidden gap-6 bg-CaruselImage bg-[center_105px] bg-no-repeat">
            {data ?
                data?.results.map(movie =>
                    <li className="animate-ShowElements relative flex-[0_0_150px] gap-3 flex flex-col" key={movie.id}>
                        <Image className='h-56 w-[150px] select-none rounded-imageBorderRadius' width={150} height={224} src={`${Base_URL_for_TMDB_Images}${movie.poster_path}`} alt="this is film image" />
                        <div className='flex flex-col items-center'>
                            <h2 className='text-black font-bold w-4/5'>{movie.title || "Beacon 23"}</h2>
                            <p className='text-base text-[rgba(0,0,0,.6)] w-4/5'>{movie.release_date || "2023-09-15"}</p>
                        </div>
                        <Circle vote_average={movie.vote_average} />
                        <DropDownMenuForFilmImage />
                    </li>
                ) :
                <>
                    <div className="flex-[0_0_150px] rounded-md ">
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="bg-[#F2F2F2] h-56 w-[150px] rounded-imageBorderRadius grid place-items-center">
                                <Image className='select-none' src="/skelaton.svg" width={50} height={24} alt="skelaton svg" />
                            </div>
                            <div className='bg-[#F2F2F2] w-24 h-4 mx-auto'></div>
                        </div>
                    </div>
                    <div className="flex-[0_0_150px] rounded-md ">
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="bg-[#F2F2F2] h-56 w-[150px] rounded-imageBorderRadius grid place-items-center">
                                <Image className='select-none' src="/skelaton.svg" width={50} height={24} alt="skelaton svg" />
                            </div>
                            <div className='bg-[#F2F2F2] w-24 h-4 mx-auto'></div>
                        </div>
                    </div>
                    <div className="flex-[0_0_150px] rounded-md ">
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="bg-[#F2F2F2] h-56 w-[150px] rounded-imageBorderRadius grid place-items-center">
                                <Image className='select-none' src="/skelaton.svg" width={50} height={24} alt="skelaton svg" />
                            </div>
                            <div className='bg-[#F2F2F2] w-24 h-4 mx-auto'></div>
                        </div>
                    </div>
                    <div className="flex-[0_0_150px] rounded-md ">
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="bg-[#F2F2F2] h-56 w-[150px] rounded-imageBorderRadius grid place-items-center">
                                <Image className='select-none' src="/skelaton.svg" width={50} height={24} alt="skelaton svg" />
                            </div>
                            <div className='bg-[#F2F2F2] w-24 h-4 mx-auto'></div>
                        </div>
                    </div>
                    <div className="flex-[0_0_150px] rounded-md ">
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="bg-[#F2F2F2] h-56 w-[150px] rounded-imageBorderRadius grid place-items-center">
                                <Image className='select-none' src="/skelaton.svg" width={50} height={24} alt="skelaton svg" />
                            </div>
                            <div className='bg-[#F2F2F2] w-24 h-4 mx-auto'></div>
                        </div>
                    </div>
                    <div className="flex-[0_0_150px] rounded-md ">
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="bg-[#F2F2F2] h-56 w-[150px] rounded-imageBorderRadius grid place-items-center">
                                <Image className='select-none' src="/skelaton.svg" width={50} height={24} alt="skelaton svg" />
                            </div>
                            <div className='bg-[#F2F2F2] w-24 h-4 mx-auto'></div>
                        </div>
                    </div>
                    <div className="flex-[0_0_150px] rounded-md ">
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="bg-[#F2F2F2] h-56 w-[150px] rounded-imageBorderRadius grid place-items-center">
                                <Image className='select-none' src="/skelaton.svg" width={50} height={24} alt="skelaton svg" />
                            </div>
                            <div className='bg-[#F2F2F2] w-24 h-4 mx-auto'></div>
                        </div>
                    </div>
                    <div className="flex-[0_0_150px] rounded-md ">
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="bg-[#F2F2F2] h-56 w-[150px] rounded-imageBorderRadius grid place-items-center">
                                <Image className='select-none' src="/skelaton.svg" width={50} height={24} alt="skelaton svg" />
                            </div>
                            <div className='bg-[#F2F2F2] w-24 h-4 mx-auto'></div>
                        </div>
                    </div>
                    <div className="flex-[0_0_150px] rounded-md ">
                        <div className="animate-pulse flex flex-col gap-4">
                            <div className="bg-[#F2F2F2] h-56 w-[150px] rounded-imageBorderRadius grid place-items-center">
                                <Image className='select-none' src="/skelaton.svg" width={50} height={24} alt="skelaton svg" />
                            </div>
                            <div className='bg-[#F2F2F2] w-24 h-4 mx-auto'></div>
                        </div>
                    </div>
                </>
            }
        </ul>
    )
}

