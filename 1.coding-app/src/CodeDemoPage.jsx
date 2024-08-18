import C_sharp_Decription from "./C_sharp_Decription.jsx";
import JavaScript_Decription from "./JavaScript_Description.jsx";
export default function CodeDemoPage({SecondDivRef}){
    return(
        <div ref={SecondDivRef} className="bg-white mt-32">
            <C_sharp_Decription/>
            <JavaScript_Decription/>
        </div>
    );
}