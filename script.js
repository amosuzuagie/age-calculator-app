/*************
INPUT SECTION
 * **********/
const ddInp = document.getElementById("day");
const mmInp = document.getElementById("month");
const yyInp = document.getElementById("year");

/*************
OUTPUT SECTION
 * **********/
const ddOtp = document.getElementById("dd");
const mmOtp = document.getElementById("mm");
const yyOtp = document.getElementById("yy");

const form = document.querySelector("form");

/******************
DATE INITIALIZATION
 * ****************/
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required";
      validator = false;
    } else if (mmInp.value > 12) {
      mmInp.style.borderColor = "red";
      mmInp.parentElement.querySelector("small").innerText =
        "must be a valid month";
      validator = false;
    } else if (ddInp.value > months[mmInp.value - 1]) {
      ddInp.style.borderColor = "red";
      ddInp.parentElement.querySelector("small").innerText =
        "must be a valid day";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (ddInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (mmInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - ddInp.value;
    const m = month - mmInp.value;
    const y = year - yyInp.value;

    ddOtp.innerHTML = d + " ";
    mmOtp.innerHTML = m + " ";
    yyOtp.innerHTML = y + " ";
  }
}

form.addEventListener("submit", handleSubmit);
