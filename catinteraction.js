// wait on the slowpoke
let check = setInterval(() => {
  if (window.loaderready) {
    clearInterval(check);
  }
}, 100); // check every 100ms
if (window.loaderready) {
var sessionclicks = localStorage.getItem("sessionclicks")
var multiplier = localStorage.getItem("multiplier")
var button = document.getElementById("cat")              
}
  button.addEventListener("click", function () {
    let sessionclicknumber = Number(sessionclicks)
    let result = sessionclicknumber + 1 * Number(multiplier)
    localStorage.setItem("sessionclicks", result)
  });
