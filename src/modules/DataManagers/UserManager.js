import Settings from "./Settings"

export default {
    get(id) {
        return fetch(`${Settings.remoteURL}/users/${id}`).then(r => r.json())
    },
    delete(id) {
        return fetch(`${Settings.remoteURL}/users/${id}`, {
            "method": "DELETE"
        }).then(r => r.json())
    },
    getAll() {
        return fetch(`${Settings.remoteURL}/users`).then(e => e.json())
    },
    post(newUser) {
        return fetch(`${Settings.remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(r => r.json())
    }

}