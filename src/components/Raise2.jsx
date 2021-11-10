import './raise1.css'
import Experience from '../components/Experience'
import Support from './Support'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Chip, Stack } from '@mui/material';
import { useState, useEffect,} from "react"
import { Link, useHistory } from 'react-router-dom'
import TicketNumber from './TicketNumber';


const Raise2 = () => {
    const [raiseform, setRaiseform] = useState({
        name: "",
        phone: "",
        email: "",
        problem: ""
    })
    const history = useHistory();
    console.log(raiseform);

    const [data, setData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRaiseform({
            ...raiseform,
            [name]: value
        })
    };

    useEffect(() => {
        getform()
    }, [])

    const getform = () => {
        fetch(`http://localhost:3001/raiseticket`)
            .then((d) => d.json())
            .then(setData)
    }
    console.log(data);

    const handleAddform = (task ) => {
        fetch("http://localhost:3001/raiseticket", {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json"
            }
        })  
        .then((d) => d.json())
        .then(getform)  
      
    }

    // const linkactivate = () => {
    //     if(raiseform){
    //         return true
    //     } else{
    //         return false
    //     }
        
    // }

    const handleSubmit = (e) => {
        // const navigate = useNavigate();
        
        e.preventDefault();
        handleAddform(raiseform);
        setRaiseform({
            name: "",
            phone: "",
            email: "",
            problem: ""
        })
        // history.push("/raise4")
        // navigate("/raise4")
    };

    const receiveCall = () => {
        alert("You will receive a call from 789 385 4089")
    }

    return (
        <>
            <Experience />
            <Support />
            <TicketNumber></TicketNumber>
            <Stack direction="row" spacing={1} className="stack-div">
                <Chip label="MESSAGE" color="primary"></Chip>
                <Link to="/raise5"  style={{ textDecoration: "none" }}>
                <Chip label="CALL" style={{ background: " #88CDF2" }} />
                </Link>
            </Stack>
            <form onSubmit={handleSubmit}>
                <div className="name-div">
                    <div>
                        <label className="name-label">Name (Required)</label>
                        <br />
                        <input type="name" name="name" value={raiseform.name} onChange={handleChange} className="name-input" />
                    </div>
                    <div>
                        <label className="name-label m-left" >Phone Number (Required)</label>
                        <br />
                        <input type="Number" name="phone" value={raiseform.phone} onChange={handleChange} className="name-input m-left" />
                    </div>
                    <div>
                        <label className="name-label m-left" >Email (Required)</label>
                        <br />
                        <input type="Email" name="email" value={raiseform.email} onChange={handleChange} className="name-input m-left" />
                    </div>
                </div>
                <div>
                    <label className="problem-label"> State your Problem</label>
                    <br />
                    <input type="text" name="problem" value={raiseform.problem} onChange={handleChange} className="problem-input" />
                </div>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="location"
                        defaultValue="location"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="location" control={<Radio style={{ color: "#1C1C1C", marginLeft: "112px" }} />} label="Send Your Location" />
                    </RadioGroup>
                </FormControl>
                <br />
                <Link to="/raise4"  style={{ textDecoration: "none" }}>
                    <Button type="submit" onClick={receiveCall} variant="contained" size="large" style={{ marginLeft: "112px" }}>
                        Send
                    </Button>
            </Link> 
                
            </form>
            

        </>
    )
}

export default Raise2
