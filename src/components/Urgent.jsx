import { Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    urgent:{
            marginTop: '5%',
            marginLeft: '30%',
        '& hr':{
            width: '100%',
            marginTop: '7%',
            marginLeft:'-18%',
            border: '2px solid #1D5AB4'
        },
    },
})

const styles = {
    anchr:{
        textDecoration:'none'
    },
    section:{
        marginLeft:'-15%',
        lineHeight:'150%',
        marginTop:'2%',
        letterSpacing:'1px'
    },
    section1:{
        marginLeft:'-15%',
        lineHeight:'150%',
        marginTop:'2%',
        letterSpacing:'1px'
    },
    section2:{
        marginLeft:'18%',
        lineHeight:'150%',
        letterSpacing:'1px'
    },
    section3:{
        marginLeft:'-7%',
        lineHeight:'150%',
        letterSpacing:'1px'
    },
    section4:{
        marginLeft:'-4%',
        lineHeight:'150%',
        marginTop:'2%',
        letterSpacing:'1px'
    },
    section5:{
        marginLeft:'25%',
        lineHeight:'150%',
        marginTop:'2%',
        letterSpacing:'1px',
        color:'#FF3D59'
    }
}


function Urgent(){
    const classes = useStyles()

    return (
        <div className={classes.urgent}>
            <Typography  variant='h6' >
                <Link href="" style={styles.anchr}>URGENT</Link> section will help you with your Electric vehicle
            </Typography>
            <Typography variant='h6' style={styles.section}>
            We are giving our user the road side assistant. Whenevery you feel and the comes in <br /> 
            the situation where you don’t have any other option you can <Link href="" style={styles.anchr}>GO TO THE URGENT 
            SECTION.</Link>
            </Typography>
            <Typography variant='h6' style={styles.section1}>
            Where you can rais your problem in the form of ticket like your battery is discharged <br /> 
            in the place of no where and having problem with your<Link href="" style={styles.anchr}> E-Vehicle</Link>. When Your application <br /> comes to us with your location we will assign the near by workshop to you and you will get
            </Typography>
            <Typography variant='h6' style={styles.section2}>
            every updates like
            </Typography>
            <Typography variant='h6' style={styles.section3}>
            How much time it will be taken for the technician to reach your Location?
            </Typography>
            <Typography variant='h6' style={styles.section4}>
            So you don’t have to worry, your <Link href="" style={styles.anchr}> E-Vehicle Assistant </Link>is with you.
            </Typography>
            <Typography variant='h6' style={styles.section5}>
            Belive It!
            </Typography>
            <hr />
        </div>
    )
}

export {Urgent}