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
        const user = users.find((user) => {
            return user.id === id;
        });
    });
};
