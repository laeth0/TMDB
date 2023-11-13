import Header from '../components/Header'
import { type NextPage } from 'next'
import SectionMoviesShow from '@/components/SectionHome/SectionMoviesShow'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <SectionMoviesShow title='Trending' sectionData={[{ title: "Today", url: "/trending/all/day?language=en-US" }, { title: "This Week", url: "/trending/all/week?language=en-US" }]} />
    </>
  )
}
export default Home
