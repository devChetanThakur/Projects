import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>

        <h1 className='font-["Neue_Montreal"] text-5xl tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
    
        <div  className='w-full flex gap-20 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2 '>
                <h1 className='text-5xl font-semibold'>Our Approach:</h1>
                <button className=' flex gap-10 items-center mt-10 px-12 py-4 bg-zinc-900 rounded-full text-white '>Read More 
                    <div classsname='w-2 h-2 rounded-full'></div>
                </button>
            </div>

            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#a6c82d] '></div>
        </div>
    </div>
   
  )
}

export default About