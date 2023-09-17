// tempBanner
document.addEventListener("DOMContentLoaded", function () {
    var banner = document.getElementById("tempBanner");

    if ((window.location.pathname === '/zh/' || window.location.pathname === '/en/') && !localStorage.getItem('bannerDisplayed')) {
        banner.style.display = "block";
        localStorage.setItem('bannerDisplayed', 'true');

        setTimeout(function() {
            banner.style.transform = "scaleY(0)";
            setTimeout(function() {
                banner.style.display = "none";
            }, 500);
        }, 3000);
    }
});

// like hardware
var modal = document.getElementById("likeModal");
var span = document.getElementsByClassName("close")[0];

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

var showModals = document.getElementsByClassName("show-modal");
for (var i = 0; i < showModals.length; i++) {
    showModals[i].onclick = function() {
        modal.style.display = (modal.style.display === "block") ? "none" : "block";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
