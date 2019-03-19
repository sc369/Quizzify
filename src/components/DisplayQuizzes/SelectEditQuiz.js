
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DisplayEditQuizzes from "./DisplayEditQuizzes"

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
        console.log(this.props)
        return (
            <React.Fragment>
                <article className="quizzes">
                    { //user can only edit their own quizzes
                        this.props.quizzes.filter(quiz => parseInt(quiz.userId) === parseInt(sessionStorage.userInfo))
                            .map(quiz =>
                                <DisplayEditQuizzes key={`quiz-${quiz.id}`}
                                    history={this.props.history}
                                    quiz={quiz}
                                    deleteQuiz={this.props.deleteQuiz}
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