import MainPageButton from "./MainPageButton.jsx";
import CodeDemoPage from "./CodeDemoPage.jsx";
import { useRef } from "react";

export default function MainPage(){
    const SecondDivRef=useRef(null);

    const onHandleClick=()=>{
        if(SecondDivRef.current){
            SecondDivRef.current.scrollIntoView({behavior:'smooth'});
        }
    };
    return(
        
        <div className="bg-customColorMainPage block">
            <div className="block">
            <h1 className="text-white pt-24 md:pt-16 text-4xl md:text-5xl font-bold text-center mr-16 ml-16">Empowering Developers to Excel in Every Language</h1>
            <p className="text-customeParaColor text-center mr-28 ml-28 text-xl mt-10">Unlock the potential of modern languages like Python for <span className="text-customeDesignColor2">simplicity</span>, C# for <span className="text-customeDesignColor2">powerful performance</span>, JavaScript for <span className="text-customeDesignColor2">versatility</span>, and many others to build efficient and scalable applications effortlessly.</p>
            
            </div>
            <MainPageButton handle={onHandleClick}/>
            <CodeDemoPage SecondDivRef={SecondDivRef}/>
        </div>
    );

}