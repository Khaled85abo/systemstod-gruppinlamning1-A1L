import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Lessons from "./Lessons";
import BookForm from "./BookForm";
import Bookings from "./Bookings";
import Userbooking from "./Usersbooking";
import Profile from "./AuthUser/UserProfile";
import Adminform from "./Adminform";
import UserLogin from "./AuthUser/UserLogin"
import AdminSida from "./AdminSida"
import UserPage from "./AuthUser/UserPage";


import "../style/_main.scss";
import "../style/_card.scss"
import "../style/_login.scss"
import '../style/_form.scss';


const Approute = () =>{

    return(
        <BrowserRouter>
                 <Navbar/>
                 <Switch>
                    <Route path="/Lessons" component= {Lessons} exact ></Route>
                    <Route path="/BookForm" component= {BookForm} exact ></Route>
                    <Route path="/Bookings" component= {Bookings} exact></Route>
                    <Route path="/Userbooking" component= {Userbooking} exact></Route>
                    <Route path="/AuthUser/UserProfile" component= {Profile} exact></Route>
                    <Route path="/Adminform" exact component= {Adminform}/>
                    <Route path="/AdminSida" exact component= {AdminSida}/>
                    <Route path="/AuthUser/UserLogin" exact component= {UserLogin}/>
                    <Route path="/userpage" exact component= {UserPage}></Route>
                    

                 </Switch>
        </BrowserRouter>
    )


}

export default Approute;