const styles = {
    headin:{
        fontFamily: "Poppins",
        fontSize: "35px",
        fontStyle: "normal",
        fontWeight: 600,
         textAlign: "center",
    },
    info:{
      
        fontFamily: "Poppins",
        fontSize: "23px",
        fontStyle: "normal",
        fontWeight: 600,
        
    },
}
function Heading(props){

    return (
        <>
            <h1 style={styles.headin}>
      {props.heading}
    </h1>
       <p style={styles.info}>
       {props.subheading}
    </p>
        </>
    )
}
export default Heading