import FooterItem from "./FooterItem.jsx";
export default function Footer(){
    return(
        <>
            <div className="mt-10 flex flex-col items-center py-8 justify-center">
                <h1 className=" text-3xl md:text-6xl text-center w-1/2 mb-24">Join the vibrant world of Development!</h1>
                <FooterItem/>
            </div>
        </>
    );
}
