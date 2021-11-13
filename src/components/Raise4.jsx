
import Experience from './Experience'
import Support from './Support'
import TicketNumber from './TicketNumber'
import Tickmark from './image/Group 76.png'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useHistory } from 'react-router-dom'

const styles = {
    responseDiv:{
        width: "26.375%",
        height: "96px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "39px",
        lineHeight: "48px",
        textAlign: "center",
        color: "#000000",
        margin: "auto",
        marginTop:"80px"
    },
    mark:{
        justifyContent: "center", 
        alignItems: "center",
        margin: "auto",
        display: "block",
        marginTop: "4.05%",
        marginBottom:"40px"
    },
    
    solveAsapDiv:{
        width: "68%",
        height: "65px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "53px",
        lineHeight: "65px",
        textAlign: "center",
        color: "#000000",
        margin: "auto"
    }
}
const Raise4 = () => {
    let history= useHistory();
    return (
        <>
        <Navbar></Navbar>
         <Experience/>
         <Support/>
         <TicketNumber/>
         <div style={styles.responseDiv}>Your Response is Recorded</div> 
         <img style={styles.mark} src={Tickmark} alt="..." />
         <div style={styles.solveAsapDiv}>We will solve your problem ASAP</div>  
         <Footer></Footer>
        


        {setTimeout(()=>{
                history.push("/")
            },3000)}

    </>    
    )
}

export default Raise4
