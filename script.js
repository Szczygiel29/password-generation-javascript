const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getRandomChar(charSet) {
  return charSet[Math.floor(Math.random() * charSet.length)];
}

function generatePassword() {
  const len = lenEl.value;

  let password = "";

  const charSets = [];

  if (upperEl.checked) {
    charSets.push(upperLetters);
    password += getRandomChar(upperLetters);
  }

  if (lowerEl.checked) {
    charSets.push(lowerLetters);
    password += getRandomChar(lowerLetters);
  }

  if (numberEl.checked) {
    charSets.push(numbers);
    password += getRandomChar(numbers);
  }

  if (symbolEl.checked) {
    charSets.push(symbols);
    password += getRandomChar(symbols);
  }

  for (let i = password.length; i < len; i++) {
    password += getRandomChar(charSets[Math.floor(Math.random() * charSets.length)]);
  }

  pwEl.innerText = password;
}

generateEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", () => {
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  navigator.clipboard.writeText(password)
    .then(() => alert("Password copied to clipboard"))
    .catch((err) => console.error("Failed to copy password: ", err));
});
