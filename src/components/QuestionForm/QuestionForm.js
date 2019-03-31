
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"
import "./QuestionForm.css"

export default class QuestionForm extends Component {

    state = {
        questionText: "",
        answerOneText: "",
        answerOneCheck: false,
        answerTwoText: "",
        answerTwoCheck: false,
        answerThreeText: "",
        answerThreeCheck: false,
        answerFourText: "",
        answerFourCheck: false,
        quizId: this.props.match.params.quizId
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    handleCheckboxChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = !this.state[evt.target.id]
        this.setState(stateToChange);
    }

    createQandAs = evt => {
        evt.preventDefault();
        if (this.state.answerOneCheck === false && this.state.answerTwoCheck === false && this.state.answerThreeCheck === false && this.state.answerFourCheck === false) {
            window.alert("Please select at least one correct answer")
        } else if (this.state.answerOneCheck === true && this.state.answerTwoCheck === true && this.state.answerThreeCheck === true && this.state.answerFourCheck === true) {
            window.alert("Please select at least one incorrect answer")
        } else {
            const question = {
                text: this.state.questionText,
                quizId: this.state.quizId
            }
            this.props
                .addQuestion(question)
                .then((newQuestionId) => {

                    const answerOne = {
                        text: this.state.answerOneText,
                        questionId: newQuestionId,
                        correct: this.state.answerOneCheck,
                        quizId: this.state.quizId
                    }
                    this.props.addAnswer(answerOne).then(() => {

                        const answerTwo = {
                            text: this.state.answerTwoText,
                            questionId: newQuestionId,
                            correct: this.state.answerTwoCheck,
                            quizId: this.state.quizId
                        }
                        this.props.addAnswer(answerTwo)
                    }).then(() => {
                        const answerThree = {
                            text: this.state.answerThreeText,
                            questionId: newQuestionId,
                            correct: this.state.answerThreeCheck,
                            quizId: this.state.quizId
                        }
                        this.props.addAnswer(answerThree)
                    }).then(() => {

                        const answerFour = {
                            text: this.state.answerFourText,
                            questionId: newQuestionId,
                            correct: this.state.answerFourCheck,
                            quizId: this.state.quizId
                        }
                        this.props.addAnswer(answerFour)
                    }).then(() => {
                        this.props.refreshQandA()

                    })


                })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label for="questionText">Question</Label>
                        <Input type="question" name="question" id="questionText" placeholder="Enter question text here" onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup check>
                        <Label for="answerOneText">Answer 1 </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="text" name="answerOneText" id="answerOneText" placeholder="Enter answer text here" onChange={this.handleFieldChange} />
                        <Input type="checkbox" name="answer" id="answerOneCheck" onChange={this.handleCheckboxChange} />{' '} Correct
                </FormGroup>
                    <FormGroup check>
                        <Label for="answerTwoText">Answer 2</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="text" name="answerTwoText" id="answerTwoText" placeholder="Enter answer text here" onChange={this.handleFieldChange} />
                        <Input type="checkbox" name="answer" id="answerTwoCheck" onChange={this.handleCheckboxChange} />{' '} Correct
                </FormGroup>
                    <FormGroup check>
                        <Label for="answerThreeText">Answer 3</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="text" name="answerThreeText" id="answerThreeText" placeholder="Enter answer text here" onChange={this.handleFieldChange} />
                        <Input type="checkbox" name="answer" id="answerThreeCheck" onChange={this.handleCheckboxChange} />{' '} Correct
                    </FormGroup>
                    <FormGroup check>
                        <Label for="answerFourText">Answer 4</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="answer" name="answerFourText" id="answerFourText" placeholder="Enter answer text here" onChange={this.handleFieldChange} />
                        <Input type="checkbox" name="answer" id="answerFourCheck" onChange={this.handleCheckboxChange} />{' '} Correct
                </FormGroup>
                    <FormGroup check>
                        <Button tag={Link} to="/">Return to Dashboard</Button>
                        <Button onClick={this.createQandAs}>Submit</Button>
                    </FormGroup>
                </Form>
            </React.Fragment >
        )
    }
}



