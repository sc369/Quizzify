import React, { Component } from "react"
// import "./login.css"
import UserManager from "../../modules/DataManagers/UserManager"
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
// import ApplicationViews from '../../components/ApplicationViews'
class Register extends Component {

    state = {
        password: "",
        username: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    registerNewUser = evt => {
        evt.preventDefault()
        {
            const newUser = {
                username: this.state.username,
                password: this.state.password
            }

            UserManager.post(newUser)
                .then((user) => {
                    sessionStorage.setItem("userInfo", parseInt(user.id))
                    this.props.history.push('/SelectTakeQuiz')
                })
        }
    }

    render() {
        return (
            <form className="loginForm">
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                <label htmlFor="inputUsername">Username</label>
                <input
                    onChange={this.handleFieldChange}
                    type="username"
                    id="username"
                    placeholder={``}
                    required=""
                />
                <label htmlFor="inputPassword">Password</label>
                <input
                    onChange={this.handleFieldChange}
                    type="password"
                    id="password"
                    placeholder={``}
                    required=""
                />
                {/* <button type="submit" onClick={this.handleLogin}>
                    Sign in
            </button> */}
                <Button onClick={this.registerNewUser} > Register
                </Button>



            </form>
        )
    }
}
export default withRouter(Register)