import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const styles = {
    box:{
        width:350,
        height:500,
        marginLeft:"38%",
    },
    headin:{
        fontFamily: "Poppins",
        fontSize: "35px",
        fontStyle: "normal",
        fontWeight: 500,
         textAlign: "center",
    },
    info:{
      
        fontFamily: "Poppins",
        fontSize: "23px",
        fontStyle: "normal",
        fontWeight: 400,
        
    },
    textFlex:{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:5
    },
    button2:{
        width:"352px",
        height:"40px",
        fontFamily: "Poppins",
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: 500,
        marginBottom:5,
       color:"white",
       border:"none",
       outline:"none",
        backgroundColor:"#AD3648",
    },
    input:{
        width:"343px",
        height:"40px",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
       color: "#6C7592",
        
    },
    padding:{
        marginBottom:15
    },
    button:{
        width:"352px",
        height:"40px",
        fontFamily: "Poppins",
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: 500,
        marginBottom:5,
       marginTop:22,
       color:"white",
       border:"none",
       outline:"none",
        backgroundColor:"#FF546D"
    },
}
export default function LoginForm() {
    function handleSubmit(event){
        let email = event.target.email.value
        let password = event.target.password.value;

        event.preventDefault()
        if(email.trim().length <= 6){
            alert("please provide valid email address")
            return
        }
        if(password.trim().length <= 6){
            alert("please enter more than six digit of password")
            return
        }
        const user = {
            email,
            password
        }
        console.log(user)
    }
  return (
      <>
      <Navbar/>
    <form style={styles.box} onSubmit = {handleSubmit}>
       <h1 style={styles.headin}>
       Already Registered?
    </h1>
       <p style={styles.info}>
       Login
    </p>
    <div style={styles.padding}>
        <div style={styles.textFlex}>
            <div>Email</div>
            <div>Required Fields</div>
        </div>
        <input style={styles.input} 
        type="text" 
        name = "email"
        placeholder = "Enter Email"/>
        
    </div>
    <div style={styles.padding}>
        <div style={styles.textFlex}>
            <div>Password</div>
            <div></div>
        </div>
        <input style={styles.input} 
        type="text"
        name="password" 
        placeholder = "Enter Password"/>
        
    </div>
    <button style = {
            styles.button
        }>LOGIN</button>
       <div style={styles.textFlex}>
            <div>Lost your Password?</div>
        </div>
        <br/>
        <h1 style={styles.headin}>
       New User
    </h1>
    <button type="submit" style = {
            styles.button2
        }>CREATE AN ACCOUNT</button>
    </form>
    <Footer/>
    </>
  )
}