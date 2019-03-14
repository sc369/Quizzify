import React, { Component } from "react"
import { Route } from "react-router-dom"
import QuestionForm from "./QuestionForm/QuestionForm"
import TakeQuiz from "./TakeQuiz/TakeQuiz"
import CreateQuiz from "./CreateQuiz/CreateQuiz"
import DisplayQuestions from "./DisplayQuestions/DisplayQuestions"
import QuizManager from "../modules/DataManagers/QuizManager"
import SelectEditQuiz from "./DisplayQuizzes/SelectEditQuiz"
import UserManager from "../modules/DataManagers/UserManager"
import DisplayOneQuiz from "../components/DisplayQuizzes/DisplayOneQuiz"
import EditQuizForm from "../components/EditQuiz/EditQuizForm"
import SelectTakeQuiz from "./DisplayQuizzes/SelectTakeQuiz"

export default class ApplicationViews extends Component {

    state = {
        quizzes: [],
        users: [],
        questions: [],
        answers: []
    }

    addQuiz = quiz => {
        let newQuizId = null
        return QuizManager.post(quiz)
            .then((newQuiz) => {
                newQuizId = newQuiz.id
                return QuizManager.getAll()
            })
            .then(quizzes => {
                this.setState({
                    quizzes: quizzes
                })
                return newQuizId
            })
    }

    updateQuiz = (editedQuiz) => {
        return QuizManager.put(editedQuiz)
            .then(() => QuizManager.getAll())
            .then(quizzes => {
                this.setState({
                    quizzes: quizzes
                })
            })
    }

    deleteQuiz = quizId => {
        return QuizManager.delete(quizId)
            .then(QuizManager.getAll)
            .then(quizzes => this.setState({
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

    getAllQuizzes() {
        const newState = {}
        QuizManager.getAll()
            .then(quizzes => newState.quizzes = quizzes)
            .then(() => this.setState(newState))
    }

    render() {
        const takeOrEdit = "take"
        return (
            <React.Fragment >
                <Route exact path="/AddQ" render={() => {
                    return <QuestionForm />
                }} />
                {/* <Route exact path="/DisplayQuizzes" render={(props) => {
                    return <DisplayQuizzes quizzes={this.state.quizzes} />
                }} /> */}
                < Route exact path="/DisplayQuestions" render={(props) => {
                    return <DisplayQuestions />
                }} />
                < Route exact path="/quizzes/:quizId(\d+)" render={(props) => {
                    return <DisplayOneQuiz {...props}
                        quizzes={this.state.quizzes} />
                }} />

                < Route exact path="/EditQuiz/:quizId(\d+)" render={(props) => {
                    return <EditQuizForm {...props}
                        quizzes={this.state.quizzes}
                        updateQuiz={this.updateQuiz} />
                }} />
                < Route exact path="/TakeQuiz/:quizId(\d+)" render={(props) => {
                    return <TakeQuiz quizzes={this.state.quizzes}
                        answers={this.state.answers}
                        questions={this.state.questions}
                    />
                }} />
                < Route exact path="/CreateQuiz" render={(props) => {
                    return <CreateQuiz {...props}
                        addQuiz={this.addQuiz} />
                }} />
                < Route exact path="/SelectTakeQuiz" render={(props) => {
                    return <SelectTakeQuiz quizzes={this.state.quizzes}
                    />
                }} />
                < Route exact path="/SelectEditQuiz" render={(props) => {
                    return <SelectEditQuiz quizzes={this.state.quizzes}
                        deleteQuiz={this.deleteQuiz}
                        getAllQuizzes={this.getAllQuizzes}
                        {...props}
                    />
                }} />
            </React.Fragment >

        )
    }
}

