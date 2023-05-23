window.addEventListener("scroll",function(){
    var naf = document.getElementById("navbar");
    naf.classList.toggle("sticky",window.scrollY > 0)
})