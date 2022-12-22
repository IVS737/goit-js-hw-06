const form = document.querySelector(".login-form");
const password = document.querySelector('input[name="password"]');
const email = document.querySelector('input[name="email"]');

form.addEventListener("submit", dataSubmit);

function dataSubmit(event) {
  event.preventDefault();

  if (!email.value || !password.value) {
    return alert("Будь-ласка заповніть всі поля!!!");
  }

  const elemets = {
    email: email.value,
    password: password.value,
  };
  console.log(elemets);

  event.currentTarget.reset();
}
