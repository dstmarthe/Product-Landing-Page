window.onscroll = function () {
  scrollNav(), scrollFeatures();
};

function scrollNav() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("nav-bar").className = "bar";
  } else {
    document.getElementById("nav-bar").className = "";
  }
}

function scrollFeatures() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById("feat1").className = "ft1";
    document.getElementById("feat2").className = "ft2";
    document.getElementById("feat3").className = "ft3";
  } else {
    document.getElementById("feat1").className = "invis";
    document.getElementById("feat2").className = "invis";
    document.getElementById("feat3").className = "invis";
  }
}
