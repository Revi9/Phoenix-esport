import './style.css'


window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(function () {
    loader?.classList.add('loader-hidden');
  }, 200)

})



