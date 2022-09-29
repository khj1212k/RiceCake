import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Starts from '../components/Layout/Starts'
import Header from '../components/Layout/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Starts/>
    </div>
  )
}
