
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"
import "./QuestionForm.css"

export default class QuestionForm extends Component {

    state = {
        questionText: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        debugger;
        this.setState(stateToChange);
    }

    createQuestion = evt => {
        evt.preventDefault()
        const question = {
            questionText: this.state.questionText
        }
        this.props
            .createQuestion(question)
            .then(() => {
                this.props.history.push("/AddQ")
            })
    }
    render() {
        return (
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Question</Label>
                        <Input type="question" name="question" id="question" placeholder="Enter question text here" />
                    </FormGroup>
                    <FormGroup check>
                        <Label for="exampleEmail">Answer 1  </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="text" name="answer" id="answer" placeholder="Enter answer text here" />
                        <Input type="checkbox" name="answer" id="answer" />{' '} Correct
                </FormGroup>
                    <FormGroup check>
                        <Label for="exampleEmail">Answer 2</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="text" name="answer" id="answer" placeholder="Enter answer text here" />
                        <Input type="checkbox" name="answer" id="answer" />{' '} Correct
                </FormGroup>
                    <FormGroup check>
                        <Label for="exampleEmail">Answer 3</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="text" name="answer" id="answer" placeholder="Enter answer text here" />
                        <Input type="checkbox" name="answer" id="answer" />{' '} Correct
                    </FormGroup>
                    <FormGroup check>
                        <Label for="exampleEmail">Answer 4</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="answer" name="answer" id="answer" placeholder="Enter answer text here" />
                        <Input type="checkbox" name="answer" id="answer" />{' '} Correct
                </FormGroup>
                    <FormGroup check>
                        <Button tag={Link} to="/">Return to Dashboard</Button>
                        <Button tag={Link} to="/AddQ">Next Question</Button>
                    </FormGroup>
                </Form>
            </React.Fragment >
        )
    }
}



