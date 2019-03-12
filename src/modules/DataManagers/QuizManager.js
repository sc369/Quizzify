import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/quizzes/${id}?_expand=user`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/quizzes/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/quizzes?_expand=user`).then(e => e.json());
    },
    put(editedQuiz) {
        return fetch(`${Settings.remoteURL}/quizzes/${editedQuiz.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedQuiz)
        }).then(data => data.json());
    },
    post(newQuiz) {
        return fetch(`${Settings.remoteURL}/quizzes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuiz)
        }).then(data => data.json())
    }
}