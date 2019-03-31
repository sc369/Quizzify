import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Navbar, NavLink, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import UserManager from "../../modules/DataManagers/UserManager";

class NavBar extends Component {

    state = {
        username: ""
    }

    logOut = evt => {
        evt.preventDefault()
        sessionStorage.removeItem("userInfo")
        this.props.history.push('/')
    }

    componentDidMount() {
        UserManager.getAll().then((users) => {
            const userId = sessionStorage.getItem("userInfo")
            const foundUser = users.find(user => parseInt(user.id) === parseInt(userId))
            if (foundUser) {
                const username = foundUser.username
                this.setState({
                    username: username
                })
            }
        })
    }

    render() {
        return (
            <Navbar color="" light expand="md">
                <NavLink>
                    <Button tag={Link} to="/SelectTakeQuiz">Take A Quiz</Button>
                    <Button tag={Link} to="/CreateQuiz">Create A Quiz</Button>
                    <Button tag={Link} to="/SelectEditQuiz">Edit A Quiz</Button>
                    <span className="logout_button">
                        <Button onClick={this.logOut} >Logout</Button>
                    </span>
                    <p>Logged in as {`${this.state.username}`}</p>
                </NavLink>
            </Navbar>
        )
    }
}

export default withRouter(NavBar)