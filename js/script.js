var sidebar = document.getElementById ("aside")
var main = document.getElementById("main")
var btnaside = document.getElementById("btn-aside")
var btnnavbar = document.getElementById("btn-navbar")


function openASidebar() {
  sidebar.classList.add("active")
  main.classList.add("inactive")
  btnnavbar.classList.add("hide")
}
function closeSidebar(){
  sidebar.classList.remove("active")
  main.classList.remove("inactive")
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})