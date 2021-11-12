
import { Footer } from "./Footer"
let styles = {
    container:{
        width:"90%",
        marginLeft:"5%", 
    },
    box1:{
        width:"99.8%",
        height:"124px",
        marginTop:20
    },
    box:{
        width:"99.8%",
        marginTop:20
    },
    pic:{
        cursor:"pointer",
        borderRadius:"50%",
        width:"120px",
        height:"120px",
        float:"left",
        marginRight:90,
    },
    details:{
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "30px",
        letterSpacing: "-0.01em",
        textAlign: "left",
        color:"#333333",
    },
    para:{
        fontFamily: "Poppins",
        fontSize: "17px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "25.5px",
        color:"#333333",
    },thin:{
        marginLeft:100
    },thins:{
        marginLeft:90
    },
    button:{
        clear:"both",
        float:"right",
        width:"160px",
        height:"30px",
        cursor:"pointer",
        marginTop:-29,
        border:"1px solid red",
        backgroundColor:"white",
        color:"red",
    },
    row1Img:{
        display: "grid",
        marginTop: "-19px",
        gridTemplateColumns:" repeat(3,34%)",
        marginBottom:" 40px"
    },
    img:{
        width: "95%",
        height: "237px",
        cursor:"pointer",
    },
}
function ImageList(props){
        const images = props.Image;
        const listItems = images.map((el)=>
            <img style={styles.img} src = {el} alt=""/>
        );
        return (
            <div style={styles.row1Img}>{listItems}</div>
        )
    }
let user = JSON.parse(localStorage.getItem('users'))
let row22 = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6qG7lZbQCeJFCS7nVtXIKZi1z-yKZEDSUQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6qG7lZbQCeJFCS7nVtXIKZi1z-yKZEDSUQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6qG7lZbQCeJFCS7nVtXIKZi1z-yKZEDSUQ&usqp=CAU"]
export let Account = (props)=>{
    return (
        <>
            <div style = {styles.container}><div style = {styles.box1}>
               <div style = {styles.account}>
               <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6qG7lZbQCeJFCS7nVtXIKZi1z-yKZEDSUQ&usqp=CAU" alt="profile pic" style = {styles.pic}/></div>
               <div style = {styles.details}>
                    <p>Account Details
                    </p>
                   
                </div>
                <div style = {styles.para}>
                    <p>Name <span style = {styles.thin}>{user.firstName +" " + user.lastName}</span></p>
                </div>
                <div style = {styles.para}>
                    <p>E-mail: <span style = {styles.thins}>{user.email}</span></p>
                </div> 
            </div>
            <div style = {styles.details}>
                    <p>My Accounts
                    </p>
            </div>
            
           </div>
           <div style={styles.container}>
           <p style = {styles.details}>Recent Blogs and news </p> 
           <ImageList Image = {row22}/>
           <button style = {styles.button}>
               view more
           </button> 
           </div>
           <div style={styles.container}>
           <p style = {styles.details}>Recent Blogs and news </p> 
           <ImageList Image = {row22}/>
           <button style = {styles.button}>
               view more
           </button> 
           </div>
           <div style={styles.container}>
           <p style = {styles.details}>Recent Blogs and news </p> 
           <ImageList Image = {row22}/>
           <button style = {styles.button}>
               view more
           </button> 
           </div>
           <Footer/>
        </>
    )
}