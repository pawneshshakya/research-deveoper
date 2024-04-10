import React from 'react'
import AboutCard from './AboutCard '
import aboutImage from "../../assets/images/about.jpg"
const AboutUs = () => {
  return (
      <div className='md:mt-16 mt-10' style={{ overflowY: "hidden" }}>
            <AboutCard title="Welcome to @ResearchDevelopers" desc="We personally understand how much your results matters to you because everyone who work in our team was once a university student. We know about the extreme pressure you feel for getting better grades with quality level of content, but doing this being a working professional is really a difficult task. Our vision is to help and bring these scholars out of these tough situations by providing them a complete package of the content as per their need without compromising in terms of quality."
                image={aboutImage}
                style={{ overflowY: "hidden" }} />
        </div>
  )
}

export default AboutUs
