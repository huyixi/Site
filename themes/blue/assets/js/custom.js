// document.addEventListener("DOMContentLoaded", function() {
//     setTimeout(function() {
//         var banner = document.getElementById("tempBanner");
//         if (banner) {
//             banner.style.opacity = "0";
//             setTimeout(function() {
//                 banner.style.display = "none";
//             }, 1000); 
//         }
//     }, 3000); 
// });

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var banner = document.getElementById("tempBanner");
        if (banner) {
            banner.style.transform = "scaleY(0)"; // Shrinks the banner from bottom to top

            // After the transition completes, hide the banner
            setTimeout(function() {
                banner.style.display = "none";
            }, 500); // 500 milliseconds or 0.5 seconds, which matches the transition duration
        }
    }, 3000); 
});
