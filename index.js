let sliderImages = Array.from(document.querySelectorAll(".img-container img"));
slidesCount = sliderImages.length;
currentSlide = 1;
sliderNumberElement = document.getElementById("slide-num");
prevBtn = document.getElementById("prev");
nextBtn = document.getElementById("next");

// Handle CLick on Buttons
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Create The main Ul Element
let indicatorElement = document.createElement("ul");
indicatorElement.setAttribute("id", "indicator-ul");

// Create List Items based on slides count
for (let i = 1; i <= slidesCount; i++) {
	let theLi = document.createElement("li");
	// Create Custom attribute
	theLi.setAttribute("data-index", i);
	theLi.appendChild(document.createTextNode(i));
	indicatorElement.appendChild(theLi);
}
// Add the Ul into the DOM
document.getElementById("indicator").appendChild(indicatorElement);

// Get the Created UL
let createdUl = document.getElementById("indicator-ul");
let createdUlItems = document.querySelectorAll("#indicator-ul li");
theChecker();

function prevSlide() {
	if (prevBtn.classList.contains("disabled")) {
		return false;
	} else {
		currentSlide--;
		theChecker();
	}
}
function nextSlide() {
	if (nextBtn.classList.contains("disabled")) {
		return false;
	} else {
		currentSlide++;
		theChecker();
	}
}

for (let i = 0; i < createdUlItems.length; i++) {
	createdUlItems[i].onclick = function () {
		currentSlide = parseInt(this.getAttribute("data-index"));
		theChecker();
	};
}
// Checker function
function theChecker() {
	sliderNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;
	// remove Active Classes
	removeActive();
	// Add Active Classes
	sliderImages[currentSlide - 1].classList.add("active");
	createdUl.children[currentSlide - 1].classList.add("active");
	// toggle disabled class to the Previous BTN
	if (currentSlide === 1) {
		prevBtn.classList.add("disabled");
	} else {
		prevBtn.classList.remove("disabled");
	}
	// toggle disabled class to the Next BTN
	if (currentSlide == slidesCount) {
		nextBtn.classList.add("disabled");
	} else {
		nextBtn.classList.remove("disabled");
	}
}

// Remove the active Class from all ELements
function removeActive() {
	sliderImages.forEach((img) => {
		img.classList.remove("active");
	});
	createdUlItems.forEach((li) => {
		li.classList.remove("active");
	});
}
