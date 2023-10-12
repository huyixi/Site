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
      }, 600);
    }, 5000);
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
  const article = document.querySelector("article");
  const headings = article.querySelectorAll("h2, h3, h4");
  const tocBot = document.querySelector("#toc-bot");
  const tocOverlay = document.querySelector("#toc-overlay");
  const tocContainer = document.querySelector("#toc-container");
  const tocList = document.querySelector("#toc-list");

  const checkHeadingsVisibility = () => {
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        highlightActiveTocEntry(heading.id);
      }
    });
  };

  tocBot.addEventListener("click", function () {
    if (tocOverlay.style.display !== "block") {
      tocOverlay.style.display = "block";
      tocBot.style.display = "none";
      tocList.innerHTML = "";

      headings.forEach(function (header) {
        const li = document.createElement("li");
        let levelClass = "";

        switch (header.tagName.toLowerCase()) {
          case "h2":
            levelClass = "text-base text-blue-600";
            break;
          case "h3":
            levelClass = "text-sm text-blue-600 ml-4";
            break;
          case "h4":
            levelClass = "text-xs text-blue-600 ml-8";
            break;
        }

        li.innerHTML =
          '<a class="' +
          levelClass +
          '" href="#' +
          header.id +
          '">' +
          header.textContent.replace(" #", "").replace("：", "").replace(":", "") +
          "</a>";
        tocList.appendChild(li);
      });

      checkHeadingsVisibility();
    }

    document.getElementById("close-toc-btn").addEventListener("click", function () {
      tocOverlay.style.display = "none";
      tocBot.style.display = "block";
    });
  });

  tocOverlay.addEventListener("click", function () {
    tocOverlay.style.display = "none";
    tocBot.style.display = "block";
  });

  tocContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  const highlightActiveTocEntry = (activeId) => {
    document.querySelectorAll("#toc-list li a").forEach((link) => {
      if (link.getAttribute("href") === `#${activeId}`) {
        link.classList.add("text-blue-500");
      } else {
        link.classList.remove("text-blue-500");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === article) {
          if (entry.isIntersecting) {
            tocBot.style.display = "block";
          } else {
            tocBot.style.display = "none";
          }
        } else {
          if (entry.isIntersecting) {
            const headingText = entry.target.textContent
              .replace(" #", "")
              .replace("：", "")
              .replace(":", "");
            tocBot.textContent = headingText;
            highlightActiveTocEntry(entry.target.id);
          }
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(article);
  headings.forEach((heading) => observer.observe(heading));
});
