const widthThreshold = 640; // 设置宽度阈值，例如 800px

// 全局作用域中的 handleImageError 函数

function handleImageError(image) {
  console.log("Failed to load image:", image.src);
  showTempBanner();
}

function showTempBanner() {
  var tempBanner = document.getElementById("tempBanner");
  if (tempBanner) {
    tempBanner.style.display = "block";
    localStorage.setItem("bannerDisplayed", "true");
    setTimeout(function () {
      tempBanner.classList.add('hide');
    }, 3000);
  }
}



let lastScrollTop = 0;
function showTopNav() {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (window.innerWidth <= widthThreshold && currentScroll > lastScrollTop && window.scrollY > 100) {
    topNav.classList.remove('hidden');
    topNav.classList.add('flex');
  } else {
    topNav.classList.add('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

function showScrollToTopButton() {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (!scrollToTopBtn) return;

  if (window.innerWidth <= widthThreshold) {
    scrollToTopBtn.style.display = "none";
  } else {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
}

function handleScrollEvents() {
  showTopNav();
  showScrollToTopButton();
}

function handleResizeEvents() {
  showTopNav();
  showScrollToTopButton();
}

window.addEventListener('scroll', handleScrollEvents);
window.addEventListener('resize', handleResizeEvents);

document.addEventListener("DOMContentLoaded", function () {
  // tempBanner
  setTimeout(function () {
    if (
      (window.location.pathname === "/zh/" || window.location.pathname === "/en/") &&
      !localStorage.getItem("bannerDisplayed")
    ) {
      showBanner();
    }
  }, 500);

  // Scroll to Top
  const scrollToTopBtn = document.getElementById("scrollToTop");
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
  var images = document.querySelectorAll("img");

  images.forEach(function (img) {
    img.addEventListener("error", function () {
      console.log("Failed to load image:", img.src);
      showBanner();
    });
  });
};


let menuButton = document.getElementById('globalnav-menutrigger-button');
let menu = document.getElementById('extension-menu');
let isMenuOpen = false;

menuButton.addEventListener('click', function () {
  let animTopOpen = document.getElementById('globalnav-anim-menutrigger-bread-top-open');
  let animBottomOpen = document.getElementById('globalnav-anim-menutrigger-bread-bottom-open');
  let animTopClose = document.getElementById('globalnav-anim-menutrigger-bread-top-close');
  let animBottomClose = document.getElementById('globalnav-anim-menutrigger-bread-bottom-close');

  if (isMenuOpen) {
    animTopClose.beginElement();
    animBottomClose.beginElement();
    menu.classList.add('opacity-0', 'max-h-0');
    menu.classList.remove('opacity-100', 'max-h-screen');
  } else {
    animTopOpen.beginElement();
    animBottomOpen.beginElement();
    menu.classList.remove('opacity-0', 'max-h-0');
    menu.classList.add('opacity-100', 'max-h-screen');
  }

  isMenuOpen = !isMenuOpen;
});
