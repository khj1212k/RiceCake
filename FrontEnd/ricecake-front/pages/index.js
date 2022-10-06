import styles from '../styles/Home.module.css'
import React from 'react'
import Starts from './Main/Starts'


export default function Home() {
  const [darkToggle, setDarkToggle] = React.useState(false)

  return (
    <div className='h-full'>
      <Starts/>
    </div>
  )
}
