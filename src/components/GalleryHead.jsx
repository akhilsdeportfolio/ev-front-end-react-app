import "./gallery.css"
const styles = {
    lines:{
        width:15,
        height:65,
        background:"#FF546D",
        marginLeft:-30
        
       
    }
}
export const GalleryHead = (props)=>{

    return (
        <>
            <div style = {
                styles.lines
            }></div>
            <div className = "exterior">{props.name}</div>
        </>
    )
}