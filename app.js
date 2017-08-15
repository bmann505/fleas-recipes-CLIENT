$(document).ready(function() {
  $('#myModal').on('shown.bs.modal', function() {
    $('#myInput').focus()
  })
  const $signUpSbmtBtn = $('#signUpSubmit');

  $signUpSbmtBtn.click(signUp);
});

const baseURL = 'http://localhost:8080/'
const signUpURL = `${baseURL}signup`

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
        location.href = '/'
      }
    })
}
