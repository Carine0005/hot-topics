const container = document.getElementById("content");
const links = document.querySelectorAll(".nav-link");
let url = "./partials/home.html";

const loadContent = function (urlFeed) {
  fetch(urlFeed)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Page not found");
      }
      return response.text();
    })
    .then(function (data) {
      container.innerHTML = data;
    })
    .catch(function (error) {
      container.innerHTML = "<p>Sorry, the content could not be loaded.</p>";
      console.log(error);
    });
};

const selectContent = function (event) {
  event.preventDefault();

  const currentLink = event.currentTarget;
  url = currentLink.getAttribute("href");

  links.forEach(function (link) {
    link.classList.remove("active");
  });

  currentLink.classList.add("active");
  loadContent(url);
};

links.forEach(function (link) {
  link.addEventListener("click", selectContent);
});

loadContent(url);