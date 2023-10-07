// tempBanner
document.addEventListener("DOMContentLoaded", function () {
  var banner = document.getElementById("tempBanner");

  if (
    (window.location.pathname === "/zh/" || window.location.pathname === "/en/") &&
    !localStorage.getItem("bannerDisplayed")
  ) {
    banner.style.display = "block";
    localStorage.setItem("bannerDisplayed", "true");

    setTimeout(function () {
      banner.style.transform = "scaleY(0)";
      setTimeout(function () {
        banner.style.display = "none";
      }, 500);
    }, 3000);
  }
});

// scrollToTop
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

document.getElementById("scrollToTop").onclick = function () {
  topFunction();
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// like hardware
var modal = document.getElementById("likeModal");
var span = document.getElementsByClassName("close")[0];

if (span) {
  span.onclick = function () {
    modal.style.display = "none";
  };
}

var showModals = document.getElementsByClassName("show-modal");
for (var i = 0; i < showModals.length; i++) {
  showModals[i].onclick = function () {
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  };
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Table of Contents
document.addEventListener("DOMContentLoaded", function () {
  // 获取所有的标题元素
  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const tocDiv = document.querySelector("#toc-bot");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 移除标题中的 # 符号
          let headingText = entry.target.textContent.replace(" #", "");
          // 设置 #toc-bot div 的内容为当前标题的文本
          tocDiv.textContent = headingText;
        }
      });
    },
    {
      threshold: 0.1, // 当目标元素的交叉区域与视口的交叉区域至少为10%时，回调将被触发
    }
  );

  headings.forEach((heading) => observer.observe(heading));
});
