import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function NavButton({handle,toggle}){
    return(
    <div>
        <button className="text-white mt-6 md:mt-8 mb-8 mr-14 md:text-3xl text-xl" onClick={handle}><FontAwesomeIcon icon={toggle? faBars:faX}/></button>
    </div>
    );
}