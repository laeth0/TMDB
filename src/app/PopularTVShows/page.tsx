"use client"
import { Base_URL_for_TMDB_API, general_options_for_TMDB_API, Base_URL_for_TMDB_Images } from '@/Shared/api'
import DropDownMenuForFilmImage from '@/components/SectionHome/DropDownMenuForFilmImage'
import Image from 'next/image'
import { PopularTVList, popular } from '@/Shared/Types'
import ReactCircularProgressbar from '@/components/reactCircularProgressbar'
import { useEffect, useState } from 'react'
import { type NextPage } from 'next'
import InfiniteScroll from 'react-infinite-scroll-component';


const People: NextPage = () => {
    const [data, setData] = useState<popular[]>([])
    const [count, setCount] = useState<number>(1)

    useEffect(() => {
        function getData() {
            fetch(`${Base_URL_for_TMDB_API}/tv/popular?language=en-US&page=${count}`, general_options_for_TMDB_API)
                .then(res => res.json())
                .then(data => { setData(data?.results); setCount(prev => prev + 1) })
                .catch(err => console.log(err))
        }
        getData()
    }, [])

    const FetchNewData = () => {
        fetch(`${Base_URL_for_TMDB_API}/tv/popular?language=en-US&page=${count}`, general_options_for_TMDB_API)
            .then(res => res.json())
            .then((newData: PopularTVList) => { setData([...data, ...newData.results]); setCount(prev => prev + 1) })
            .catch(err => console.log(err))
    }

    return (
        <section>
            <div className="container flex flex-col gap-12 my-10">
                <h2 className='text-3xl font-semibold'>Popular TV Shows</h2>

                <InfiniteScroll
                    dataLength={data.length}
                    next={FetchNewData}
                    hasMore={count < 32}
                    loader={
                        <div className='mx-auto '>
                            <ReactCircularProgressbar value={50} text="load" styles={{}} className="w-14 h-14 my-6 " />
                        </div>}
                    endMessage={<p className='text-center my-8 font-bold text-xl'>Yay! You have seen it all</p>}
                >
                    <ul className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8'>

                        {
                            data?.map((movie, index) =>
                                <li className="relative  bg-red gap-3 flex flex-col w-full h-full" key={index}>
                                    <Image className='h-auto w-auto rounded-imageBorderRadius select-none cursor-pointer flex-1' priority width={150} height={224}  src={`${Base_URL_for_TMDB_Images}${movie.poster_path}`} alt="this is film image" />
                                    <div className='grid items-center justify-items-center'>
                                        <h2 className='text-black font-bold cursor-pointer'>{movie.name || "Beacon 23"}</h2>
                                        <p className='text-base text-[rgba(0,0,0,.6)]'>{movie.first_air_date || "2023-09-15"}</p>
                                    </div>
                                    <div className='absolute top-2 left-2 w-10 h-10' >
                                        <ReactCircularProgressbar value={Math.floor(movie?.vote_average * 10)} text={`${Math.floor(movie?.vote_average * 10)}`} styles={{ textSize: '2.3rem', pathColor: `#21CB77`, trailColor: "#204529", textColor: '#FFFFFF' }} className="bg-[#000000] rounded-full" />
                                    </div>
                                    <DropDownMenuForFilmImage />
                                </li>
                            )
                        }
                    </ul>
                </InfiniteScroll>
            </div>
        </section>
    );

}

export default People;
