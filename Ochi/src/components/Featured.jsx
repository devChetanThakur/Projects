import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'


const Featured = () => {
  
 const cards =  [useAnimation(), useAnimation()]; 
      const handleHiver = ()=>{
        cards[index].start({y: "0"})

      }

  return (
    <div className='w-full py-20 '>
      <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
        <h1 className='text-8xl fpnt-["Neue-Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
          <div className='cards w-full flex gap-10 mt-10 px-10'>
           <motion.div onHoverStart={()=>handleHover(0)} className='cardcontainer relative w-1/2 h-[70vh] '>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
            <h1 className='absolute flex text-[#CDEA68] overflow-hidden left-full z-[9] top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl  font-["Founders_Grotesk_X-Condensed"] leading-none tracking-tighter'>
          {"FYDE".split('').map((item, index)=>(
            <motion.span 
            initial={{y: "100%"}} 
            animate={cards[0]} 
            transition={{ease: [0.22, 1, 0.36, 1], delay: index*.01}}
            className='inline-block'>{item}</motion.span>
        ))}
          </h1>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
            </div>
           </motion.div>
          <div className='cardcontainer relative w-1/2 h-[70vh]'>
            <div className='card w-full h-full rounded-xl overflow-hidden '>
            <h1 className='absolute flex text-[#CDEA68] overflow-hidden right-full z-[9] top-1/2 translate-x-1/2 -translate-y-1/2 text-8xl  font-["Founders_Grotesk_X-Condensed"] leading-none tracking-tighter'>
          {"VISE".split('').map((item, index)=>(
            <span className='inline-block' >{item}</span>
        ))}
          </h1>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured