// 全局作用域中的 handleImageError 函数
function handleImageError(imageElement) {
  console.error("Image failed to load:", imageElement.src);
  showBanner();
}

function showBanner() {
  console.log("showBanner");
  var banner = document.getElementById("tempBanner");
  if (banner) {
    banner.style.display = "block";
    localStorage.setItem("bannerDisplayed", "true");
    setTimeout(function () {
      banner.style.transform = "scaleY(0)";
      setTimeout(function () {
        banner.style.display = "none";
      }, 500);
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // tempBanner
  setTimeout(function () {
    if (
      (window.location.pathname === "/zh/" || window.location.pathname === "/en/") &&
      !localStorage.getItem("bannerDisplayed")
    ) {
      showBanner(); // Show the banner based on pathname condition
    }
  }, 500);

  // Scroll to Top
  const scrollToTopBtn = document.getElementById("scrollToTop");
  window.onscroll = function () {
    if (scrollToTopBtn) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }
  };

  if (scrollToTopBtn) {
    scrollToTopBtn.onclick = function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
  }

  // Table of Contents
  const article = document.querySelector("article");
  if (!article) return;

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

  const highlightActiveTocEntry = (activeId) => {
    document.querySelectorAll("#toc-list li a").forEach((link) => {
      if (link.getAttribute("href") === `#${activeId}`) {
        link.classList.add("text-blue-500");
      } else {
        link.classList.remove("text-blue-500");
      }
    });
  };

  if (tocBot) {
    tocBot.addEventListener("click", function () {
      tocOverlay.style.display = "block";
      tocBot.style.display = "none";
      tocList.innerHTML = "";

      headings.forEach((header) => {
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
          header.textContent.replace(" #", "").replace(/：$/, "").replace(/:$/, "") +
          "</a>";
        tocList.appendChild(li);
      });

      checkHeadingsVisibility();
    });
  }

  if (tocOverlay) {
    tocOverlay.addEventListener("click", function () {
      tocOverlay.style.display = "none";
      tocBot.style.display = "block";
    });
  }

  if (tocContainer) {
    tocContainer.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

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
              .replace(/：$/, "")
              .replace(/:$/, "");

            tocBot.textContent = headingText;
            highlightActiveTocEntry(entry.target.id);
          }
        }
      });
    },
    {
      threshold: 0,
    }
  );

  observer.observe(article);
  headings.forEach((heading) => observer.observe(heading));
});

window.onload = function () {
  // if images are not loaded, show banner
  // Select all images on the page
  var images = document.querySelectorAll("img");

  // Add an error event listener to each image
  images.forEach(function (img) {
    img.addEventListener("error", function () {
      console.log("Failed to load image:", img.src);
      showBanner();
    });
  });
  console.log("所有资源都已加载完成");
};
