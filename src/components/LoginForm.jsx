import Heading from "./HeadingInfo";
import { InputInfo } from "./InputInfo";

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
        if(!email.includes(".com")){
           alert("please provide valid email address") 
           return;
        }
        
        if(password.trim().length <= 6){
            alert("please enter more than six digit of password")
            return
        }
        let passwordCheck = password;
        let passpattern = /[0-9]/g;
        let result3 = passwordCheck.match(passpattern);
        if(result3.length === 0){
            alert("password must include alphabet and digit both")
            return
        }
        const user = {
            email,
            password
        }
        console.log(user)
    }
  return (
    <form style={styles.box} onSubmit = {handleSubmit}>
    <Heading heading=" Already Registered?" subheading = "Login"/>
    <div style={styles.padding}>
       <InputInfo data1 = "Email" data2="Required Fields"/>
        <input style={styles.input} 
        type="text" 
        name = "email"
        placeholder = "Enter Email"/>
        
    </div>
    <div style={styles.padding}>
       <InputInfo data1 = "Password"/>
        <input style={styles.input} 
        type="text"
        name="password" 
        placeholder = "Enter Password"/>
        
    </div>
    <button style = {
            styles.button
        }>LOGIN</button>
        <InputInfo data1 = "Lost your Password"/>
        <br/>
        <h1 style={styles.headin}>
       New User
    </h1>
    <button type="submit" style = {
            styles.button2
        }>CREATE AN ACCOUNT</button>
    </form>
  )
}