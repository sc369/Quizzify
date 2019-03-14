import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class DisplayOneQuiz extends Component {
    render() {
        const quiz = this.props.quizzes.find(quiz => quiz.id === parseInt(this.props.match.params.quizId)) || {}
        console.log(quiz.user)
        return (
            <section className="quiz">
                <div key={quiz.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                        </h4>
                    </div>
                </div>
            </section>
        )
    }
}