// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";

import firebase from "../FirebaseConfig";

//navigate("/userprofile")



class UserProfile extends Component{

    state= {
        user:""
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
           this.setState({user:user.email}) //user:user
           console.log(user);
        })
        //skicka data till parent
    }
    
    logOut(){
       
       localStorage.clear();
       window.location.reload(false);
       firebase.auth().signOut();
    }
    //hämta data från firebase
    // profilbild8
    // radera kontot
    // finnas på databasen
    // raderar dem
    // fråga användare 
    // Varna användare ifall det finns bokingar 

    //edit på deras profile info

deleteAccount(){
    const userfromLocal = localStorage.getItem("user");
    console.log("user from localhost");
    console.log(userfromLocal);
    var user = firebase.auth().currentUser;
    console.log("user info");
    console.log(user);

   user.delete().then(function() {
       console.log('user har been deleted')
  // User deleted.
  localStorage.clear();
       window.location.reload();
}).catch(function(error) {
    console.log(error);
});

}
    render(){
        return(
            <div className={"form-dev"}>
                {this.state.user}
                {this.props.userData}

                  <button onClick={this.deleteAccount.bind(this)} className={"book-btn btn"}> Delete Account</button>
                  <button onClick={this.logOut.bind(this)} className={"book-btn btn"}> Logout</button>
                 
            </div>
        )
    }
}


export default UserProfile;


// kontaktförmuläret till din email 
