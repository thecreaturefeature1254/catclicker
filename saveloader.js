let storedclicks = localStorage.getItem("clicks");
sessionStorage.setItem("sessionclicks", 0)

if (storedclicks){
console.log("Found save");
} else {
  localStorage.setItem("clicks", 0)
  
}
// your digital footprint is here
window.addEventListener("beforeunload", function (event) {
let localclicknumber = Number(storedclicks)
let sessionclicknumber = Number(sessionStorage.getItem("sessionclicks"))

let result = localclicknumber + sessionclicknumber

localStorage.setItem("clicks", result)
}
