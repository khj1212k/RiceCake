import styles from '../styles/Home.module.css'
import Header from '../components/Layout/Header'
import Starts from '../components/Layout/Starts'
import Main from '../components/Layout/Main'
import SotryList from '../components/StoryMode/SotryList'
import Footer from '../components/Layout/Footer'

export default function Home() {
  return (
    <>
      <div className="border-2 border-blue-700 h-full flex-col justify-between">
          {/* <Header /> */}
          <Starts />
          {/* <Footer /> */}
      </div>
    </>
  )
}
