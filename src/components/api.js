
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

export function touchCardFromServ() {
    return fetch(`${config.baseUrl}/cards`,{
    method: `GET`,
    headers: config.headers
})
.then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
})
};

export function getUserInfo() {
    return fetch(`${config.baseUrl}/users/me`,{
    method: `GET`,
    headers: config.headers,
    body: null
})
.then(res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
})
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
.then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
})
};

export function cardDeleteItem(id) {
    return fetch(`${config.baseUrl}/cards/${id}`,{
    method: `DELETE`,
    headers: config.headers
})
.then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
})
};

export function cardAddLike(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`,{
    method: `PUT`,
    headers: config.headers
})
.then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
})
};

export function cardDeleteLike(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`,{
    method: `DELETE`,
    headers: config.headers
})
.then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
})
};

export function seeNewMe(name,about) {
    return fetch(`${config.baseUrl}/users/me`,{
    method: `PATCH`,
    headers: config.headers,
    body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
        })
})
.then(res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
})
};

export function seeNewAvatar(avatar) {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/users/me/avatar`,{
    method: `PATCH`,
    headers: config.headers,
    body: JSON.stringify({
        avatar: avatar
        })
})
.then(res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
})
};