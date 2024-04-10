import React from 'react' 
import Contact from "../../pages/contact/page"
import Navbar from '@/pages/header/Navbar'

const Page = () => {
  return (
    <div>
      <div className='md:mt-5 mt-5 '>
        <Navbar/>
      </div>     
      <Contact/>
    </div>
  )
}

export default Page
