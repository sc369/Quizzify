import React, { Component } from "react"
import UserManager from "../../modules/DataManagers/UserManager"
import { Button } from 'reactstrap'
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
        UserManager.getAll().then((users) => {
            const foundUser = users.find(user => user.username === this.state.username && user.password === this.state.password)
            if (foundUser) {
                sessionStorage.setItem("userInfo", parseInt(foundUser.id))
                this.props.history.push('/SelectTakeQuiz')
            } else {
                window.alert("Username or password incorrect")
            }
        })

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
                    <Button type="submit" onClick={this.checkLogin}>
                        Login
        </Button>
                    <Button type="submit" onClick={this.setRegistrationStatus}>
                        Go to Registration
        </Button>

                </form>
            </React.Fragment >
        )
    }
}

export default withRouter(Login)