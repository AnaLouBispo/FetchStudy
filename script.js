
const nameUser = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button")

button.addEventListener("click", function(event) {
    event.preventDefault();
    const userData = JSON.stringify( {
     name: nameUser.value,
      email: email.value,
      password: password.value
});
    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "POST",
        body: userData,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then((result) => {
      return result.json(); 
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err)
    });
});
      



