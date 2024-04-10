import React from 'react'
// import AboutUs from './AboutUs'
import AboutUs from '@/pages/about/page'
import Navbar from '@/pages/header/Navbar'
import Content from '@/pages/content/page'
const About = () => {
    return (
        <div className='mt-5'>
            <div className='md:mt-0 mt-5 '>
            <Navbar />
            </div>
            <AboutUs />
            <Content />
        </div>
    )
}

export default About
