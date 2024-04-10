import React from 'react'

import ContentCard from './ContentCard'
import contactImage from "../../assets/images/contentCol.jpg"
const  Content = () => {
  return (
    <div style={{ overflowY: "hidden" }}>
            <ContentCard title="Who are Research Developers?" desc="We always emphasize the guidelines of the format and design &amp; stick to them with our prime consideration. “Research Developers” is a registered company with a head office in Noida having many decades of experience to help students achieving the results they need by providing academic work that is custom designed, original &amp; plagiarism-free. Unlike many other Ph.D. assistance companies out there in the country, in a nutshell our team believe in a basic theory of “Sincerity, Dedication, Discipline &amp; Hard work” with a commitment of on time delivery with “A” class content."
            //  image="./assets/images/contentCol.jpg"
            image ={contactImage} />
        </div>
  )
}

export default Content
