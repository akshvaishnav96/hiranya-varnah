let navlist = document.querySelector(".v-class")
let ullist = document.querySelector(".ul-list")
let nav = document.querySelector(".nav-h");
let logo = document.querySelector(".logo")
let icon = document.getElementById("burger")
let i1 = document.querySelector(".i1")
let i2 = document.querySelector(".i2")
let navlg = document.querySelector(".navbar-brand")
let slbtn  = document.querySelector(".slbtn1");


let burger = document.getElementById("burger")
burger.addEventListener("click",()=>{
    
    ullist.classList.toggle("v-class")
    navlist.classList.toggle("v-class")
    nav.classList.toggle(`nav-h`)
    icon.classList.toggle('activeicon')
    logo.classList.toggle(`dnone`)
    i1.classList.toggle('fa-magnifying-glass')
    i2.classList.toggle('fa-cart-shopping')
    navlg.classList.toggle('nn')
    slbtn.classList.toggle('nn')


})

let m1  = document.querySelector(".m1");

let burgern = document.getElementById("burger")
burgern.addEventListener("click",()=>{
    m1.classList.toggle('nn')
})

