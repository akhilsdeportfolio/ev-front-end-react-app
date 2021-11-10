
import Experience from '../components/Experience'
import Support from './Support'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button, Chip, Stack } from '@mui/material';
import { useState, useEffect, } from "react"
import { Link, useHistory } from 'react-router-dom'
import TicketNumber from './TicketNumber';
import { Footer } from './Footer';

const styles = {
    txtnone: {
        textDecoration: "none"
    },
    bgclr: {
        background: " #88CDF2"
    },
    bgclrPrimary: {
        background: "#FF546D",
        color: "white"
    },
    btn: {
        marginLeft: "112px"
    },
    radioBtn:{
        color: "#1C1C1C", 
        marginLeft: "112px"
    },
    nameDiv:{
        display: "flex",
        flexBasis:"82"
    },
    nameInput:{
        width: "346px",
        height: "49px",
        background: "#E8E8E8",
        marginLeft: "113px",
        border: "none",
    },
    nameInput1:{
        width: "346px",
        height: "49px",
        background: "#E8E8E8",
        marginLeft: "113px",
        border: "none",
        marginLeft: "36px"
    },
    nameLabel:{
        width: "12.29%",
        height: "22px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "22px",
        color: "#000000",
        marginLeft: "113px",
    },
    nameLabel1:{
        width: "12.29%",
        height: "22px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "22px",
        color: "#000000",
        marginLeft: "36px",
    },
    stackDiv:{
        marginLeft: "8.08%"
    },
    problemInput:{
        width: "83%",
        height: "230px",
        display: "block",
        margin: "auto",
        background: "#E8E8E8",  
        border: "none",
    },
    
    problemLabel:{
        width: "12.29%",
        height: "22px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "22px",
        color: "#000000",
        marginLeft: "8.2%",
    }

}
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

    const handleAddform = (task) => {
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

    const handleSubmit = (e) => {

        e.preventDefault();
        let email = e.target.email.value
        let name = e.target.name.value
        let phone = e.target.phone.value
        let problem = e.target.problem.value
        if (email.trim().length <= 6 || !email.includes(".com")) {
            alert("please provide valid email address")
            return
        }
        if (name.trim().length <= 3) {
            alert("please provide name with atleast three character")
            return
        }
        if (phone.trim().length <= 9) {
            alert("please provide valid phone")
            return
        }
        if (problem === "") {
            alert("please do write your problem, it meant to us")
            return
        }
        handleAddform(raiseform);
        setRaiseform({
            name: "",
            phone: "",
            email: "",
            problem: ""
        })
        history.push("/raise4")

    };
    return (
        <>
            <Experience />
            <Support />
            <TicketNumber></TicketNumber>
            <Stack direction="row" spacing={1} style={styles.stackDiv}>
                <Chip label="MESSAGE" style={styles.bgclrPrimary}></Chip>
                <Link to="/raise5" style={styles.txtnone}>
                    <Chip label="CALL" style={styles.bgclr} />
                </Link>
            </Stack>
            <form onSubmit={handleSubmit}>
                <div style={styles.nameDiv}>
                    <div>
                        <label style={styles.nameLabel}>Name (Required)</label>
                        <br />
                        <input type="name" name="name" value={raiseform.name} onChange={handleChange} style={styles.nameInput} />
                    </div>
                    <div>
                        <label style={styles.nameLabel1} >Phone Number (Required)</label>
                        <br />
                        <input type="Number" name="phone" value={raiseform.phone} onChange={handleChange} style={styles.nameInput1} />
                    </div>
                    <div>
                        <label style={styles.nameLabel1} >Email (Required)</label>
                        <br />
                        <input type="Email" name="email" value={raiseform.email} onChange={handleChange} style={styles.nameInput1} />
                    </div>
                </div>
                <div>
                    <label style={styles.problemLabel}> State your Problem</label>
                    <br />
                    <textarea type="problem" name="problem" value={raiseform.problem} onChange={handleChange} style={styles.problemInput} />
                </div>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="location"
                        defaultValue="location"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="location" control={<Radio style={styles.radioBtn} />} label="Send Your Location" />
                    </RadioGroup>
                </FormControl>
                <br />
                <Button type="submit" variant="contained" size="large" style={styles.btn}>
                    Send
                </Button>
            </form>
            <Footer></Footer>


        </>
    )
}

export default Raise2
