import { Footer } from "./Footer";
import { Urgent } from "./Urgent";
import { TopBar } from "./TopBar";
import { News } from "./News";
import { Vehicles } from "./Vehicles";


function Home(){
    return (
        <>
        <TopBar/>
        <Urgent/>
        {/* <News /> */}
        <Vehicles />
        <Footer/>
        </>
    )
}

export {Home}