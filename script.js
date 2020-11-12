window.onscroll = function() {scrollNav()};

function scrollNav() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("nav-bar").className = "bar";
  } else {
    document.getElementById("nav-bar").className = "";
  }
}