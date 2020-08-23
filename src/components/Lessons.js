import React, {Component} from 'react'
import SingleLessonCard from "./SingleLessonCard";
import axios from "axios";
import Modal from "react-modal";
import firebase from "./FirebaseConfig";


const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };



//get 
//post
//put
//delete
class Lessons extends Component{


      state={
            Lessons: [],
            modalisopen: true,
            date: '20-09-2020',
            hours: '2.5',
            fromTo: '13:00 - 14:30'
      }




async componentDidMount (){
// async await 
    const res=  await  axios.get("http://localhost:1337/Lessons")
    console.log("data from strapi")
            console.log(res.data);
            this.setState ( {Lessons:res.data})

}

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


      cancellModal(){
            this.setState({modalisopen : false})
      }

      datehandelOnChange =(e) => {

            this.setState({[e.target.date] : e.target.value})
      }
      hourshandelOnChange =(e) => {

            this.setState({[e.target.hours] : e.target.value})
      }
      fromTohandelOnChange =(e) => {

            this.setState({[e.target.fromTo] : e.target.value})
      }



async onSubmitToApi(e){
      e.preventDefault();
  
    const res = await axios.post("http://localhost:1337/Bookings", {
  

         Date: e.target.elements.date.value,
         Hours: e.target.elements.hours.value,
         FromTo: e.target.elements.fromTo.value,
  
     })
     console.log(res)
  
      const data=  new FormData();
    
      data.append('ref', 'Booking') //collection
      data.append('refId', res.data.Id)  // referens id
      
       window.location.reload();
  
      }

render() {
    return(


      <>
         <Modal
          isOpen={this.state.modalisopen}
          onAfterOpen={'afterOpenModal'}
          onRequestClose={'closeModal'}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div className={"form-dev"}>
                  <form onSubmit={this.onSubmitToApi.bind(this)} >
                        <button onClick={this.cancellModal.bind(this)}>Cancell</button>
                        <input value={this.state.date} onChange={this.datehandelOnChange} type={"text"} placeholder={"Desired date"} name="date" ></input>
                        <input value={this.state.hours} onChange={this.hourshandelOnChange} type={"number"} placeholder={"number of hours"} name="hours" ></input>
                        <input value={this.state.fromTo} onChange={this.fromTohandelOnChange} type={"text"} placeholder={"From To"} name="fromTo" ></input>
                        <button type={"submit"} className={"book-btn btn"}>Book Time</button>
                  </form>
            </div>
        </Modal>
          <div className={"cards-dev"}>
                {this.state.Lessons.map((Lesson) =>
                     
                      <SingleLessonCard 
                      
                      key={Lesson.id}
                      docId={Lesson.id}
                      name={Lesson.Name}
                      img={Lesson.Img.url} 
                      language={Lesson.Language}
                      description= {Lesson.Description}
                      price={Lesson.Price}
                      code={Lesson.Code}
                     
                       />
                )} 
          </div>
      </>
    )
      }
}
export default Lessons;

