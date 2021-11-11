import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

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
    marginTop:"51px",
    marginBottom: "72px",
  },

  para1: {
    width: "79.15%",
    height: "144px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "24px",
    textAlign: "center",
    color: "#000000",
    margin: "auto",
    marginBottom: "83px",
  },

  para2: {
    width: "79.15%",
    height: "264px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "24px",
    textAlign: "center",
    color: "#000000",
    margin: "auto",
    marginBottom: "25px",
  },

  helpingYou: {
    width: "29.26%",
    height: "40px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "33px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#00FF29",
    margin: "auto",
  }
}
const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div style={styles.we}>WE ARE</div>
      <div style={styles.para1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor in placerat leo gravida id adipiscing id consequat sit. Condimentum id magna duis nulla imperdiet dignissim. Sapien odio blandit sociis integer. Lorem egestas mi massa interdum erat ullamcorper cursus eu. Viverra sed sed ipsum morbi justo id odio tellus. Cras ullamcorper lacinia elit et fringilla augue senectus dui amet. Imperdiet malesuada sed facilisis scelerisque iaculis morbi amet. Vitae arcu vitae pulvinar diam sociis mattis. Gravida aenean mattis fermentum dictum ultrices mi.</div>
      <div style={styles.para2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor in placerat leo gravida id adipiscing id consequat sit. Condimentum id magna duis nulla imperdiet dignissim. Sapien odio blandit sociis integer. Lorem egestas mi massa interdum erat ullamcorper cursus eu. Viverra sed sed ipsum morbi justo id odio tellus. Cras ullamcorper lacinia elit et fringilla augue senectus dui amet. Imperdiet malesuada sed facilisis scelerisque iaculis morbi amet. Vitae arcu vitae pulvinar diam sociis mattis. Gravida aenean mattis fermentum dictum ultrices mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor in placerat leo gravida id adipiscing id consequat sit. Condimentum id magna duis nulla imperdiet dignissim. Sapien odio blandit sociis integer. Lorem egestas mi massa interdum erat ullamcorper cursus eu. Viverra sed sed ipsum morbi justo id odio tellus. Cras ullamcorper lacinia elit et fringilla augue senectus dui amet. Imperdiet malesuada sed facilisis scelerisque iaculis morbi amet. Vitae arcu vitae pulvinar diam sociis mattis. Gravida aenean mattis fermentum dictum ultrices mi.</div>
      <div style={styles.helpingYou}>ALWAYS  HELPING YOU</div>
      <Footer></Footer>
    </>
  )
}

export default About
