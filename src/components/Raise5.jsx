import './raise1.css'
import Experience from './Experience'
import Support from './Support'
import TicketNumber from './TicketNumber'
import Frame98 from './image/Frame 98.png'
import Frame99 from './image/Frame 99.png'

import { Button, Chip, Stack } from '@mui/material';
const Raise5 = () => {
    return (
        <>
            <Experience/>
            <Support/>
            <TicketNumber/>
            <Stack direction="row" spacing={1} className="stack-div">
            <Chip label="MESSAGE" style={{background:"#FFB3D4"}}></Chip>
            <Chip label="CALL" color="primary" />
            </Stack>
            <div className="your-num-div">XXX XXX X089</div>
            <Stack direction="row" spacing={1} className="share-div">
            <img src={Frame98} alt="..." />
            <img src={Frame99} alt="..." />
            </Stack>
            <div style={{width:"90px" ,margin:"auto"}}><Button variant="contained" size="large" >Call</Button></div>
            
        </>
    )
}

export default Raise5
