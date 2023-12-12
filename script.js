const password = document.getElementById("password");
const copyPassword = document.getElementById("copy-password");
const btn = document.querySelector(".btn");

let length = Math.floor(Math.random() * 31);
let pass = " ";
let nums = "123456789";
let chars = "abcedfghijklmnopqrstuvwxyz";
let specials = "!@#$%^&*}[{]";
let fullpass = " ";

// false, 0, -0, 0n, "", null, undefined, NaN, and document.all. are Falsy values

const generateRandomPassword = () => {
  for (i = 0; i < length; i++) {
    if (nums) {
      pass += nums;
    }
    if (chars) {
      pass += chars;
    }
    if (specials) {
      pass += specials;
    }
    let randomIndex = Math.floor(Math.random() * pass.length);
    fullpass += pass[randomIndex];
    password.value = fullpass;
    copyPassword.innerHTML = fullpass;
  }
};

btn.addEventListener("click", generateRandomPassword);
