
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"
import QuizManager from "../../modules/DataManagers/QuizManager";

export default class TakeQuiz extends Component {
    render() {
        const quiz = this.props.quizzes.find(quiz => quiz.id === parseInt(this.props.match.params.quizId)) || {}
        return (
            <React.Fragment>
                {/* <Input type="question" name="question" id="question" placeholder={`${quiz.name}`} /> */}
                <div>Question</div>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        {quiz.name}
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Answer
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Answer
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Answer
                    </Label>
                </FormGroup>
            </React.Fragment>

        )
    }
}