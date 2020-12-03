function registrarusuario() {
  //console.log("estoy dentro de la funcion");

  var email = document.getElementById("email").value;
  var password = document.getElementById("pasw").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}
