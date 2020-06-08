
// register / login 
// conditional rendering
// state 

import React, {Component} from "react";
//npm i react-firebaseui
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "../FirebaseConfig";
import UserProfile from "./UserProfile";


class UserLogin extends Component {

//via props
 state= {
     condition:true, 
     user:""
 }

uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl:'/userprofile',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID, 
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ]
};

componentDidMount(){
     firebase.auth().onAuthStateChanged((user)=>{
     if(user){
           this.setState({user:user.email}) //user:user
       console.log(user);
    }
    })

    //skicka data till parent

}
 
 onClickRegister(){
     this.setState({condition:false})
 }

 onClickLogin(){
    this.setState({condition:true})
 }
onSubmitLogin(e){
    e.preventDefault();

const email= e.target.elements.email.value;
const password = e.target.elements.password.value;
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(
        //res=>
    
    //anropa showDisplayName
     //this.props.userCredential(res.user.email)
     
     )
    
    //react-router 
    //navigate 
    // skydda routerna 
    
}
// reset password 
// mail och mailer reset länk och mall till användare 


 onSubmitRegister(e){
   
     const email= e.target.elements.email.value;
     const password= e.target.elements.password.value;
     const displayName = e.target.elements.username.value;
      e.preventDefault();

     firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then( (res)=>{

// från child till parent med hjälp callback funktion 
         res.user.sendEmailVerification()
        // this.props.userCredential(res.user.email)
        // this.props.showDisplayName(displayName)
     })
     //.then(()=>{
     /*      firebase.auth().onAuthStateChanged((user)=>{
            user.updateProfile({
         displayName :username
     })
  console.log("display name"+ this.state.displayName)}) */
    // })

 // aktivera verifering av email

    // if (res == true){
    //     prompt('successfully registered!');
    //     window.location.reload();
    // } else {
    //     prompt('please check if everything is right!')
    // }
 
 }


        resetPassword(e){
            var auth = firebase.auth();
        var emailAddress = e.target.elements.resetEmail.value;

        auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
        console.log("email sent")
        })
        e.preventDefault();
        }

 /* componentDidMount(){

     firebase.auth().onAuthStateChanged((user)=>{
                            user.updateProfile({
                                displayName :username
                            }))

 }
 } */


    render(){
        // Configure FirebaseUI.

        return(
            <div>
                               {this.state.user? <UserProfile  /> : 




            <div className={"cards-dev"}>
            <div className={"card login-card"}>
                <div className={"two-btns-dev"}>
                    <button onClick={this.onClickLogin.bind(this)} className={"book-btn btn"} >To Login</button>
                    <button onClick={this.onClickRegister.bind(this)} className={"book-btn btn"} >To Register</button>
                </div>
         {this.state.condition  && 
         <div >
            <h2>Login</h2>
         <form   onSubmit={this.onSubmitLogin.bind(this)}>
                    <input type="email"   name="email"/>
                    <input type="password" name="password" />
                    <button className={"book-btn btn"}>Login</button>  
                </form>
                         
             <form onSubmit={this.resetPassword.bind(this)}>
                 <button className={"book-btn btn"}  >Reset password </button>
             </form>               
                 </div>
                
                }
                               
           {!this.state.condition &&

           <div >
               <h2>Register</h2>
            <form onSubmit={this.onSubmitRegister.bind(this)}>
                     <input type="text" name="username"/>
                     <input type="email" name="email" />
                     <input type="password" name="password" />

                    <button className={"book-btn btn"}>Register</button>

                </form>
            <div> Or</div>
     <div>
        <h3>Please sign-in with:</h3>
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      </div>

           {this.state.user? <UserProfile  /> : <div>There is no user </div>}


                </div>
                
                }

{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}

                

            </div>
            </div>
            }
            </div>
        )
    }
}

export default UserLogin;