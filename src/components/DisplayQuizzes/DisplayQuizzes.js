import React, { Component } from "react"
import Route from 'react-router-dom'
import { Link } from "react-router-dom";
import "./DisplayQuizzes.css"



export default class DisplayQuizzes extends Component {

    render() {
        console.log(this.props.quiz)
        return (
            <React.Fragment>
                {
                    <article>
                        <div key={this.props.quiz.id} className="card"></div>
                        <div className="name"> {this.props.quiz.name} </div>
                        <div className="creator"> {`Created by ${this.props.quiz.user.username}`}</div>
                        <img src={this.props.quiz.img}></img>
                    </article>

                }
            </React.Fragment>

        )
    }

}