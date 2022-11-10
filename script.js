const filterCard = document.querySelectorAll(".card");

document
  .querySelector(".filter-menu__list")
  .addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return false;
    let filterClass = event.target.dataset["filter"];
    filterCard.forEach((element) => {
      element.classList.remove("hide");
      if (!element.classList.contains(filterClass) && filterClass !== "all") {
        element.classList.add("hide");
      }
    });
  });
document
  .querySelector(".filter-submenu__list-games")
  .addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return false;
    let filterClass = event.target.dataset["filter"];
    filterCard.forEach((element) => {
      element.classList.remove("hide");
      if (!element.classList.contains(filterClass) && filterClass !== "all") {
        element.classList.add("hide");
      }
    });
  });
document
  .querySelector(".filter-submenu__list-it")
  .addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return false;
    let filterClass = event.target.dataset["filter"];
    filterCard.forEach((element) => {
      element.classList.remove("hide");
      if (!element.classList.contains(filterClass) && filterClass !== "all") {
        element.classList.add("hide");
      }
    });
  });

let all = document.getElementById("all");
let games = document.getElementById("games");
let it = document.getElementById("it");
let gamesSubmenu = document.querySelector(".games-submenu");
let itSubmenu = document.querySelector(".it-submenu");

all.addEventListener("click", () => {
  gamesSubmenu.classList.remove("flex");
  itSubmenu.classList.remove("flex");
});
games.addEventListener("click", () => {
  itSubmenu.classList.remove("flex");
  gamesSubmenu.classList.add("flex");
});
it.addEventListener("click", () => {
  gamesSubmenu.classList.remove("flex");
  itSubmenu.classList.add("flex");
});
