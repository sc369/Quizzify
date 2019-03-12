
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"

export default class TakeQuiz extends Component {
    render() {
        return (
            <React.Fragment>
                <div>Question</div>
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