import { Footer } from "./Footer";
import Heading from "./HeadingInfo";
import { InputInfo } from "./InputInfo";
import { Navbar } from "./Navbar";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
const styles = {
    box:{
        width:350,
        height:500,
        marginLeft:"38%",
    },
   
    textFlex:{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:5
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
        cursor:"Pointer",
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
export default function SignupForm() {
    const history = useHistory();
    
    let handleSignup = async (e) =>{
        e.preventDefault()
        let firstName = e.target.firstName.value;
        let lastName = e.target.lastName.value
        let email = e.target.email.value
        let password = e.target.password.value;

        if(firstName.trim().length <= 2){
            alert("please provide valid first name")
            return
        }
        
        let firstNameCheck = firstName;
        let firstNamepattern = /[0-9]/g;
        let result = firstNameCheck.match(firstNamepattern);
        console.log(result)
        if(result != null){
            alert("name should not contain numeric value")
            return;
        }
        if(lastName.trim().length <= 2){
            alert("please provide valid last name")
            return
        }

        let lastNameCheck = firstName;
        let lastpattern = /[0-9]/g;
        let result2 = lastNameCheck.match(lastpattern);
        if(result2 != null){
            alert("name should not contain numeric value")
            return
        }
        
        if(email.trim().length <= 6){
            alert("please provide valid email address")
            
            return
        }
        if(!email.includes(".com") || !email.includes(".in")){
           alert("please provide valid email address") 
           return
        }
        
        if(password.trim().length <= 6){
            alert("please enter more than six digit of password")
            return
        }
        let passwordCheck = password;
        let passpattern = /[0-9]/g;
        let result3 = passwordCheck.match(passpattern);
        if(result3 === null){
            alert("password must include alphabet and digit both")
            return
        }
        const user = {
            firstName,
            lastName,
            email,
            password,
        }
        console.log(user)
         
        let req=await axios.post('http://localhost:2000/users',user);
    
        req.then(response =>{
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
                alert("created account successfully");
                return ;
            } else {
               console.log('Somthing happened wrong');
            }
            }).catch(err => err);

            localStorage.setItem('users',JSON.stringify(user))

        history.push("/Login");
        e.target.firstName.value = null;
        e.target.lastName.value = null;
        e.target.email.value = null;
        e.target.password.value = null;


    }
  return (<>
      <Navbar/>
            <form style={styles.box} type="submit" onSubmit = {handleSignup}>
                <Heading heading="Create an Account" subheading = "Personal Information"/>
                <div style={styles.padding}>
                    <InputInfo data1 = "First Name" data2="Required Fields"/>
                    <input style={styles.input} 
                        type="text" 
                        name="firstName"
                    required = "true" placeholder = "Enter First Name" />
                </div>
                <div style={styles.padding}>
                    <InputInfo data1 = "Last Name"/>
                    <input style={styles.input} 
                        type="text" 
                        name = "lastName"
                    required = "true" placeholder = "Enter Last Name"/>
                </div>
                <div style={styles.padding}>
                    <InputInfo data1 = "Email"/>
                    <input style={styles.input} 
                        name = "email"
                        type="email" 
                        required = "true" placeholder = "Enter Email"/>
                </div>
                <div style={styles.padding}>
                    <InputInfo data1 = "Password"/>
                        <input style={styles.input} 
                        type="password" 
                        name = "password"
                        required = "true" placeholder = "Enter Password"/>
                    </div>
                <button style = {styles.button }>Create</button>
            <Link to=""><InputInfo data1 = "or Return to Home Page"/></Link>
        </form>
    <Footer/>
    </>
  )
}