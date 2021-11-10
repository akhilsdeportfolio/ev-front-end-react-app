import Hand from './image/Handwithvector.png'
import styled from 'styled-components'

import Experience from './Experience'
import Support from './Support'
import { Link } from 'react-router-dom'

const Img = styled.img`
width: 18.88%;
height: 274px;
justify-content: center; 
align-items: center;
margin: auto;
display: block;
margin-top: 4.05%;
`
const styles = {
    txtnone: {
        textDecoration: "none"
    },
    raiseTicketDiv: {
        width: "26.18%",
        height: "74px",
        background: "#FF546D",
        margin: "auto",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "40px",
        lineHeight: "49px",
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: "20px",
        marginTop: "3.5%",
        boxShadow: "0px 6px 10px gray"
    },
    connectDiv:{
        width:" 58.47%",
        height: "40px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "33px",
        lineHeight: "40px",
        textAlign: "center",
        textDecorationLine: "underline",
        color: "#000000",
        margin: "auto",
        marginTop: "4.05%",
    }
}
const Raise1 = () => {
   
    return (
        <>
            <Experience />
            <Support />
            <div ><Img src={Hand} alt="hand"></Img></div>
                <Link to="/raise2" style={styles.txtnone}>
                    <div style={styles.raiseTicketDiv}>
                        Raise a Ticket
                    </div>
                </Link>
            <div style={styles.connectDiv}>We will connect you to the nearest help center</div>
        </>
    )
}

export default Raise1
