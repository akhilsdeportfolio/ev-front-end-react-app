import "./Account.css"
import { Footer } from "./Footer"
let styles = {
    container:{
        width:"90%",
       border:"4 ps solid red",
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
        marginBottom:5

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
        marginTop:5,
        marginRight:80,
        height:"30px",
        cursor:"pointer",
        border:"1px solid red",
        backgroundColor:"white",
        color:"red",
    },
   
}
let user = JSON.parse(localStorage.getItem('users'))
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
                    <p>Account Details
                    </p>
            </div>
            <p style = {styles.para}>Recent Blogs and news </p>
            <div style = {styles.box} className = "dataimg">
                <img  alt="" />
                <img alt="" />
                <img style = {{margin:0}} alt="" />            
            </div> 
           </div>
           <button style = {styles.button}>
               view more
           </button>
           <div className = "rows3">
           <p style = {styles.para}>Recent Vehicles </p>
            <div style = {styles.box} className = "dataimg">
                <img  alt="" />
                <img alt="" />
                <img style = {{margin:0}} alt="" />            
            </div>
            <button style = {styles.button}>
               view more
           </button> 
           </div>
           <div className = "rows3">
           <p style = {styles.para}>Recent Tickets</p>
            <div style = {styles.box} className = "dataimg">
                <img  alt="" />
                <img alt="" />
                <img style = {{margin:0}} alt="" />            
            </div> 
            <button style = {styles.button}>
               view more
           </button>
           </div>
           <Footer/>
        </>
    )
}