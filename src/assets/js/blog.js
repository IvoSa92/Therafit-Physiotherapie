// article load animation
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".recent-articles");
  articles.forEach((article, index) => {
    setTimeout(() => {
      article.classList.add("load");
    }, index * 300);
  });
});

// article hover animation
document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".recent-articles");
  const blogO = document.querySelector(".deco");
  const blogP = document.querySelector(".blogP");
  const blogHeader = document.querySelector("#home-h");
  const artikelHeader = document.querySelectorAll(".ArtikelAnimation");
  blogO.classList.add("blog-O-animation");
  blogP.classList.add("animationP");
  artikelHeader.forEach((artikel) => {
    artikel.classList.add("animationP");
  });
  blogHeader.classList.add("home-animation");
  console.log(openedArticle);

  articles.forEach((article, index) => {
    // Initial Load Effect
    setTimeout(() => {
      article.classList.add("load");
    }, index * 500);
  });
});
