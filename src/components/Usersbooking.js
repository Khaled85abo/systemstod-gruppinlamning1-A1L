import React, { Component } from "react";
import firebase from "./FirebaseConfig";

class Booking extends Component {

  state = {
    products: null,
    user: "" 
  }

 

     componentDidMount() {
    //get username

     firebase.auth().onAuthStateChanged((user)=>{
        this.setState({user:user.email}) //user:user
        this.setState({user:user.displayName}) //user:user
        console.log(user);

        if(user){

          const userfromLocal = localStorage.getItem("user");
          console.log(userfromLocal);
          var Currentuser = firebase.auth().currentUser;
          console.log("Current User from firebase");
          console.log(user);
console.log("isndide if statment")
  
          this.setState({
           // user: user.displayName,
            user: Currentuser.email
          });
  
          //get products
          var docRef = firebase.firestore().collection("Booking").doc(user.uid.toString())
            .collection("products");
  
          docRef.get().then(snapshot => {
            const products = []
            snapshot.forEach(doc => {
              const data = doc.data()
              products.push(data)
            })
            this.setState({ products: products })
          })
  
  
    } else {
        console.log("No user")
    }

     })

   


  }

  render() {
    const loggedIn = this.state.user || localStorage.getItem("user");
    return (
      <div > 

{this.state.user? 

          <div className={"cards-dev"}>
           {
        this.state.products &&
        this.state.products.map(product => {
          return (
            <div key={product.id} className={"card"}>
              <h1>{product.name}</h1>
              <h2 >{product.description}</h2>
              <h3 >{product.price}</h3>
              <h3 >{product.code}</h3>
              <h3 >{product.language}</h3>
              <div className={"two-btns-dev"}>
                <button className={"book-btn"}  >Unbook</button>
                <button className={"book-btn"}>Edit</button>
            </div>
            </div>
          )
        })
      } </div>

      : <h1 className={"cards-dev"}>You should login first </h1>}

    </div>

    )

  }
}

export default Booking;