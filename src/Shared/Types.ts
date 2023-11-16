type MovieType = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
export type MovieListType = {
    page: number,
    results: MovieType[],
    total_pages: number,
    total_results: number 
}
//---------------------------------------------------------------------------------------------------

export type popular={
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    first_air_date: string,
    name: string,
    vote_average: number,
    vote_count: number
}

export type PopularTVList={
    page: number,
    results: popular[],
    total_pages: number,
    total_results: number,
}
