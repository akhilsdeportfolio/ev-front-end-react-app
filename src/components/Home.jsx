import { Responsibility } from "./Responsibility";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Urgent } from "./Urgent";


function Home(){
    return (
        <>
        <Navbar/>
        <Responsibility />
        <Urgent/>
        <Footer/>
        </>
    )
}

export {Home}