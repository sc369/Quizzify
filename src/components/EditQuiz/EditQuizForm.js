import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import QuizManager from "../../modules/DataManagers/QuizManager"

export default class EditQuizForm extends React.Component {

    state = {
        // name: `${quiz.name}`
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

    editQuiz = evt => {
        evt.preventDefault()
        {
            const quiz = {
                id: this.props.match.params.quizId,
                img: this.state.img,
                name: this.state.name,
                userId: "1",
                public: true
            }
            this.props.updateQuiz(quiz)
                .then(() => this.props.history.push(`/EditQuestionForm/${this.props.match.params.quizId}/0`))
        }
    }
    componentDidMount() {
        QuizManager.get(this.props.match.params.quizId)
            .then(quiz => {
                this.setState({
                    name: quiz.name,
                    public: true,
                    userId: "1",
                    img: quiz.img
                })
            })
    }

    render() {
        const quiz = this.props.quizzes.find(quiz => quiz.id === parseInt(this.props.match.params.quizId)) || {}
        return (
            <section className="quiz">
                <div key={quiz.id} className="card">
                    <div className="card-body">
                        {(quiz.hasOwnProperty('user')) ?
                            <div>
                                <img src={quiz.img}></img>
                                Created by {quiz.user.username}
                            </div> :
                            ""
                        }
                        <h4 className="card-title">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Edit Quiz Name</Label>
                                    <Input type="text" name="name" id="name" value={`${quiz.name}`} onChange={this.handleFieldChange} />
                                    <Label for="exampleEmail">Edit Image URL</Label>
                                    <Input type="text" name="img" id="img" value={`${this.state.img}`} onChange={this.handleFieldChange} />
                                    <Button type="submit" onClick={this.editQuiz} >Submit and Edit Questions</Button>
                                </FormGroup>
                            </Form>
                        </h4>
                    </div>
                </div>
            </section>
        )
    }
}