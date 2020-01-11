function openNav() {
    document.getElementById("sidenav").style.width = "425px";
    document.getElementById("page").style.marginLeft = "425px";
  }
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("page").style.marginLeft= "0";
  }

function loadPage() {
  document.getElementById("titleText").style.opacity = "1";
  document.getElementById("titleImage").style.opacity = "1";

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
       document.getElementById("page").style.backgroundColor = "#121212"
       document.getElementById("header").style.opacity = "0"
       $('.bubble-text').css('background-color','#333333')
    }
    if ($(this).scrollTop() < 100) {
       document.getElementById("page").style.backgroundColor = "#333333"
       document.getElementById("header").style.opacity = "1"
       $('.bubble-text').css('background-color','#121212')
    }
 })
}

function hoverBubble(title) {
  document.getElementById(title).style.opacity = "0.5";
}

function unhoverBubble(title) {
  document.getElementById(title).style.opacity = "1";
}

function clickBubble(title) {
  window.location = "pages/" + title +"/index.html"
}

