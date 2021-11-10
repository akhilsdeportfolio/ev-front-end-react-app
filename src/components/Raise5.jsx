import './raise1.css'
import Experience from './Experience'
import Support from './Support'
import TicketNumber from './TicketNumber'
import Frame98 from './image/Frame 98.png'
import Frame99 from './image/Frame 99.png'
import { Link } from 'react-router-dom'
import { Button, Chip, Stack } from '@mui/material';
const Raise5 = () => {

    const receiveCall = () => {
        alert("You will receive a call from 789 385 4089")
    }
    return (
        <>
            <Experience />
            <Support />
            <TicketNumber />
            <Stack direction="row" spacing={1} className="stack-div">
                <Link to="/raise2" style={{ textDecoration: "none" }}  >
                    <Chip label="MESSAGE" style={{ background: "#FFB3D4" }}></Chip>
                </Link>
                <Chip label="CALL" color="primary" />
            </Stack>
            <div className="your-num-div">XXX XXX X089</div>
            <Stack direction="row" spacing={1} className="share-img">
                <img src={Frame98} alt="..." />
                <img src={Frame99} alt="..." />
            </Stack>
            <Stack direction="row" spacing={1} className="share-div">
                <div className="share-p" >Share</div>
                <div className="share-p">Call</div>
            </Stack>
            <Link to="/raise4" style={{ textDecoration: "none" }}  >
            <div style={{ width: "90px", margin: "auto" }}>
                <Button onClick={receiveCall} variant="contained" size="large" >Call</Button>
            </div>
            </Link>

        </>
    )
}

export default Raise5
