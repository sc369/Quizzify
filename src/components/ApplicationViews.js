import React, { Component } from "react"
import { Route } from "react-router-dom"
import QuestionForm from "./QuestionForm/QuestionForm"
import TakeQuiz from "./TakeQuiz/TakeQuiz"
import CreateQuiz from "./CreateQuiz/CreateQuiz"
import EditQuiz from "./EditQuiz/EditQuiz"
import DisplayQuizzes from "./DisplayQuizzes/DisplayQuizzes"
import DisplayQuestions from "./DisplayQuestions/DisplayQuestions"
import QuizManager from "../modules/DataManagers/QuizManager"
import UserManager from "../modules/DataManagers/UserManager"


export default class ApplicationViews extends Component {

    state = {
        quizzes: [],
        users: []
    }

    addQuiz = quiz => {
        return QuizManager.post(quiz)
            .then(() => QuizManager.getAll())
            .then(quizzes =>
                this.setState({
                    quizzes: quizzes
                })
            )
    }
    componentDidMount() {
        const newState = {}

        UserManager.getAll()
            .then(users => newState.users = users)

            .then(() => QuizManager.getAll())
            .then(quizzes => newState.quizzes = quizzes)

            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/AddQ" render={() => {
                    return <QuestionForm />
                }} />
                {/* <Route exact path="/DisplayQuizzes" render={(props) => {
                    return <DisplayQuizzes quizzes={this.state.quizzes} />
                }} /> */}
                <Route exact path="/DisplayQuestions" render={(props) => {
                    return <DisplayQuestions />
                }} />
                <Route exact path="/TakeQuiz" render={(props) => {
                    return <TakeQuiz />
                }} />
                <Route exact path="/CreateQuiz" render={(props) => {
                    return <CreateQuiz />
                }} />
                <Route exact path="/EditQuiz" render={(props) => {
                    return <EditQuiz quizzes={this.state.quizzes} />
                }} />
            </React.Fragment>

        )
    }
}

