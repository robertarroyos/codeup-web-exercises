


const getGithubUserCommit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName.value}/events/public`, {headers: {'Authorization': keys.gitHub}})
        .then( response => response.json())
        .then( (data) => {
            let commitDate = new Date(data[0].created_at).toDateString();
            console.log(`User "${userName.value}" last commit on ${commitDate}`)
        })
        .catch( error => console.error(error))
}

let userName = document.querySelector('#userInput');
let submitBtn = document.querySelector('#button');

submitBtn.addEventListener('click', getGithubUserCommit);

