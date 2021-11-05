import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Urgent } from "./Urgent";



function Home(){
    return (
        <>
        <Navbar/>
        <Experience />
        <Urgent/>
        <Footer/>
        </>
    )
}

export {Home}