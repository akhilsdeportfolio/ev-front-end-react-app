import React from 'react'
import Experience from './Experience'
import Support from './Support'
import TicketNumber from './TicketNumber'
import Tickmark from './image/Vector 234.png'
const Raise4 = () => {
    return (
        <>
         <Experience/>
         <Support/>
         <TicketNumber/>
         <div className="response-div">Your Response is Recorded</div> 
         <div className="tickMark-div"><img className="mark" src={Tickmark} alt="..." /></div>  
        </>
    )
}

export default Raise4
