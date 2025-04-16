var signIn = document.getElementById("signIn");
var signUp = document.getElementById("signUp");
var logInPage = document.getElementById("logInPage");
var signUpPage = document.getElementById("signUpPage");

signUp.addEventListener("click", function () {
  logInPage.classList.replace("d-block", "d-none");
  signUpPage.classList.replace("d-none", "d-block");
});

signIn.addEventListener("click", function () {
  logInPage.classList.replace("d-none", "d-block");
  signUpPage.classList.replace("d-block", "d-none");
});

var signUpBtn = document.getElementById("signUpBtn");
signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var userName = document.getElementById("userName").value;
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;

  if (userName && userEmail && userPassword) {
    var users = JSON.parse(localStorage.getItem("users")) || [];

    var exist = users.some(function (user) {
      return user.email === userEmail;
    });

    if (exist) {
      alert("This email is already registered.");
      return;
    }

    var newUser = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful.");

    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";

    signUpPage.classList.replace("d-block", "d-none");
    logInPage.classList.replace("d-none", "d-block");
  } else {
    alert("Please fill in all fields.");
  }
});

var signInBtn = document.getElementById("signInBtn");
signInBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var logEmail = document.getElementById("logEmail").value;
  var logPassword = document.getElementById("logPassword").value;

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var currentUser = users.find(function (user) {
    return user.email === logEmail && user.password === logPassword;
  });

  if (currentUser) {
    logInPage.classList.replace("d-block", "d-none");
    var homePage = document.getElementById("homePage");
    homePage.classList.replace("d-none", "d-block");

    var welcomeMsg = document.getElementById("welcomeMsg");
    welcomeMsg.textContent = `Welcome ${currentUser.name}`;

    alert("Login successful.");
    document.getElementById("logEmail").value = "";
    document.getElementById("logPassword").value = "";
  } else {
    alert("Please enter valid credentials.");
  }
});

var logOut = document.getElementById("logout");
logOut.addEventListener("click", function () {
  var homePage = document.getElementById("homePage");
  homePage.classList.replace("d-block", "d-none");
  logInPage.classList.replace("d-none", "d-block");
});
