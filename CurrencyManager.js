let check = setInterval(() => {
  if (window.loaderready) {
    clearInterval(check);

    const localclicks = Number(localStorage.getItem("clicks") || 0);
    const sessionclicks = Number(sessionStorage.getItem("sessionclicks") || 0);
    const counter = document.getElementById("num1");

    if (counter) {
      counter.textContent = localclicks + sessionclicks;
    }
  }
}, 100);
