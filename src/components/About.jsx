import aboutImg from "../assets/about.jpg"
import { motion } from "framer-motion"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -70 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-thin">
                About Me
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl"
                            width={300}
                            height={300}
                            src={aboutImg}
                            alt="About Me" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            I am a driven Software Engineering undergraduate with hands-on
                            experience in full-stack development. I’m most accustomed to
                            working with MongoDB, Express.js, React.js, Node.js, and JavaScript
                            to create responsive, scalable applications. My projects include
                            developing secure APIs and dynamic user interfaces for platforms
                            like EduPanda and a University Timetable Management System. With
                            strong problem-solving skills and a collaborative mindset, I’m eager
                            to tackle new challenges and continuously improve through technology.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About