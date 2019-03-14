
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DisplayTakeQuizzes from "./DisplayTakeQuizzes"

export default class EditQuiz extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

    render() {
        console.log(this.props.quizzes)
        return (
            <React.Fragment>
                <article className="quizzes">
                    {
                        this.props.quizzes.map(quiz =>
                            <DisplayTakeQuizzes key={`quiz-${quiz.id}`}
                                quiz={quiz}
                            />
                        )
                    }
                </article>

                {/* {
                    this.props.quizzes.map(quiz =>
                        <article>
                            <div key={quiz.id} className="card"></div>
                            <div className="name"> {quiz.name} </div>
                            <div className="creator">{quiz.user.username}</div>
                        </article>
                    )
                } */}

                {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Select a quiz
        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem>Some Action</DropdownItem>
                        <DropdownItem disabled>Action (disabled)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}
            </React.Fragment>
        )
    }
}