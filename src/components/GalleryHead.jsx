
const styles = {
    lines:{
        width:15,
        height:65,
        background:"#FF546D",
        marginLeft:-30
    },
    exterior:{
        position: "relative",
        top: "-55px",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "40px",
        lineHeight: "49px",
        color: "#000000", 
    }
}
export const GalleryHead = (props)=>{

    return (
        <>
            <div style = {
                styles.lines
            }></div>
            <div style={styles.exterior}>{props.name}</div>
        </>
    )
}