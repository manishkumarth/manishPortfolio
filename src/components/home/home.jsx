import Contact from '../contact/contact';
import Course_container from '../course_container/course_container';

import Projectcardall from '../projectcard/projectcardall';
import Profile from '../profile/profile';

function Home() {


  return (
    <>
      <div
      >

        <div >
          <Profile />
        </div>
        <div className='text-center container rounded-4' >
          <h3 className='text-center shadow'>Project section </h3>
        </div>

        <div className='projectcard-home-page mt-5 '>
          {/* project center  */}
          <Projectcardall />
        </div>
      

        {/* <div className=''> */}
        <div className=''>
          <Course_container />
        </div>


        <div className='mt-5 contact-home' style={{ width: "100%", height: "auto" }}> <Contact /> </div>
      </div>
    </>
  )
}

export default Home

