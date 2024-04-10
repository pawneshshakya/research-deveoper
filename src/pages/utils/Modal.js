import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import pic1 from "../../assets/images/testi01.jpg"
const Modal = () => {
  return (
    <div>
        <div className='fixed inset-0 flex justify-start items-end'>
      <div className='text-black mb-48   ml-16 flex flex-col gap-5'>
          <div className='p-4 rounded-xl'>
              <div className="max-w-7xl mx-auto">
                <div className="relative group ">
                  <div className="relative p-2 bg-green-900 ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-6 rounded-xl rounded-b-none">
                    <div className=' bg-white rounded-full w-16'>
                        <Image src={pic1} alt="" className='rounded-full' /></div>
                    <div><h2 className='text-white font-semibold text-xl pr-4 '>Research Developers</h2><p className='text-white py-2 text-[14px]'>Typically replies instantly</p></div>
                  </div>
                  <div className="relative p-5 bg-gray-200 ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-6">
                  
                    <div className="relative inline-block p-3 bg-white text-gray-800 rounded-lg pr-7">
                      <div className="absolute top-0.2 -left-1 w-6 h-6 bg-white rotate-45 "></div>
                      <h1  className='text-gray-900 text-[14px] pl-3 p-2'>Research Developers</h1>
                      <p className='text-gray-800 text-[16px] pl-3 '>Hello</p>
                      <p className='text-gray-800 text-[16px] pl-3 pt-2'>How can I help you?</p>                    
                      
                      <p className='text-gray-800 text-[12px] pt-2 flex justify-end items-end'>16:31</p>                    
                    </div>
                    
                  </div>
                  <div className="flex justify-center items-center relative p-5 bg-white ring-1 ring-gray-900/5 leading-none items-top space-x-6 rounded-xl shadow-md rounded-t-none">
                    <Link href="https://api.whatsapp.com/send/?phone=919788888292" target='_blank' className="bg-green-700 text-white p-2 flex justify-center items-center w-full rounded-xl">
                        <WhatsAppIcon /> &nbsp; Start Chat</Link>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
    
    </div>
  )
}

export default Modal
