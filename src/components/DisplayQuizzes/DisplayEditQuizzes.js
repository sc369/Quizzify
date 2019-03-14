import React, { Component } from "react"
import Route from 'react-router-dom'
import { Link } from "react-router-dom";
import "./DisplayQuizzes.css"
import { Button } from 'reactstrap'



export default class DisplayEditQuizzes extends Component {

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                {
                    <article>
                        <div key={this.props.quiz.id} className="card"></div>
                        <div className="name"> {this.props.quiz.name} </div>
                        <div className="creator"> {`Created by ${this.props.quiz.user.username}`}</div>
                        <img src={this.props.quiz.img}></img>
                        <Button
                            // tag={Link} to={"/"}
                            onClick={() => this.props.deleteQuiz(this.props.quiz.id)
                                .then(() => this.props.history.push("/SelectEditQuiz"))
                            } >Delete Quiz</Button>
                        < Button tag={Link} to={`/EditQuiz/${this.props.quiz.id}`}>Select Quiz</Button>
                    </article>

                }
            </React.Fragment>

        )
    }

}