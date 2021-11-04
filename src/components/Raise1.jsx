import Hand from './image/Handwithvector.png'
import styled from 'styled-components'
import './raise1.css'
import Experience from './Experience'
import Support from './Support'

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
            <Experience/>
            <Support/>
            <div ><Img src={Hand} alt="hand"></Img></div>   
            <div className="raise-ticket-div">Raise a Ticket</div>    
            <div className="connect-div">We will connect you to the nearest help center</div>    
        </>
    )
}

export default Raise1
