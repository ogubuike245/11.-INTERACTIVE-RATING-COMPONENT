const feedbackPage = document.getElementById("options");
const thankyouPage = document.getElementById("thankyou");
const button = document.getElementById("button");
const rating = document.querySelectorAll("#icon");
const selection = document.getElementById("selection");

button.addEventListener("click", feedBack);

rating.forEach((rate) => {
  rate.addEventListener("click", () => (selection.innerHTML = rate.innerHTML));
});

function feedBack() {
  feedbackPage.style.display = "none";
  thankyouPage.style.display = "flex";
}
