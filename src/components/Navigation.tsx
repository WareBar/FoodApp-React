import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars} from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-2 absolute w-full text-white">


        <h1 className="text-3xl mada-font">
            <span className="font-medium">WareBar</span>
            <span className="font-light">Recipe</span>
        </h1>


        {/* menu */}
        <div className="">
            <p className="text-1xl mada-font flex gap-2">
                <span><FontAwesomeIcon icon={faBars}/></span>
                <span>Menu</span>
            </p>
        </div>


        </nav>
    )
}


export default Navigation