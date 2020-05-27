import React, {Component} from "react";
import firebase from "./FirebaseConfig";


class SingleLessonCard  extends Component {
    

    onClickSaveToFirestore(){

              var user = firebase.auth().currentUser;


        if (user){
            const docRef = firebase.firestore().collection("Booking").doc(user.uid.toString())
            .collection("products").doc(this.props.docId.toString());
          
         
            docRef.set({
                name: this.props.name,
                language: this.props.language,
                description: this.props.description,
                price: this.props.price,
                code: this.props.code
         
            })

        }else{
            alert("you should login or create an account before you can book time");
        }
    
     
        } 

        render(){

    return (


        <div className={"card"}>

            <h3>{this.props.name}</h3>
            <img  src={ "http://localhost:1337" + this.props.img} className={"teacher_img"} alt={"Picture of the teacher"} />
            <h3>{this.props.language} teacher</h3>
            <p>{this.props.description}</p>
            <p>Price: {this.props.price}kr/hour</p>
            <p>Course code: {this.props.code}</p>
            <button className={"book-btn"} onClick= {this.onClickSaveToFirestore.bind(this)}>Book</button>

        </div>


    )}
}

export default SingleLessonCard;

