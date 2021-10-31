let root = document.getElementById("root");



const makeList = (name,dp)=>{

    console.log(dp)

    return `
    
    
    <div class="card" style="width: 18rem;">
    <a href="#${name}">
  <img src="${dp}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  </a>
</div>

    `
}

async function callApi(username){

     const data = await fetch(`https://api.github.com/users/${username}/followers`);
     const followers  = await data.json()
     console.log(followers)

     followers.map(user=>{
         const list = makeList(user.login,user.avatar_url)
         root.innerHTML +=list 
     })
}

window.addEventListener('hashchange',()=>{
    const username = location.hash.split("#")[1]
    root.innerHTML = ""
    callApi(username)
})

callApi("alita")
