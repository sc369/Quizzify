import React, { Component } from "react"
// import "./login.css"
import UserManager from "../../modules/DataManagers/UserManager"
import { Button } from 'reactstrap'
import { Link } from 'react'
import Register from './Register'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Login extends Component {

    state = {
        password: "",
        username: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    setRegistrationStatus = () => {
        sessionStorage.setItem("userInfo", "Registering")
    }

    checkLogin = evt => {
        evt.preventDefault()
        {
            UserManager.getAll().then((users) => {
                const foundUser = users.find(user => user.username === this.state.username && user.password === this.state.password)
                if (foundUser) {
                    sessionStorage.setItem("userInfo", parseInt(foundUser.id))
                    this.props.history.push('/SelectTakeQuiz')
                } else {
                    window.alert("username or password not found")
                }
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="loginForm">
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
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
                    <button type="submit" onClick={this.checkLogin}>
                        Login
        </button>
                    <button type="submit" onClick={this.setRegistrationStatus}>
                        Go to Registration
        </button>

                </form>
            </React.Fragment >
        )
    }
}

export default withRouter(Login)