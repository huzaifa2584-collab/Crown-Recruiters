const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

document.getElementById("year").textContent = new Date().getFullYear();

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();

	if (!name || !email) {
		message.textContent = "Please complete the required fields.";
		return;
	}

	message.textContent = "Thank you, " + name + "! Your demo enquiry is ready.";
	form.reset();
});
