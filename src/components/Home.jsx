import React from 'react'
import { AiOutlineWhatsApp ,AiOutlineInstagram,AiFillAndroid} from 'react-icons/ai';



const Home = () => {
  return (
    <div>

      <div className=' h-screen bg-black flex items-center justify-center ' >
        <div className=' flex text-white'>
          <div className=''>
            <div className=' text-[50px] ml-5 md:text-8xl sm:text-5xl font-[700]  inline-block' >Lazim Hostel</div>
            <div className=' md:ml-32  ml-12 sm:ml-6 sm:mt-3 texl-lg sm:text-xl'> "There is only one boss. the Guest."</div>
            <div className='   mt-6 text-2xl flex justify-center'>
              <a className=' px-3' href="https://api.whatsapp.com/message/O247N4BWIKF3F1?autoload=1&app_absent=0">
                <AiOutlineWhatsApp />
              </a>
              <a className='px-3' href="https://www.instagram.com/lazi.m39/">
                <AiOutlineInstagram />
              </a>
              {/* <a className='px-3' href="https://play.google.com/">
              
                <AiFillAndroid />
              </a> */}
            </div>
          </div>
          <div className=' rounded md:h-40 ml-10 w-[5px]  h-28 bg-white'></div>

        </div>
       
      </div>
     

    </div>
  )
}

export default Home