
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const userData1 = JSON.stringify({
    email: email.value,
    password: password.value,
  });
  fetch("http://10.92.198.38:8080/auth/signin", {
    method: "POST",
    body: userData1,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("Token armazenado com sucesso:", data.token);
        window.location.href = "send.html";
      } else {
        console.log("Token não encontrado na resposta da API");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
