
let xss = document.getElementById("sideBar").offsetHeight

document.getElementById("content").style.marginBottom = `${xss + "px"}`



let next = document.getElementById("next")
let prev = document.getElementById("prev")

next.addEventListener("click" , () => {
  document.getElementById("ul-list").scrollBy({
    behavior: "smooth",
    left: -document.querySelector("body").offsetWidth/2
  })
})
prev.addEventListener("click" , () => {
  document.getElementById("ul-list").scrollBy({
    behavior: "smooth",
    left: document.querySelector("body").offsetWidth/2
  })
})


console.log(-document.querySelector("body").offsetWidth)