const root = document.querySelector('.root');
//Luam datele de la endpoint-ul corespunzator, adica /posts.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    // Ne asiguram ca am luat datele bune.
    console.log(posts);
    // Filtram postarile, astfel incat sa ramanem doar cu 10.
    const filteredPosts = posts.filter(post => {
        return post.id <= 10;
  });
  // Pentru fiecare postare, afisam pe ecran titlul si descrierea.
  filteredPosts.forEach(post => {
    root.innerHTML += `
      <h1>${post.title}</h1>
      <p>${post.body}</p>
    `;
  })
})

//SAU ASA ,,,,
 
fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
          const ul = document.getElementById("posts");
          for (let i = 0; i < 10; i++) {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            const li = document.createElement("li");
            li.innerText = data[i].title;
            li.style.background = "#" + randomColor;
            ul.appendChild(li);
          }
        });


//RANDOM DOG IMG

        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then( data =>{
            console.log(data);
            const dogImage = document.querySelector('#image')
            dogImage.setAttribute('src' ,data.message)
        })
 //METODELE PUT DELET POST
 
 fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    ////
       
