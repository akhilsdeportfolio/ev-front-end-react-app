
import { Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { fontSize, letterSpacing } from "@mui/system"


const useStyles = makeStyles({
    text1:{
        padding: '10%',
        background: "linear-gradient(180deg, #FF3D59 30%, #C11561 100%)",
        marginTop: "11.89%",

        '& h3':{
            marginLeft: '35%',
            fontFamily: "Rozha One",
        },
        '& h4':{
            color: 'white',
            textDecoration: 'underline',
            paddingBottom:'5px',
            marginLeft: '33%',
            marginTop: '2%',
            fontSize: '45px',
            letterSpacing: '2px',
            fontFamily: "Rozha One",
        } 
    }
})

function Experience(){

    const classes = useStyles()

    return (
        <div className={classes.text1}>
            <Typography variant='h3' >
                Your Experience
            </Typography>
            <Typography variant='h4'>
                Our Responsibility
            </Typography>
            
        </div>
    )
}

export {Experience}

/* import React from 'react'

const Experience = () => {
    return (
        <div className="exper-div">Your Experience Our Responsibility</div>
    )
}

export default Experience */
/* >>>>>>> fadcbd27a78c5f670a421e610e7b56c1a7719ac2 */
