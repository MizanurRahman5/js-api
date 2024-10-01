// const user = {id : 1, name : 'misty islam', job : 'actor'}
// const stringify = JSON.stringify(user)

// console.log(user)
// console.log(stringify)



function loadData (){
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(url)
.then(Response => Response.json())
.then(json => console.log(json))
}


