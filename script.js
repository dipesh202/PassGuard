const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const toggleBtn = document.getElementById("toggle-btn");
const generateBtn = document.getElementById("generate");

const criteria = {
  length: document.getElementById("length"),
  uppercase: document.getElementById("uppercase"),
  number: document.getElementById("number"),
  special: document.getElementById("special"),
};

password.addEventListener("input", () => {
  const val = password.value;
  let score = 0;

  if (val.length >= 8) {
    criteria.length.style.color = "lightgreen";
    score++;
  } else {
    criteria.length.style.color = "red";
  }

  if (/[A-Z]/.test(val)) {
    criteria.uppercase.style.color = "lightgreen";
    score++;
  } else {
    criteria.uppercase.style.color = "red";
  }

  if (/[0-9]/.test(val)) {
    criteria.number.style.color = "lightgreen";
    score++;
  } else {
    criteria.number.style.color = "red";
  }

  if (/[^A-Za-z0-9]/.test(val)) {
    criteria.special.style.color = "lightgreen";
    score++;
  } else {
    criteria.special.style.color = "red";
  }

  if (score <= 1) {
    strength.textContent = "Weak";
    strength.style.color = "red";
  } else if (score === 2 || score === 3) {
    strength.textContent = "Medium";
    strength.style.color = "orange";
  } else {
    strength.textContent = "Strong";
    strength.style.color = "lightgreen";
  }

  message.style.display = "block";
});

toggleBtn.addEventListener("click", () => {
  const type = password.getAttribute("type");
  password.setAttribute("type", type === "password" ? "text" : "password");
});

generateBtn.addEventListener("click", () => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]";
  let generated = "";
  for (let i = 0; i < 12; i++) {
    generated += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  password.value = generated;
  password.dispatchEvent(new Event("input"));
});
