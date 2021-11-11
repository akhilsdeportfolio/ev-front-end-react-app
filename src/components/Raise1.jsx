import Hand from './image/Handwithvector.png'
import styled from 'styled-components'
import './raise1.css'
import Experience from './Experience'
import Support from './Support'
import { Link } from 'react-router-dom'
import Raise2 from './Raise2'
import { useState, useEffect } from 'react'

const Img = styled.img`
width: 18.88%;
height: 274px;
justify-content: center; 
align-items: center;
margin: auto;
display: block;
margin-top: 4.05%;
`

const Raise1 = () => {
   
    return (
        <>
            <Experience />
            <Support />
            <div ><Img src={Hand} alt="hand"></Img></div>
                <Link to="/raise2" style={{textDecoration:"none"}}>
                    <div className="raise-ticket-div">
                        Raise a Ticket
                    </div>
                </Link>
            <div className="connect-div">We will connect you to the nearest help center</div>
        </>
    )
}

export default Raise1
