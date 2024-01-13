
//__________________________________________________________________card function

export let user;
export function setID(id) {
    user = id;
};

const config = {
    baseUrl: `https://nomoreparties.co/v1/wbf-cohort-15`,
    headers: {
      authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
      "Content-Type": "application/json"
    }
};

function checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
}


export function getAllCards() {
    return fetch(`${config.baseUrl}/cards`,{
    method: `GET`,
    headers: config.headers
})
.then(checkResponse)
};

export function getUserInfo() {
    return fetch(`${config.baseUrl}/users/me`,{
    method: `GET`,
    headers: config.headers,
    body: null
})
.then(checkResponse)
};

export function addCardItem(name,link) {
    return fetch(`${config.baseUrl}/cards`,{
    method: `POST`,
    headers: config.headers,
    body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
})
.then(checkResponse)
};

export function deleteCardItem(id) {
    return fetch(`${config.baseUrl}/cards/${id}`,{
    method: `DELETE`,
    headers: config.headers
})
.then(checkResponse)
};

export function addCardLike(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`,{
    method: `PUT`,
    headers: config.headers
})
.then(checkResponse)
};

export function deleteCardLike(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`,{
    method: `DELETE`,
    headers: config.headers
})
.then(checkResponse)
};

export function updateProfileData(name,about) {
    return fetch(`${config.baseUrl}/users/me`,{
    method: `PATCH`,
    headers: config.headers,
    body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
        })
})
.then(checkResponse)
};

export function updateAvatar(avatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`,{
    method: `PATCH`,
    headers: config.headers,
    body: JSON.stringify({
        avatar: avatar
        })
})
.then(checkResponse)
};