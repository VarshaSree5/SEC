const jsonString = `{
  "books": [
    {
      "title": "Sunny Days",
      "author": "A. Sharma",
      "price": 9.99
    },
    {
      "title": "The Lost Key",
      "author": "R. Mehta",
      "price": 12.50
    },
    {
      "title": "Journey Home",
      "author": "K. Verma",
      "price": 8.75
    }
  ]
}`;

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

fetch('https://jsonplaceholder.typicode.com/posts/')
.then(response=>response.json())
.then(data=>console.log(data))

.catch(error=>console.log("Error:",error));
//next

fetch('https://jsonplaceholder.typicode.com/users/')
.then(res => res.json())
.then(users => {
  let output="<h3>Users List</h3><ul>"
  users.forEach(user=> {
    output+= '<li>${user.name} - ${user.email}</li>';
  });

  output+= "</ul>";
  document.body.innerHTML += output;
}); 

  