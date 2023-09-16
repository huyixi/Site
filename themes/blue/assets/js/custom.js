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
