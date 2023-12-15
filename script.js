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

/*************
FORM SECTION
 * **********/
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((i) => {});
}
