import React, {Component} from 'react'
import SingleLessonCard from "./SingleLessonCard";
import axios from "axios";


//get 
//post
//put
//delete
class Lessons extends Component{


      state={
            Lessons: []
      }



async componentDidMount (){
// async await 
    const res=  await  axios.get("http://localhost:1337/Lessons")
    console.log("data from strapi")
            console.log(res.data);
            this.setState ( {Lessons:res.data})

}

render() {
    return(
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
    )
      }
}
export default Lessons;

