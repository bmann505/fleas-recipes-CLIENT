// const baseURL = 'http://localhost:8080/'
const baseURL = 'https://dry-atoll-41433.herokuapp.com/'
const userURL = `${baseURL}users/`
const recipeURL = `${baseURL}recipes/`


$(document).ready(function() {
  const token = localStorage.getItem('token');
  const $publicBtn = $('.publicList');
  if (!token) {
    location.href = '/'
  }
  const parsedToken = parsedJWT(token);
  $.ajax({
    method: 'GET',
    url: userURL + `${parsedToken.id}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((response) => {
    if (response.length === 0) {

    } else {
      response.forEach((recipes, index) => {
        $('.userRecipes').append(
          `<div class="card" style="width: 20rem;">
            <div class="card-body">
              <h4 class="card-title">${recipes[index].title}</h4>
              <p class="card-text">${recipes[index].desciption}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item ingredients">${recipes[index].ingredients}</li>
              <li class="list-group-item prep_time">${recipes[index].prep_time}</li>
              <li class="list-group-item cook_time">${recipes[index].cook_time}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>`
        )
      })
    }
  })
  $publicBtn.click(publicList)
})

function publicList(event) {
  event.preventDefault();
  $.get(recipeURL)
    .then(data => {
      data.forEach((recipes, index) => {
        $('.userRecipes').append(
          `<div class="card" style="width: 20rem;">
          <div class="card-body">
            <h4 class="card-title">${data[index].title}</h4>
            <p class="card-text">${data[index].desciption}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item ingredients">${data[index].ingredients}</li>
            <li class="list-group-item prep_time">${data[index].prep_time}</li>
            <li class="list-group-item cook_time">${data[index].cook_time}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>`
        )
      })
    })
}


function parsedJWT(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

function favoriteRecipes() {

}
