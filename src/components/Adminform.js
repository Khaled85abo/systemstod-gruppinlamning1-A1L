import React, { Component } from "react";

import axios from "axios";



class Adminform extends Component{

    state={
         image:" "
    }
eventChange(e){
    console.log(e.target.files[0])
    this.setState({image:e.target.files[0]})
}


async onSubmitToApi(e){
    e.preventDefault();


    //console.log(e.target.elements.file.files[0])
     //this.setState({title: e.target.elements.title.value})
     

  const res = await axios.post("http://localhost:1337/Lessons", {

       Name: e.target.elements.name.value,
       Language: e.target.elements.language.value,
       Description: e.target.elements.description.value,
       Price: e.target.elements.price.value,
       Code: e.target.elements.code.value
   })
   console.log(res)

    const data=  new FormData();
  
    data.append('files', this.state.image) //file från state
    data.append('ref', 'Lesson') //collection
    data.append('refId', res.data.id)  // referens id
    data.append('field', 'Img')// fältnamn
    
    window.location.reload();

    /*  data.append('ref', 'Lesson')
     data.append('refId', resPic.data.id)
     data.append('field',"image" )     
 */
//console.log(data)
     const  resPic = await axios.post("http://localhost:1337/upload",data) 

    };

    render(){
        return(
            <div className={"form-dev"}>
                 <form onSubmit={this.onSubmitToApi.bind(this)}>
                     <input type="text" name="name" placeholder={"Teacher's name"}/>
                     <input type="file" placeholder={"Teacher's picture"}
                      name="file" onChange={this.eventChange.bind(this)}/>
                     <input type="text" name="language" placeholder={"Language"}/>
                     <input type="text" name="description" placeholder={"Description"}/>
                     <input type="number" name="price" placeholder={"Price"}/>
                     <input type="text" name="code" placeholder={"Code"}/>


                     
                     <button className={"book-btn btn"}>Save</button>
                     
                 </form>

            </div>
        )
    }
}

export default Adminform;