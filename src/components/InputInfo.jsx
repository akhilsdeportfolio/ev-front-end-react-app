let  styles ={
    textFlex:{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:5
    },
    textStyle:{
        fontFamily: "Poppins",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 500,
    }
} 
export const InputInfo = (props)=>{
    return(
        <>
        <div style={styles.textFlex}>
            <div style = {styles.textStyle}>{props.data1}</div>
            <div style = {styles.textStyle}>{props.data2}</div>
        </div>
        </>
    ) 
}