import React from 'react'
import Link from 'next/link'
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import styles from "../../styles/utils.module.css"
// import styles from "../../app/styles/utils.module.css"
// import styles from "../../styles/utils.module.css"
const CallButton = () => {
    return (

        <Link href="tel:+91 9788888292 " target="_blank">
            <button className={`${styles.zoomoutbtn} z-40 p-2 md:p-4 fixed bottom-4 left-6 bg-blue-500 hover:bg-blue-800 text-white font-bold flex items-center rounded-full`}>
                <WifiCalling3Icon className='text-4xl' /> 
            </button>
        </Link>

    )
}

export default CallButton
