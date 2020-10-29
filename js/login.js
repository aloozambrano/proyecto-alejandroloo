function usuarioFromGames() {
  this.Nombre
  this.Apellido
  this.Email
  let Password = []


  this.registroUsuario = function () {

    alert("Welcome to From Games! <br> Register your data to enter our virtual world")

    this.Nombre = prompt("Enter first name");
    this.Apellido = prompt("Enter last name")
    this.Email = prompt("Enter email");

    let confirmacionUsuario = confirm(`These are your data:\n\n Nombre: ${this.Nombre}\n Apellido: ${this.Apellido}\n Email: ${this.Email}\n\n ¿It is right?`);

    if (confirmacionUsuario == true) {

      this.registroPasswordUsuario = function () {

        let registroPassword = prompt("Enter password");
        let registroPasswordConfirmacion = prompt("Re-enter password");

        if (registroPassword == registroPasswordConfirmacion) {
          alert("Gotcha! we will send you a verification email");
          Password.push(registroPassword);
        } else {
          alert("Password does not match!");
          return this.registroPasswordUsuario();
        }
      }
      this.registroPasswordUsuario();

    } else {
      alert("Fill out the form again!");
      return this.registroUsuario();
    }

  }

  this.loguearUsuario = function () {

    this.LoginEmail = prompt("Enter your registered email");
    this.LoginPassword = prompt("Enter your password");

    if (this.LoginEmail == this.Email && this.LoginPassword == Password) {

      return true;

    } else {

      return false;
    }

  }

}

let UsuarioPrueba = new usuarioFromGames()

UsuarioPrueba.registroUsuario();
