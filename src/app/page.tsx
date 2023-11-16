import Header from '../components/Header'
import { type NextPage } from 'next'
import SectionMoviesShow from '@/components/SectionHome/SectionMoviesShow'
import LeaderboardSection from '@/components/LeaderboardSection'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <SectionMoviesShow title='Trending' sectionData={[
        { title: "Today", url: "/trending/all/day?language=en-US" },
        { title: "This Week", url: "/trending/all/week?language=en-US" }]} />
      <SectionMoviesShow title='Latest Trailers' sectionData={[
        { title: "Popular", url: "/movie/popular?language=en-US&page=1" },
        { title: "Streaming", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc" },
        { title: "On TV", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc" },
        { title: "For Rent", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc" },
        { title: "In Theaters", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc" }]} />
      <SectionMoviesShow title="What's Popular" sectionData={[
        { title: "Streaming", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc" },
        { title: "On TV", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=6&sort_by=popularity.desc" },
        { title: "For Rent", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=7&sort_by=popularity.desc" },
        { title: "In Theaters", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=8&sort_by=popularity.desc" }]} />
      <SectionMoviesShow title="Free To Watch" sectionData={[
        { title: "Movies", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=9&sort_by=popularity.desc" },
        { title: "TV", url: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=10&sort_by=popularity.desc" }]} />
      <LeaderboardSection />
    </>
  )
}
export default Home
