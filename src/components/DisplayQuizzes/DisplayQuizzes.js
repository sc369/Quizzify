import React, { Component } from "react"
import Route from 'react-router-dom'
import { Link } from "react-router-dom";


export default class DisplayQuizzes extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    <article>
                        <div key={this.props.quiz.id} className="card"></div>
                        <div className="name"> {this.props.quiz.name} </div>
                        <div className="creator"> {`Created by ${this.props.quiz.user.username}`}</div>
                        <div className="img"> {this.props.quiz.img}</div>
                    </article>

                }
            </React.Fragment>

        )
    }

}