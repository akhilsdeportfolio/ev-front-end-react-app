let  styles ={
    textFlex:{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:5
    },
} 
export const InputInfo = (props)=>{
    return(
        <>
        <div style={styles.textFlex}>
            <div>{props.data1}</div>
            <div>{props.data2}</div>
        </div>
        </>
    ) 
}