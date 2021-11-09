
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
export default function SignupForm() {
    let handleSignup = (e) =>{
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
        if(!email.includes(".com")){
           alert("please provide valid email address") 
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
        }
        const user = {
            firstName,
            lastName,
            email,
            password,
        }
        console.log(user)
        e.target.firstName.value = null;
        e.target.lastName.value = null;
        e.target.email.value = null;
        e.target.password.value = null;
    }
  return (
    <form style={styles.box} type="submit" onSubmit = {handleSignup}>
       <h1 style={styles.headin}>
       Create an Account
    </h1>
       <p style={styles.info}>
       Personal Information
    </p>
    <div style={styles.padding}>
        <div style={styles.textFlex}>
            <div>First Name</div>
            <div>Required Fields</div>
        </div>
        <input style={styles.input} 
        type="text" 
        name="firstName"
        placeholder = "Enter First Name"/>
        
    </div>
    <div style={styles.padding}>
        <div style={styles.textFlex}>
            <div>Last Name</div>
            <div></div>
        </div>
        <input style={styles.input} 
        type="text" 
        name = "lastName"
        placeholder = "Enter Last Name"/>
        
    </div>
    <div style={styles.padding}>
        <div style={styles.textFlex}>
            <div>Email</div>
            <div></div>
        </div>
        <input style={styles.input} 
        name = "email"
        type="email" 
        placeholder = "Enter Email"/>
    </div>
    <div style={styles.padding}>
        <div style={styles.textFlex}>
            <div>Password</div>
            <div></div>
        </div>
        <input style={styles.input} 
        type="password" 
        name = "password"
        placeholder = "Enter Password"/>
    </div>
    <button style = {
            styles.button
        }>Create</button>
       <div style={styles.textFlex}>
            <div>or Return to page</div>
        </div>
    </form>
  )
}