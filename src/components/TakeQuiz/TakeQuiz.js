
import React, { Component } from "react"
import { Button, FormGroup, Label, Input } from 'reactstrap'
import AnswerManager from "../../modules/DataManagers/AnswerManager";

export default class TakeQuiz extends Component {

    state = {
        quizId: [],
        thisQuizQuestions: [],
        currentQuestionIndex: [],
        theseAnswers: [],
        answers: [],
        correctAnswers: 0
    }

    componentDidMount() {
        const quiz = this.props.quizzes.find(quiz => quiz.id === parseInt(this.props.match.params.quizId)) || {};
        const firstQuestion = this.props.questions.filter(question => parseInt(question.quizId) === parseInt(quiz.id))[0]

        this.setState({
            quizId: quiz.id,
            currentQuestionIndex: 0,
            thisQuizQuestions: this.props.questions.filter(question => parseInt(question.quizId) === parseInt(quiz.id)),
            answers: this.props.answers,
            theseAnswers: this.props.answers.filter(answer => parseInt(answer.questionId) === firstQuestion.id),
            chosen_answer: "none"
        })
    }

    nextQuestion = (questionId, answerId) => {
        this.createUserAnswer(questionId, answerId)
        AnswerManager.get(answerId).then((answer) => {
            if (answer.correct === true) {
                this.setState({
                    correctAnswers: this.state.correctAnswers + 1
                })
            }
        }).then(() => {

            if (this.state.thisQuizQuestions[this.state.currentQuestionIndex + 1] !== undefined) {
                this.setState({
                    chosen_answer: "none",
                    theseAnswers: this.props.answers.filter(answer => answer.questionId === this.state.thisQuizQuestions[this.state.currentQuestionIndex + 1].id),
                    currentQuestionIndex: this.state.currentQuestionIndex + 1,

                })


            } else if (this.state.correctAnswers === 1) {
                window.alert(`You got 1 answer correct out of ${this.state.thisQuizQuestions.length}`)
            } else {
                window.alert(`You got ${this.state.correctAnswers} answers correct out of ${this.state.thisQuizQuestions.length}`)
                this.props.history.push('/SelectTakeQuiz')
            }
        })
    }

    createUserAnswer = (questionId, answerId) => {
        {
            const userAnswerObj = {
                answerId: parseInt(answerId),
                userId: parseInt(sessionStorage.getItem("userInfo")),
                questionId: questionId
            }
            console.log(userAnswerObj)
            this.props.addUserAnswer(userAnswerObj)
        }
    }
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        let currentQuestion = (this.state.thisQuizQuestions[this.state.currentQuestionIndex])

        return (
            <React.Fragment>
                {(this.state.thisQuizQuestions[this.state.currentQuestionIndex] !== undefined) ?

                    <section className="QandA">
                        <div>{currentQuestion.text}</div>
                        {this.state.theseAnswers.map(answer =>
                            <div key={answer.id}>
                                <FormGroup check>
                                    <Label for="chosen_answer" check>
                                        <Input type="radio" name="radio1" id="chosen_answer" value={answer.id} onChange={this.handleFieldChange} />{' '}
                                        {answer.text}
                                    </Label>
                                </FormGroup>
                            </div>
                        )}
                        <Button type="submit" onClick={() => this.state.chosen_answer !== "none" ?
                            this.nextQuestion(currentQuestion.id, parseInt(this.state.chosen_answer))

                            : window.alert("Please select an answer")
                        }>
                            Next Question</Button>
                    </section>

                    : ""
                }
            </React.Fragment>


        )
    }
}