import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./DisplayQuizzes.css"
import { Button } from 'reactstrap'

export default class DisplayTakeQuizzes extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    <article className="quiz_container">
                        <div key={this.props.quiz.id} className="card"></div>
                        <div className="name"> {this.props.quiz.name} </div>
                        <div className="creator"> {`Created by ${this.props.quiz.user.username}`}</div>
                        <div>
                            <img src={this.props.quiz.img}></img>
                        </div>
                        <Button className="select_quiz_button" tag={Link} to={`/TakeQuiz/${this.props.quiz.id}`}>Select Quiz</Button>
                    </article>

                }
            </React.Fragment>

        )
    }

}