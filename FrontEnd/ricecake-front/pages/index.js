import styles from "../styles/Home.module.css";
import Header from "../components/Layout/Header";
import Starts from "../components/Layout/Starts";
import Main from "../components/Layout/Main";
import SotryList from "../components/StoryMode/SotryList";
import Footer from "../components/Layout/Footer";
import { useAtom } from "jotai";

export default function Home() {
  return (
    <>
      <div className="flex-col justify-between border-4 border-blue-700 max-h-96">
        {/* <Header /> */}
        <Main />
        {/* <Starts/> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
