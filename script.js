const filterCard = document.querySelectorAll(".card");
document.querySelector(".filter-menu__list").addEventListener("click", (event) => {
	if (event.target.tagName !== "LI") return false;
	let filterClass = event.target.dataset["filter"];
	filterCard.forEach(element => {
		element.classList.remove("hide");
		if (!element.classList.contains(filterClass) && filterClass !== "all") {
			element.classList.add("hide");
		}
	})
})