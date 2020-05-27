import React, {Component} from 'react'
import SingleBookedCard from "./SingleBookedCard";
import axios from "axios";



class Bookings extends Component{


      state={
            Bookings: []
      }



async componentDidMount (){
// async await 
    const res=  await  axios.get("http://localhost:1337/Bookings")
    
            console.log(res.data);
            this.setState ( {Bookings:res.data})

}


render() {
    return(
          <div className={"cards-dev"}>
                {this.state.Bookings.map((Booking) =>
                     
                      <SingleBookedCard 
                      key={Booking.id}
                      name={Booking.Name}
                      language={Booking.Language}
                      description= {Booking.Description}
                      date={Booking.Date}
                      fromTo={Booking.FromTo}
                      price={Booking.Price}
                      hours ={Booking.Hours}
                      code={Booking.Code}
                     
                       />
                )} 
          </div>
    )
      }
}
export default Bookings;

