import { Responsibility } from "./Responsibility";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Urgent } from "./Urgent";
import { TopBar } from "./TopBar";


function Home(){
    return (
        <>
        <TopBar/>
        <Urgent/>
        <Footer/>
        </>
    )
}

export {Home}