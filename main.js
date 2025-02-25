"use strict";
let pageMenu = document.getElementById("pageMenu");
let menu = document.getElementById("menubar");
let flag = true;
let nav = document.getElementById("sidenav");

// Menu
pageMenu.onclick = function (event) {
    event.stopPropagation();
    menu.style.display = flag ? "flex" : "none";
    flag = !flag;
};
document.onclick = function () {
    menu.style.display = "none";
    flag = true;
};
function openNav() {
    nav.style.width = "100%";
}
function closeNav() {
    nav.style.width = "0";
}

// Date Not Static
let f_date = document.getElementById("date");
let date = new Date();
let date2 = date.getFullYear();
f_date.innerHTML = `Copyright ${date2} © by <span>Beshoy Samy.</span>`;