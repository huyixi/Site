document.getElementById("slideLeft").addEventListener("click", function () {
  console.log("clickSlideLeft");
  let bookList = document.getElementById("bookList");
  bookList.scrollLeft -= 200;
});

document.getElementById("slideRight").addEventListener("click", function () {
  console.log("clickSlideRight");
  let bookList = document.getElementById("bookList");
  bookList.scrollLeft += 200;
});
