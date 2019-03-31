import React, { Component } from "react"
// import "./login.css"
import UserManager from "../../modules/DataManagers/UserManager"
import { Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
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
    returnToSignIn = evt => {
        evt.preventDefault()
        sessionStorage.removeItem("userInfo")
        this.props.history.push('/')
    }

    registerNewUser = evt => {
        evt.preventDefault()
        {
            const newUser = {
                username: this.state.username,
                password: this.state.password
            }

            UserManager.getAll().then(users => {
                const userToCheck = users.find(user => user.username === this.state.username)
                if (userToCheck === undefined) {
                    UserManager.post(newUser)
                        .then((user) => {
                            sessionStorage.setItem("userInfo", parseInt(user.id))
                            this.props.history.push('/SelectTakeQuiz')
                        })
                } else {
                    window.alert("Sorry, this username already exists")
                }
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
                <Button onClick={this.registerNewUser} > Register</Button>
                <Button onClick={this.returnToSignIn} >Back to Sign In</Button>
            </form>
        )
    }
}
export default withRouter(Register)