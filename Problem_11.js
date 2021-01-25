const {get} = require("http");
const fetch = require("node-fetch");
const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers(){
    try{
        let res = await fetch(url);
        return await res.json();
    }catch(error){
        console.log(error);
    }
}

async function renderUsers(){
    let users = await getUsers();
    users.map(user => {
        console.log(`${user.name}`);
    });
}
renderUsers();