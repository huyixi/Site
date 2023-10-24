document.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
  var scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

  var progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    progressBar.style.width = scrolled + "%";
  }
});
