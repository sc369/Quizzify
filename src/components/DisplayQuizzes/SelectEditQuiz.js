
import React, { Component } from "react"
import DisplayEditQuizzes from "./DisplayEditQuizzes"

export default class EditQuiz extends Component {

    render() {
        return (
            <React.Fragment>
                <article className="quizzes">
                    { //user can only edit their own quizzes
                        this.props.quizzes.filter(quiz => parseInt(quiz.userId) === parseInt(sessionStorage.userInfo))
                            .map(quiz =>
                                <DisplayEditQuizzes key={`quiz-${quiz.id}`}
                                    history={this.props.history}
                                    quiz={quiz}
                                    deleteQuiz={this.props.deleteQuiz}
                                />
                            )
                    }
                </article>

            </React.Fragment>
        )
    }
}