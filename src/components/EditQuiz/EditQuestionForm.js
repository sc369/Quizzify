
import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from "react-router-dom"
import QuestionManager from "../../modules/DataManagers/QuestionManager"
import AnswerManager from "../../modules/DataManagers/AnswerManager";

export default class EditQuestionForm extends Component {

    state = {
        thisQuizQuestions: [],
        currentQuestionIndex: 0,
        questionText: "",
        answerOneText: "",
        answerOneCheck: false,
        answerOneId: "",
        answerTwoText: "",
        answerTwoCheck: false,
        answerTwoId: "",
        answerThreeText: "",
        answerThreeCheck: false,
        answerThreeId: "",
        answerFourText: "",
        answerFourCheck: false,
        answerFourId: "",
        quizId: this.props.match.params.quizId
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    handleCheckboxChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = !this.state[evt.target.id]
        this.setState(stateToChange);
    }

    componentDidMount() {
        console.log("called")
        QuestionManager.getAll()
            .then((questions) => {
                const thisQuizQuestions = questions.filter(question => parseInt(question.quizId) === parseInt(this.props.match.params.quizId))
                const selectedQuestion = (thisQuizQuestions[this.state.currentQuestionIndex])
                AnswerManager.getAll()
                    .then((answers) => {
                        const selectedQuestionAnswers = answers.filter(answer => answer.questionId === selectedQuestion.id)
                        this.setState({
                            thisQuizQuestions: thisQuizQuestions,
                            questionText: selectedQuestion.text,
                            questionId: selectedQuestion.id,
                            answerOneText: selectedQuestionAnswers[0].text,
                            answerOneCheck: selectedQuestionAnswers[0].correct,
                            answerOneId: selectedQuestionAnswers[0].id,
                            answerTwoText: selectedQuestionAnswers[1].text,
                            answerTwoCheck: selectedQuestionAnswers[1].correct,
                            answerTwoId: selectedQuestionAnswers[1].id,
                            answerThreeText: selectedQuestionAnswers[2].text,
                            answerThreeCheck: selectedQuestionAnswers[2].correct,
                            answerThreeId: selectedQuestionAnswers[2].id,
                            answerFourText: selectedQuestionAnswers[3].text,
                            answerFourCheck: selectedQuestionAnswers[3].correct,
                            answerFourId: selectedQuestionAnswers[3].id,
                        })
                    })
            })
    }
    incrementQuestionIndex = () => {
        this.setState({
            currentQuestionIndex: parseInt(this.state.currentQuestionIndex) + 1
        })
        this.props.history.push(`/EditQuestionForm/${this.props.match.params.quizId}/${parseInt(this.state.currentQuestionIndex)}`)

    }

    editQandAs = evt => {
        evt.preventDefault();
        if (this.state.answerOneCheck === false && this.state.answerTwoCheck === false && this.state.answerThreeCheck === false && this.state.answerFourCheck === false) {
            window.alert("Please select at least one correct answer")
        } else if (this.state.answerOneCheck === true && this.state.answerTwoCheck === true && this.state.answerThreeCheck === true && this.state.answerFourCheck === true) {
            window.alert("Please select at least one incorrect answer")
        } else {
            const question = {
                text: this.state.questionText,
                quizId: this.state.quizId,
                id: this.state.questionId
            }
            this.props.updateQuestion(question)

            const answerOne = {
                text: this.state.answerOneText,
                questionId: this.state.questionId,
                id: this.state.answerOneId,
                correct: this.state.answerOneCheck,
                quizId: this.state.quizId
            }
            this.props.updateAnswer(answerOne)

            const answerTwo = {
                text: this.state.answerTwoText,
                id: this.state.answerTwoId,
                questionId: this.state.questionId,
                correct: this.state.answerTwoCheck,
                quizId: this.state.quizId
            }
            this.props.updateAnswer(answerTwo)

            const answerThree = {
                text: this.state.answerThreeText,
                id: this.state.answerThreeId,
                questionId: this.state.questionId,
                correct: this.state.answerThreeCheck,
                quizId: this.state.quizId
            }
            this.props.updateAnswer(answerThree)

            const answerFour = {
                text: this.state.answerFourText,
                id: this.state.answerFourId,
                questionId: this.state.questionId,
                correct: this.state.answerFourCheck,
                quizId: this.state.quizId
            }
            this.props.updateAnswer(answerFour).then(() => {
                console.log("hi")
                console.log(this.state.currentQuestionIndex)
                this.setState({
                    currentQuestionIndex: parseInt(this.state.currentQuestionIndex) + 1
                })
                this.componentDidMount()
                this.props.history.push(`/EditQuestionForm/${this.props.match.params.quizId}/${parseInt(this.state.currentQuestionIndex)}`)
            })
        }
    }

    render() {
        console.log(this.props)
        return (
            <React.Fragment >
                <Form autocomplete="off">
                    <FormGroup>
                        <Label for="questionText">Question</Label>
                        <Input type="question" name="question" id="questionText" value={this.state.questionText} onChange={this.handleFieldChange} />
                    </FormGroup>
                    <FormGroup check>
                        <Label for="answerOneText">Answer 1 </Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="text" name="answerOneText" id="answerOneText" value={this.state.answerOneText} onChange={this.handleFieldChange} />
                        <Input type="checkbox" name="answer" id="answerOneCheck" checked={this.state.answerOneCheck} onChange={this.handleCheckboxChange} />{' '} Correct
                </FormGroup>
                    <FormGroup check>
                        <Label for="answerTwoText">Answer 2</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="text" name="answerTwoText" id="answerTwoText" value={this.state.answerTwoText} onChange={this.handleFieldChange} />
                        <Input type="checkbox" name="answer" id="answerTwoCheck" checked={this.state.answerTwoCheck} onChange={this.handleCheckboxChange} />{' '} Correct
                </FormGroup>
                    <FormGroup check>
                        <Label for="answerThreeText">Answer 3</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="text" name="answerThreeText" id="answerThreeText" value={this.state.answerThreeText} onChange={this.handleFieldChange} />
                        <Input type="checkbox" name="answer" id="answerThreeCheck" checked={this.state.answerThreeCheck} onChange={this.handleCheckboxChange} />{' '} Correct
                    </FormGroup>
                    <FormGroup check>
                        <Label for="answerFourText">Answer 4</Label>
                    </FormGroup>
                    <FormGroup check inline>
                        <Input className="question_input" type="answer" name="answerFourText" id="answerFourText" value={this.state.answerFourText} onChange={this.handleFieldChange} />
                        <Input type="checkbox" name="answer" id="answerFourCheck" checked={this.state.answerFourCheck} onChange={this.handleCheckboxChange} />{' '} Correct
                </FormGroup>
                    <FormGroup check>
                        <Button tag={Link} to="/SelectTakeQuiz">Return to Dashboard</Button>
                        <Button onClick={this.editQandAs}>Submit and Next Question</Button>
                        <Button
                            onClick={() => this.props.deleteQuestionAndAnswers(this.state.questionId)
                                .then(() => this.incrementQuestionIndex())
                            } >Delete Question</Button>
                    </FormGroup>
                </Form>
            </React.Fragment >
        )
    }
}



