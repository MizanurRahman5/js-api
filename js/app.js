const user = "https://jsonplaceholder.typicode.com/users";

function loadUser() {
  fetch(user)
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser (user){
    const ul = document.getElementById('user-list');
    for (let users of user){
        // console.log(users.name);
        const li = document.createElement('li')
        li.innerText = users.name;
        ul.appendChild(li);

    }

}

function displayClear (){

    document.getElementById('user-list').innerHTML = ' ';

}



function userPost (){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(post => displyPost(post))
    // console.log(post)
}

userPost()

function displyPost (post){
    const postContainer = document.getElementById('post-container');
    for(let posts of post){

        console.log(posts.id);
        const div = document.createElement('p');
        div.classList.add('post')
        div.innerHTML =`

        <p>post id ${posts.id}</p>
        <p>Title ${posts.title}</p>
        <p>description : ${posts.body}</p>
        
        
        `
        postContainer.appendChild(div);



    // const div = document.createElement(div);
    //     div.innerHTML = `
    // <h5>user id - ${posts.id}</h5>
    // <p>title : ${posts.title} </p>
    // <p>description : ${posts.body}</p>
    // `
    // // console.log(posts.id)
    // postContainer.appendChild(div)
    }
}
