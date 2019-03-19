import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/questions/${id}`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/questions/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/questions`).then(e => e.json());
    },
    put(editedQuestion) {
        return fetch(`${Settings.remoteURL}/questions/${editedQuestion.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedQuestion)
        }).then(data => data.json());
    },
    post(newQuestion) {
        return fetch(`${Settings.remoteURL}/questions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newQuestion)
        }).then(data => data.json())
    }
}