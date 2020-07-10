import React, { Component } from "react"
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput/form-input";

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    
    handleClick = (event) => {
        event.preventDefault();
        this.setState({email: "", password: ""})
    }

    render(){
        return(
            <div>
                 <h1>Sign In</h1>

                 <form>
                    <label>Email</label>
                     <FormInput
                     name="email"
                     type="email"
                     value={this.state.email}
                     handleChange={this.handleChange}
                     />

                     <label>Password</label>
                     <FormInput
                     name="password"
                     type="password"
                     value={this.state.password}
                     handleChange={this.handleChange}
                     />
                     
                <input
                type="submit"
                onClick={this.handleClick}
                />
                </form>
                <Link to="/sign-up">Don't have an account? Sign Up!</Link>
            </div>
        )
    }
}

export default SignIn
