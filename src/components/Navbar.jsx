import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex items-shrink-0 items-center">
            <h3 className="xl lg:text-3xl font-bold">Personal Portfolio</h3>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 lg:text-4xl">
            <a href="https://www.linkedin.com/in/ashen-savinda/"><FaLinkedinIn /></a>
            <a href="https://github.com/Ashen-Savinda"><FaGithub /></a>
        </div>
    </nav>
}

export default Navbar