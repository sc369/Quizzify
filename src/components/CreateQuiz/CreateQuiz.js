
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class CreateQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

    state = {
        name: "",
        userId: "",
        public: true
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createQuiz = evt => {
        evt.preventDefault();
        {
            const quiz = {
                name: this.state.name,
                userId: "1",
                public: true
            }
            this.props
                .addQuiz(quiz)
                .then((newQuizId) => this.props.history.push(`/addQ/${newQuizId}`))
        }
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Quiz Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name of quiz" onChange={this.handleFieldChange} />
                    </FormGroup>
                </Form>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Select a category
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
                </Dropdown>


                <Button type="submit" onClick={this.createQuiz} >Submit and Add Questions</Button>
            </React.Fragment>
        )
    }
}






