import React, { Component } from "react"
import { Link } from "react-router-dom";

class SignUp extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div>
                <h1>Sign Up</h1>
                <Link to="/sign-in">Already have an account? Sign In!</Link>
            </div>
        )
    }
}

export default SignUp
