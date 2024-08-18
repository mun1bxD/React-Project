export default function MainPageButton({handle}){
    return(
        <div className="mt-16 justify-center flex">
        <button onClick={handle} className="font-medium bg-customeDesignColor2 hover:bg-customeDesignColor transition rounded m-2 md:m-4 px-8 py-4">Get Started</button>
        <button className="font-medium bg-gray-500 hover:bg-customeDesignColor3 hover:text-white transition rounded m-2 md:m-4 px-8 py-4">API Refrences</button>
       </div>
    );

}