import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-10'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative items-center justify-center flex rounded-xl w-full h-full bg-[#004D43]'>
                <img 
                 className='w-32 flex'
                 src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" 
                 alt="" />
                    <button 
                    className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>
                    &copy;2024-2025
                    </button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>

            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#23423e]'>
            <img 
            className='w-32 flex ' 
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" 
            alt="" />
            <button 
            className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>
                RATING 5.0 ON CLUTCH
                </button>
            </div>

            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#23423e]'>
            <img className='w-32 flex ' 
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" 
            alt="" />
            <button 
            className='absolute left-10 bottom-10 px-5 py-2 mr-8 border-2 rounded-full'>
                BUSINESS BOOTCAMP ALUMINI
                </button>
            </div>
        </div>
    </div>

  )
}

export default Cards