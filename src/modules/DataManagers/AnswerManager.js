import Settings from "./Settings";

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/answers/${id}`).then(e => e.json());
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/answers/${id}`, {
            "method": "DELETE"
        }).then(e => e.json());
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/answers`).then(e => e.json());
    },
    put(editedAnswer) {
        return fetch(`${Settings.remoteURL}/answers/${editedAnswer.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedAnswer)
        }).then(data => data.json());
    },
    post(newAnswer) {
        return fetch(`${Settings.remoteURL}/answers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnswer)
        }).then(data => data.json())
    }
}