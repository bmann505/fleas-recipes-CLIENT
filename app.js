$(document).ready(function() {
  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus()
  })
  const $signUpSbmtBtn = $('#signUpSubmit');
  const $loginSbmtBtn = $('#loginSubmit');
  $signUpSbmtBtn.click(signUp);
  $loginSbmtBtn.click(login);
});

const baseURL = 'http://localhost:8080/'
const signUpURL = `${baseURL}signup`
const loginURL = `${baseURL}login`

function signUp(event) {
  event.preventDefault();
  let name = $('#signUpName').val();
  let email = $('#signUpEmail').val();
  let password = $('#signUpPassword').val();
  let data = {
    name,
    email,
    password
  }
  console.log(data)
  $.post(signUpURL, data)
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        localStorage.setItem('token', response.data)
        location.href = 'user.html'
      }
    })
}

function login(event) {
  event.preventDefault();
  let email = $('#loginEmail').val();
  let password = $('#loginPassword').val();
  let data = {
    email,
    password
  }
  $.post(loginURL, data)
    .then(response => {
      if (response.error) {
        alert(response.error);
        location.href = '/'
      } else {
        localStorage.setItem('token', response.data)
        location.href = 'user.html'
      }
    })
}
