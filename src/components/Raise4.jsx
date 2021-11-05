
import Experience from './Experience'
import Support from './Support'
import TicketNumber from './TicketNumber'
import Tickmark from './image/Group 76.png'
import './raise1.css'
const Raise4 = () => {
    return (
        <>
         <Experience/>
         <Support/>
         <TicketNumber/>
         <div className="response-div">Your Response is Recorded</div> 
         <img className="mark" src={Tickmark} alt="..." />
         <div className="solve-asap-div">We will solve your problem ASAP</div>  
        </>
    )
}

export default Raise4
