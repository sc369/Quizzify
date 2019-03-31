import React, { Component } from "react"
import { Route } from "react-router-dom"
import QuestionForm from "./QuestionForm/QuestionForm"
import TakeQuiz from "./TakeQuiz/TakeQuiz"
import CreateQuiz from "./CreateQuiz/CreateQuiz"
import QuizManager from "../modules/DataManagers/QuizManager"
import SelectEditQuiz from "./DisplayQuizzes/SelectEditQuiz"
import UserManager from "../modules/DataManagers/UserManager"
import DisplayOneQuiz from "../components/DisplayQuizzes/DisplayOneQuiz"
import EditQuizForm from "../components/EditQuiz/EditQuizForm"
import SelectTakeQuiz from "./DisplayQuizzes/SelectTakeQuiz"
import AnswerManager from "../modules/DataManagers/AnswerManager"
import QuestionManager from "../modules/DataManagers/QuestionManager"
import UserAnswerManager from "../modules/DataManagers/UserAnswerManager"
import EditQuestionForm from "../components/EditQuiz/EditQuestionForm"
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

    addQuestion = (question) => {
        let newQuestionId = null
        return QuestionManager.post(question)
            .then((newQuestion) => {
                newQuestionId = newQuestion.id
                return QuestionManager.getAll()
            })
            .then(questions => {
                this.setState({
                    questions: questions
                })
                return newQuestionId
            })
    }

    addAnswer = (answer) => {
        return AnswerManager.post(answer)
            .then(() => AnswerManager.getAll)
            .then((answers) => {
                this.setState({
                    answers: answers
                })
            })
    }

    refreshQandA = () => {
        const newState = {}
        return QuestionManager.getAll()
            .then(questions => newState.questions = questions)
            .then(() => AnswerManager.getAll())
            .then(answers => newState.answers = answers)
            .then(() => this.setState(newState))

    }

    deleteQuestionAndAnswers = (questionId) => {
        // AnswerManager.getAll().then((answers) => {
        //     const answersToDelete = answers.filter(answer => answer.questionId === questionId)
        //     answersToDelete.forEach(answer => {
        //         AnswerManager.delete(answer.id)
        //     })
        //     QuestionManager.delete(questionId)
        // })

        return QuestionManager.delete(questionId).then(() => {
            const newState = {}
            QuestionManager.getAll()
                .then(questions => newState.questions = questions)
                .then(() => AnswerManager.getAll())
                .then(answers => newState.answers = answers)
                .then(() => this.setState(newState))
        })
    }

    addUserAnswer = userAnswer => {
        return UserAnswerManager.post(userAnswer)
            .then(() => UserAnswerManager.getAll())
            .then(userAnswers => {
                this.setState({
                    userAnswers: userAnswers
                })
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

    updateAnswer = (editedAnswer) => {
        return AnswerManager.put(editedAnswer)
            .then(() => AnswerManager.getAll())
            .then(answers => {
                this.setState({
                    answers: answers
                })
            })
    }
    updateQuestion = (editedQuestion) => {
        return QuestionManager.put(editedQuestion)
            .then(() => QuestionManager.getAll())
            .then(questions => {
                this.setState({
                    questions: questions
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

    deleteQuestionAndAnswers = (questionId) => {
        // AnswerManager.getAll().then((answers) => {
        //     const answersToDelete = answers.filter(answer => answer.questionId === questionId)
        //     answersToDelete.forEach(answer => {
        //         AnswerManager.delete(answer.id)
        //     })
        //     QuestionManager.delete(questionId)
        // })

        return QuestionManager.delete(questionId).then(() => {
            const newState = {}
            QuestionManager.getAll()
                .then(questions => newState.questions = questions)
                .then(() => AnswerManager.getAll())
                .then(answers => newState.answers = answers)
                .then(() => this.setState(newState))
        })
    }

    componentDidMount() {
        const newState = {}
        UserManager.getAll()
            .then(users => newState.users = users)

            .then(() => QuizManager.getAll())
            .then(quizzes => newState.quizzes = quizzes)
            .then(() => AnswerManager.getAll())
            .then(answers => newState.answers = answers)
            .then(() => QuestionManager.getAll())
            .then(questions => newState.questions = questions)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment >
                <Route path="/AddQ/:quizId(\d+)" render={(props) => {
                    return <QuestionForm {...props}
                        addQuestion={this.addQuestion}
                        addAnswer={this.addAnswer}
                        refreshQandA={this.refreshQandA}
                    />
                }} />

                < Route exact path="/quizzes/:quizId(\d+)" render={(props) => {
                    return <DisplayOneQuiz {...props}
                        quizzes={this.state.quizzes} />
                }} />

                < Route path="/EditQuestionForm/:quizId(\d+)/:questionIndex(\d+)" render={(props) => {
                    return <EditQuestionForm {...props}
                        updateQuestion={this.updateQuestion}
                        updateAnswer={this.updateAnswer}
                        addAnswer={this.addAnswer}
                        addQuestion={this.addQuestion}
                        quizzes={this.state.quizzes}
                        updateQuiz={this.updateQuiz}
                        deleteQuestionAndAnswers={this.deleteQuestionAndAnswers} />
                }} />
                < Route exact path="/EditQuiz/:quizId(\d+)" render={(props) => {
                    return <EditQuizForm {...props}
                        quizzes={this.state.quizzes}
                        updateQuiz={this.updateQuiz} />
                }} />
                < Route exact path="/TakeQuiz/:quizId(\d+)" render={(props) => {
                    return <TakeQuiz {...props}
                        addUserAnswer={this.addUserAnswer}
                        quizzes={this.state.quizzes}
                        answers={this.state.answers}
                        questions={this.state.questions}
                    />
                }} />
                < Route exact path="/CreateQuiz" render={(props) => {
                    return <CreateQuiz {...props}
                        addQuiz={this.addQuiz}
                        refreshQandA={this.refreshQandA} />
                }} />
                < Route path="/SelectTakeQuiz" render={(props) => {
                    return <SelectTakeQuiz
                        questions={this.state.questions}
                        answers={this.state.answers}
                        quizzes={this.state.quizzes}
                        refreshQandA={this.refreshQandA}
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

