
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "./CreateQuiz.css"


export default class CreateQuiz extends Component {
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
        public: true,
        img: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createQuiz = evt => {
        evt.preventDefault()
        {
            const quiz = {
                name: this.state.name,
                userId: sessionStorage.getItem("userInfo"),
                public: true,
                img: this.state.img
            }
            this.props
                .addQuiz(quiz)
                .then((newQuizId) => this.props.history.push(`/addQ/${newQuizId}`))
                .then(() => {
                    this.props.refreshQandA()
                })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <article className="form-container">
                        <FormGroup className="form">
                            <Label for="name" className="name_label">Quiz Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Name of quiz" onChange={this.handleFieldChange} />
                            <Label for="img" className="img_label">Image URL</Label>
                            <Input type="text" name="img" id="img" placeholder="URL" onChange={this.handleFieldChange} />
                            <Button className="submit_create_quiz_button" type="submit" onClick={this.createQuiz} >Submit and Add Questions</Button>
                        </FormGroup>
                    </article>
                </Form>

            </React.Fragment>
        )
    }
}






