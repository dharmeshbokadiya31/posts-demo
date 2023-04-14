export const fetchUserData = (user) =>
    new Promise((resolve, reject) => {
        fetch('https://dummyjson.com/auth/login', {
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

