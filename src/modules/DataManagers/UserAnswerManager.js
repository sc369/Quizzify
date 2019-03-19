import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/userAnswers/${id}`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/userAnswers/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/userAnswers`).then(e => e.json());
    },
    post(newUserAnswer) {
        return fetch(`${Settings.remoteURL}/userAnswers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserAnswer)
        }).then(data => data.json())
    }
}