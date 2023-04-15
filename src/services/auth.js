import { API_BASE_URL } from "../constants/constant";

export const fetchUserData = (user) =>
    new Promise((resolve, reject) => {
        fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(e => {
                reject(e);
            })
    })

