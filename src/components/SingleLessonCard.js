import React, {Component} from "react";


class SingleLessonCard  extends Component {
    

        render(){

    return (


        <div className={"card"}>

            <h3>{this.props.name}</h3>
            <img  src={ "http://localhost:1337" + this.props.img} className={"teacher_img"} alt={"teacher"} />
            <h3>{this.props.language} teacher</h3>
            <p>{this.props.description}</p>
            <p>Price: {this.props.price}kr/hour</p>
            <p>Course code: {this.props.code}</p>
            <button className={"book-btn"} onClick= {this.props.onClickSaveToFirestore }>Book</button>

        </div>


    )}
}

export default SingleLessonCard;

