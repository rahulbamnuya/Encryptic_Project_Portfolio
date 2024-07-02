const header=document.querySelectorAll("header")
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>100);
});
let menu=document.querySelector("#menu-icon");
let navlist=document.querySelector("#menu-icon");
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}