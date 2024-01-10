

//для отобрадения меня как пользователя
fetch('https://nomoreparties.co/v1/wbf-cohort-15/users/me',{
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451'
    }
})
.then(res => res.json())
.then((result) => {
//   console.log(result);
});

//для отобрадения новых карточек(предзагружзеных), вместо массива
fetch('https://nomoreparties.co/v1/wbf-cohort-15/cards',{
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451'
    }
})
.then(res => res.json())
.then((result) => {
//   console.log(result);
});


// fetch('https://nomoreparties.co/v1/wbf-cohort-15/users/me',{
//     method: 'PATCH',
//     headers: {
//         authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'im',
//         about: 'gay'
//       })
// })
// .then(res => res.json())
// .then((result) => {
//   //console.log(result);
// });

// fetch('https://nomoreparties.co/v1/wbf-cohort-15/cards',{
//     method: 'POST',
//     headers: {
//         authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'gg',
//         link: 'https://pachca-prod-uploads.s3.storage.selcloud.ru/attaches/files/300137/8948124a-f542-40b7-ad98-0ec02e2f08ea/image.png?response-cache-control=max-age%3D3600%3B&response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=142155_staply%2F20240110%2Fru-1a%2Fs3%2Faws4_request&X-Amz-Date=20240110T102359Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9a285f173f7990b109370ede668b4a48e4da303a248c1a0528e3adfb35274e65'
//       })
// })
// .then(res => res.json())
// .then((result) => {
//   //console.log(result);
// });



//__________________________________________________________________card function

export let user;
export function setID(id) {
    user = id;
};

export function cardFromServ() {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards`,{
    method: `GET`,
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    }
})
.then(res => {
    if (res.ok) return res.json();
})
.catch(err => {
    console.log("Problem",err);
})
};

export function whoAreU() {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/users/me`,{
    method: `GET`,
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    },
    body: null
})
.then(res => {
    if (res.ok) {
        return res.json();
    }
})
.catch(err => {
    console.log("Problem",err);
})
};

export function cardAddItem(name,link) {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-15/cards',{
    method: `POST`,
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
})
.then(res => {
    if (res.ok) return res.json();
})
.catch(res => {
    console.log("Problem",res);
})
};

export function cardDeleteItem(id) {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards/${id}`,{
    method: `DELETE`,
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    }
})
.then(res => {
    if (res.ok) return res.json();
})
.catch(err => {
    console.log("Problem",err);
})
};



export function cardAddLike(id) {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards/likes/${id}`,{
    method: `PUT`,
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    }
})
.then(res => {
    if (res.ok) return res.json();
})
.catch(err => {
    console.log("Problem",err);
})
};

export function cardDeleteLike(id) {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards/likes/${id}`,{
    method: `DELETE`,
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    }
})
.then(res => {
    if (res.ok) return res.json();
})
.catch(err => {
    console.log("Problem",err);
})
};

export function newMe(name,about) {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/users/me`,{
    method: `PATCH`,
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
        })
})
.then(res => {
    if (res.ok) {
        return res.json();
    }
})
.catch(err => {
    console.log("Problem",err);
})
};

export function newAvatar(avatar) {
    return fetch(`https://nomoreparties.co/v1/wbf-cohort-15/users/me/avatar`,{
    method: `PATCH`,
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        avatar: avatar
        })
})
.then(res => {
    if (res.ok) {
        return res.json();
    }
})
.catch(err => {
    console.log("Problem",err);
})
};