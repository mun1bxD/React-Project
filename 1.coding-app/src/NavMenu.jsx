import "./navbar.css"
export default function NavMenu(){
    return(
        <div className="fixed mt-24 bg-customColor h-full w-full slide-in-right">
            <ul className="text-white mt-14 mb-6 mr-4">
                <li className="ml-14 mt-8 border-b-2 border-gray-800 pb-1 hover:font-medium cursor-pointer mr-14">Tutorials</li>
                <li className="ml-14 mt-8 border-b-2 border-gray-800 pb-1 hover:font-medium cursor-pointer mr-14">Code Challenges</li>
                <li className="ml-14 mt-8 border-b-2 border-gray-800 pb-1 hover:font-medium cursor-pointer mr-14">Mentorship</li>
                <li className="ml-14 mt-8 border-b-2 border-gray-800 pb-1 hover:font-medium cursor-pointer mr-14">Resources</li>
                <li className="ml-14 mt-8 border-b-2 border-gray-800 pb-1 hover:font-medium cursor-pointer mr-14">Projects</li>
                <li className="ml-14 mt-8 border-b-2 border-gray-800 pb-1 hover:font-medium cursor-pointer mr-14">Events/Webinars</li>
            </ul>        
        </div>
    );
}