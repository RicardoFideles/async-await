const users = [{
    id : 1,
    name : 'Jhon',
    schoolId: 101
},{
    id : 2,
    name : 'Jen',
    schoolId: 999
}];

const grades = [];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);
        if (user) {
            resolve(user);
        } else {
            reject(`Unable to find user with id of ${id}`);
        }
    });
};

getUser(21).then((user) => {
    console.log(user);
}).catch((e) => {   
    console.log(e);
});
