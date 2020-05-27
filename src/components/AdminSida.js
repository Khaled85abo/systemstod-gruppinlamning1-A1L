import React, { Component } from "react";
import UserProfile from "./AuthUser/UserProfile";
import UserLogin from "./AuthUser/UserLogin"
 
 
class AdminSida extends Component {
 
    state = {
        user: null || localStorage.getItem("user"),
        jwt: null
    }

    
    callback(user, jwt) {
        this.setState({ user: user.email, jwt: jwt })
        localStorage.setItem("jwt", this.state.jwt)
        localStorage.setItem("user", this.state.user)
    }
 
    render() {

        const loggedIn = this.state.user || localStorage.getItem("jwt");
        return (
            <div>
                {!loggedIn ?
                    <UserLogin userCredential={this.callback.bind(this)} /> :
                    <UserProfile userData={this.state.user} />
                }
            </div>
        )
    }
}
 
export default AdminSida;