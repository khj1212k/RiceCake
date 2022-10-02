import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Starts from '../components/Layout/Starts'
import Header from '../components/Layout/Header'
import SignIn from './users/sign-in'
import SignUp from './users/sign-up'
import EmailConfirm from './users/email-confirm'
import FindId from './users/find-id'

export default function Home() {
  return (
    <div className='h-full'>
      <Header />
      {/* <Starts/> */}
      <SignIn />
      {/* <SignUp /> */}
      {/* <EmailConfirm /> */}
      {/* <FindId /> */}
    </div>
  )
}
