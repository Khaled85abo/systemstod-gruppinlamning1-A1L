import React, { Component } from "react";

import axios from "axios";



class Book extends Component{





async onSubmitToApi(e){
    e.preventDefault();


 
     

  const res = await axios.post("http://localhost:1337/Bookings", {

       Name: e.target.elements.name.value,
       Description: e.target.elements.description.value,
       Price: e.target.elements.price.value,
       Date: e.target.elements.date.value,
       Hours: e.target.elements.hours.value,
       Code: e.target.elements.code.value,
       Email: e.target.elements.email.value,
       Mobile: e.target.elements.mobile.value,
       Language: e.target.elements.language.value,
       FromTo: e.target.elements.fromTo.value,

   })
   console.log(res)

    const data=  new FormData();
  
    data.append('ref', 'Booking') //collection
    data.append('refId', res.data.Id)  // referens id
    
     window.location.reload();

    }

    render(){

        return (
            <div className={"form-dev"}>
        <form onSubmit={this.onSubmitToApi.bind(this)} >
            <input type={"text"} placeholder={"Course code"} name="code" ></input>
            <input type={"text"} placeholder={"Course language"} name="language" ></input>
            <input type={"text"} placeholder={"Description"} name="description" ></input>
            <input type={"text"} placeholder={"Your name"} name="name" ></input>
            <input type={"email"} placeholder={"E-mail"} name="email"></input>
            <input type={"text"} placeholder={"Desired date"} name="date" ></input>
            <input type={"number"} placeholder={"number of hours"} name="hours" ></input>
            <input type={"text"} placeholder={"From To"} name="fromTo" ></input>
            <input type={"number"} placeholder={"Price"} name="price" ></input>
            <input type={"number"} placeholder={"telephone number"} name="mobile" ></input>
                <button type={"submit"} className={"book-btn btn"}>Book Time</button>
        </form>
        </div>
        )
    }
}

export default Book;