import './raise1.css'
import Experience from '../components/Experience'
import Support from './Support'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import { Button, Chip, Stack } from '@mui/material';
import TicketNumber from './TicketNumber';

const Raise2 = () => {
    return (
        <>
        <Experience/>
        <Support/>
        <TicketNumber/>
        <Stack direction="row" spacing={1} className="stack-div">
        <Chip label="MESSAGE" color="primary"></Chip>
        <Chip label="CALL" style={{background:" #88CDF2"}} />
        </Stack>
        <form>
            <div className="name-div">
                <div>
                    <label className="name-label">Name (Required)</label>
                    <br />
                    <input type="text" className="name-input" />
                </div>
                <div>
                    <label className="name-label m-left" >Phone Number (Required)</label>
                    <br />
                    <input type="Number" className="name-input m-left"/>
                </div>
                <div>
                    <label className="name-label m-left" >Email (Required)</label>
                    <br />
                    <input type="Email" className="name-input m-left"/>
                </div>
            </div>
            <div>
                <label className="problem-label"> State your Problem</label>
                <br />
                <input type="text" className="problem-input"/>
            </div>
        </form>
        <FormControl component="fieldset">
        <RadioGroup
            aria-label="location"
            defaultValue="location"
            name="radio-buttons-group"
        >
        <FormControlLabel value="location"  control={<Radio style={{color:"#1C1C1C", marginLeft:"112px"}}/>} label="Send Your Location"  />
        </RadioGroup>
        </FormControl>
        <br />
        <Button variant="contained" size="large" style={{marginLeft:"112px"}}>Send</Button>
        </>
    )
}

export default Raise2
