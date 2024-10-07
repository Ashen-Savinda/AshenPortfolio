import profilePic from "../assets/ashenSavindaProfile.png"
import { motion } from "framer-motion"
import cv from "../assets/AshenSavindaCV.pdf";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})


const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin 
                        tracking-tight lg:mt-16 lg:text-8xl">
                            Ashen Savinda
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Software Engineering Undergraduate
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            I'm Ashen Savinda, a Software Engineering student passionate about developing innovative solutions.
                            With experience across technologies like MongoDB, React.js, Node.js, and more,
                            I try to build efficient, high-quality applications that adapt to evolving challenges.
                        </motion.p>
                        <motion.a
                            href={cv}
                            download="AshenSavindaC.pdf"
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 mb-4 inline-block rounded bg-neutral-900 px-6 py-3 text-lg font-light text-white shadow-md"
                        >
                            Download My CV
                        </motion.a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center ">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.1 }}
                            style={{
                                maxWidth: '70%',
                                maxHeight: '70%',
                                backdropFilter: 'blur(10px)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)'
                            }}
                            className="rounded-2xl"
                            src={profilePic} alt="Ashen Savinda Profile Picture" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero