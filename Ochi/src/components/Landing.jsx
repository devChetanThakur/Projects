import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Landing = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.3' className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-32 px-20'>
            {["We create", "Eye opening", "presentations"].map((item,index)=>{
                return <div className='masker'>
                    <div className="w-fit flex">
                        {index === 1 && (
                            
                            <motion.div 
                            initial={{width: 0}} 
                            animate={{width: "8vw"}} 
                            transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                            className=" mr-[1vw] mt-2 h-[5.9vw] relative rounded-md bg-red-500"></motion.div>

                        )}
                    <h1 className="uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-medium">
                    {item}</h1>
                    </div>
               
            </div>
            })}
          

        </div>
        <div className="border-t-[1px] border-zinc-700 mt-[3vw] flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-light tracking-tight leading-none '>{item}</p>
            ))}

            <div className="start flex items-center gap-5">
                <div className="px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full">start the project</div>
                <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                   <span className="rotate-[-45deg]">
                   <FaLongArrowAltRight />
                    </span> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Landing