import styles from '../styles/Home.module.css'
import Starts from './Main/Starts'
import Main from './Main/Main'
import SignIn from './users/sign-in'
import SignUp from './users/sign-up'
import EmailConfirm from './users/email-confirm'
import FindId from './users/find-id'
import StorySub from './Story/StorySub'
import DiaryDetail from './Diary/DiaryDetail'
import DiaryMain from './Diary/DiaryMain'
import DiaryMood from './Diary/DiaryMood'


export default function Home() {

  return (
    <div className='h-full'>
      <Starts/>
      {/* <Main /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <EmailConfirm /> */}
      {/* <StorySub/> */}
      {/* <FindId /> */}
      {/* <DiaryMain/> */}
      {/* <DiaryDetail/> */}
      {/* <DiaryMood/> */}
    </div>
  )
}
