const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let usersThreeLang = users.filter(function(user) {
    if (user.languages.length > 2) {
        return user;
    }
})

let usersEmail = users.map(function (user) {
    return user.email;
})

let usersYears = users.reduce((years, person) => {
    return years + person.yearsOfExperience;
}, 0);

let avgUsersYears = usersYears / users.length;

// let LongestEmail = ;

let instArr = [];
let instructors = users.reduce((preUser, curUser) => {
    instArr.push(curUser.name.toUpperCase(0) + name.splice(1));
}, '')

console.log(instArr.join(', '));