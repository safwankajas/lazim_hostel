import React from 'react'

const Booking = () => {
  return (
    <div className='  h-[70vh] lg:flex lg:justify-center lg:items-center bg-black text-white '>
        <div className=' bg-neutral-900   lg:rounded-md lg:w-[880px] lg:h-[300px]'>

        <div className='  p-5 lg:mt-10 lg:flex  lg:justify-between' >
            <div className='lg:w-[50%]'>
                <div>
                    <p className=' lg:mt-0 mt-2  text-sm  text-neutral-500 font-[500]'>Check Availability</p>
                    <p className='mt-2 text-3xl font-bold'>Hostels in Kochi</p>
                    <p className='pt-2'>Enter your dates and choose from 3 hostels and other place to stay!</p>
                </div>
            </div>
            <div className='lg:w-[50%] :mt-2 lg:-mt-5 lg:ml-14 '>
               <div className=''> 
                <div className='mx-1'>
                    <label className=' text-xs font-[300] text-neutral-400'>Location</label>
                    </div>
                <input className=' shadow-xl pl-10 my-1 h-12  rounded w-full lg:w-full' type="text"  placeholder="Kochi" />
               </div>
               <div className='flex w-full justify-between  '>
                    <div className='lg:w-full w-[49%] lg:mr-2 '>
                        <div>
                            <label className='text-xs font-[300] text-neutral-400' htmlFor="">Check in</label>
                        </div>
                        <input className='shadow-xl text-black lg:pl-5  pl-10 my-1  h-12  rounded w-full' type="date" />
                    </div>
                    <div className='lg:w-full w-[49%]'>
                        <div>
                            <label className='text-xs font-[300] text-neutral-400' htmlFor="">Check out</label>
                        </div>
                        <input className='shadow-xl  text-black lg:pl-5  pl-10 my-1  h-12  rounded w-full' type="date" />
                    </div>
               </div>
               <div className='lg:flex lg:w-full'>

                    <div className='lg:mr-2 lg:w-[50%]'>
                        <div>

                            <label className='text-xs font-[300] text-neutral-400' htmlFor="">Guests</label>
                        </div>
                        <input className='shadow-xl my-1 lg:mx-1 h-12 w-full rounded' type="text" />
                    </div>
                    <div className='lg:w-[50%]'>
                        <button className='shadow-xl lg:mt-7 mt-1 w-full bg-blue-800 h-12  rounded '>search</button>
                    </div>
               </div>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Booking