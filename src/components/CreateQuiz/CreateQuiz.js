
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Quiz Name</Label>
                        <Input type="question" name="question" id="question" placeholder="Name of quiz" />
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
                <Button tag={Link} to="/AddQ">Submit and Add Questions</Button>
            </React.Fragment>
        )
    }
}






