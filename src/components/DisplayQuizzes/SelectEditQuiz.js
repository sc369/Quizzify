
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

            </React.Fragment>
        )
    }
}