const baseURL = 'http://localhost:8080/'
const userURL = `${baseURL}users/`

$(document).ready(function() {
  const token = localStorage.getItem('token');
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

    } else {}
  })
})




function parsedJWT(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};
