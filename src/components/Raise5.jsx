
import Experience from './Experience'
import Support from './Support'
import TicketNumber from './TicketNumber'
import Frame98 from './image/Frame 98.png'
import Frame99 from './image/Frame 99.png'
import { Link } from 'react-router-dom'
import { Button, Chip, Stack } from '@mui/material';

const styles = {
    txtnone: {
        textDecoration: "none"
    },
    bgclr: {
        background: "#FFB3D4"
    },
    bgclrPrimary: {
        background: "#FF546D",
        color: "white"
    },
    yourNumDiv: {
        width: "28%",
        height: "61px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "50px",
        lineHeight: "61px",
        textAlign: "center",
        color: "#000000",
        margin: "auto",
    },

    shareImg: {
        width: "12%",
        margin: "auto",
    },

    shareDiv: {
        width: "9%",
        margin: "auto",
    },

    shareP: {
        width: "59px",
        height: "24px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "20px",
        lineHeight: "24px",
        textAlign: "center",
        color: "#000000",
    },
    stackDiv:{
        marginLeft: "8.08%"
    },
    btnDiv:{
        width: "90px", 
        margin: "auto"
    }
}
const Raise5 = () => {

    const receiveCall = () => {
        alert("You can call on 789 385 4089")
    }
    return (
        <>
            <Experience />
            <Support />
            <TicketNumber />
            <Stack direction="row" spacing={1} style={styles.stackDiv}>
                <Link to="/raise2" style={styles.txtnone}  >
                    <Chip label="MESSAGE" style={styles.bgclr}></Chip>
                </Link>
                <Chip label="CALL" style={styles.bgclrPrimary} />
            </Stack>
            <div style={styles.yourNumDiv}>XXX XXX X089</div>
            <Stack direction="row" spacing={1} style={styles.shareImg}>
                <img src={Frame98} alt="..." />
                <img src={Frame99} alt="..." />
            </Stack>
            <Stack direction="row" spacing={1} style={styles.shareDiv}>
                <div style={styles.shareP} >Share</div>
                <div style={styles.shareP}>Call</div>
            </Stack>
            <Link to="/raise4" style={styles.txtnone}  >
                <div style={styles.btnDiv}>
                    <Button onClick={receiveCall} variant="contained" size="large" >Call</Button>
                </div>
            </Link>
        </>
    )
}

export default Raise5
