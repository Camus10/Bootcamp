let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : "Sincere@april.biz",
    address : {
        street : "Kulas Light",
        suite : "Apt. 556",
        city : "Gwenborough",
        zipcode : "92998-3874"
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org"
}

// spread operator
const updateData = {
    ...data,
    name : "Rani",
    email : "rani@upi.edu",
    hobby : "Mobile Legend"
}
console.log(updateData);

// destructuring
const {
    name,
    address : {
        street,
        city
    }
} = data;
console.log(`Name = ${name}`);
console.log(`Street = ${street}`);
console.log(`City = ${city}`);