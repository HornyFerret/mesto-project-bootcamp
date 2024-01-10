//для отобрадения меня как пользователя
fetch('https://nomoreparties.co/v1/wbf-cohort-15/users/me',{
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451'
    }
})
.then(res => res.json())
.then((result) => {
  //console.log(result);
});

//для отобрадения новых карточек(предзагружзеных), вместо массива
fetch('https://nomoreparties.co/v1/wbf-cohort-15/cards',{
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451'
    }
})
.then(res => res.json())
.then((result) => {
  //console.log(result);
});


fetch('https://nomoreparties.co/v1/wbf-cohort-15/users/me',{
    method: 'PATCH',
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'im',
        about: 'gay'
      })
})
.then(res => res.json())
.then((result) => {
  //console.log(result);
});


fetch('https://nomoreparties.co/v1/wbf-cohort-15/cards',{
    method: 'POST',
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Loli',
        link: 'https://img2.reactor.cc/pics/post/Anime-девушка-красивые-картинки-Anime-Original-1135748.jpeg'
      })
})
.then(res => res.json())
.then((result) => {
  //console.log(result);
});

//card function
export let user;
export function setID(id) {
    user = id;
} ;

export function cardFromServ() {
    fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards`,{
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
}

export function whoAreU() {
    fetch(`https://nomoreparties.co/v1/wbf-cohort-15/users/me`,{
    method: `GET`,
    headers: {
        authorization: 'f242fa5c-fb40-413f-b404-5d6d6d13f451',
        'Content-Type': 'application/json'
    }
})
.then(res => {
    if (res.ok) return res.json();
    console.log(res.name);
})
.catch(err => {
    console.log("Problem",err);
})
}

export function cardAddItem(name,link) {
    fetch('https://nomoreparties.co/v1/wbf-cohort-15/cards',{
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
}

export function cardDeleteItem(id) {
    fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards/${id}`,{
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
}

export function cardAddLike(id) {
    fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards/likes/${id}`,{
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
}

export function cardDeleteLike(id) {
    fetch(`https://nomoreparties.co/v1/wbf-cohort-15/cards/likes/${id}`,{
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
}