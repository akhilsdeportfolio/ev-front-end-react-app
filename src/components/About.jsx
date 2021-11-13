import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  urgent: {
    marginTop: '5%',
    textAlign: 'center',
    '& hr': {
      width: '79%',
      marginTop: '7%',
      marginLeft: '13%',
      border: '2px solid #1D5AB4',
      marginBottom: '100px'
    },
  },
})

const styles = {
  we: {
    width: "12%",
    height: "40px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "33px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#000000",
    margin: "auto",
    marginTop: "51px",
    marginBottom: "72px",
  },

  helpingYou: {
    width: "32.00%",
    height: "40px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "33px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#00FF29",
    margin: "auto",
    marginBottom:"50px",
    marginTop:"10px"
  },
  anchr: {
    textDecoration: 'none',
    color: '#FF3D59',
  },
  section: {
    marginLeft: '3%',
    lineHeight: '150%',
    marginTop: '2%',
    letterSpacing: '1px'
  },
  section1: {
    marginLeft: '3%',
    lineHeight: '150%',
    marginTop: '2%',
    letterSpacing: '1px'
  },
  section2: {
    marginLeft: '3%',
    lineHeight: '150%',
    letterSpacing: '1px'
  },
  section3: {
    marginLeft: '7%',
    lineHeight: '150%',
    letterSpacing: '1px'
  },
  section4: {
    marginLeft: '1%',
    lineHeight: '150%',
    marginTop: '2%',
    letterSpacing: '1px'
  },
  section5: {
    lineHeight: '150%',
    marginTop: '2%',
    letterSpacing: '1px',
    color: '#FF3D59'
  }
}
const About = () => {
  const classes = useStyles()
  return (
    <>
      <Navbar></Navbar>
      <div className={classes.urgent}>
        <div style={styles.we}>WE ARE</div>

        <Typography variant='h6' >
          <Link style={styles.anchr}>Your E-Assistant</Link> is a Help Platform to Give Latest Updates about the E-Vehicle industry <br /> around INDIA in the form fo Blogs and News.
        </Typography>

        <div style={styles.helpingYou}>ALWAYS  UPDATING YOU</div>

        <Typography variant='h6' style={styles.section}>
          And you can Go through every E-Vehicle currently present in INDIA. You can see the <br /> features, Latest prices, Genuine Reviews of customer. <br />
          So you can plan your next E-Vehicle Purchase.
        </Typography>

        <div style={styles.helpingYou}>ALWAYS  GUIDING YOU</div>

        <Typography variant='h6' >
          <Link to="/raise2" style={styles.anchr}>URGENT</Link> section will help you with your Electric vehicle
        </Typography>

        <Typography variant='h6' style={styles.section}>
          We are giving our user the road side assistant. Whenevery you feel and the comes in <br />
          the situation where you don’t have any other option you can <Link to="/raise2" style={styles.anchr}>GO TO THE URGENT
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

        <div style={styles.helpingYou}>ALWAYS  HELPING YOU</div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
