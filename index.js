const captchaElement = document.getElementById("captcha");
const captcha = captchaElement.textContent.trim();

document.getElementById("captcha-btn").addEventListener("click", function () {
	const input = document.getElementById("captcha-input").value;
	console.log(input);
	if (input === captcha) {
		alert("Verified!");
	} else {
		alert("Incorrect!");
	}
});
