import React from "react";

const SingleBookedCard = (props) => {
    

   

    return (


        <div className={"card"}>
            <h5>{props.name} booked Time with</h5>
            <h3>{props.language}  teacher</h3>
            <p>{props.description}</p>
            <p>price {props.price}kr</p>
            <p>Course Code {props.code}</p>
            <div className={"two-btns-dev"}>
                <button className={"book-btn"}  >Unbook</button>
                <button className={"book-btn"}>Edit</button>
            </div>
        </div>


    )
}




export default SingleBookedCard;



