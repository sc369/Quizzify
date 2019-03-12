import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Navbar, NavLink, NavItem, Button } from 'reactstrap'


export default class NavBar extends Component {
    render() {
        return (
            <Navbar color="" light expand="md">
                <NavLink>
                    <Button tag={Link} to="/TakeQuiz">Take A Quiz</Button>
                    <Button tag={Link} to="/CreateQuiz">Create A Quiz</Button>
                    <Button tag={Link} to="/EditQuiz">Edit A Quiz</Button>
                </NavLink>
            </Navbar>
        )

    }
}
