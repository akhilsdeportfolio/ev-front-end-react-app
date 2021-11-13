import { Footer } from "./Footer";
import { Urgent } from "./Urgent";
import { TopBar } from "./TopBar";
import { News } from "./News";
import { Vehicles } from "./Vehicles";
import Trending from "./TrendingTopics";


function Home(){
    return (
        <>
        <TopBar/>
        <Urgent/>
        <News />
        <Vehicles />
        <Trending />
        <Footer/>
        </>
    )
}

export {Home}