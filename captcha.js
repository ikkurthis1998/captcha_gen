function getRandomChar() {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return chars.charAt(Math.floor(Math.random() * chars.length));
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
	const colors = ["red", "blue", "green", "purple", "orange", "pink"];
	return colors[Math.floor(Math.random() * colors.length)];
}

function createRandomChars(numChars) {
	let captcha = "";
	for (let i = 0; i < numChars; i++) {
		const char = getRandomChar();
		const x = i * 30 + 5;
		const y = getRandomNumber(0, 10);
		const rotation = getRandomNumber(-15, 15);
		const fontSize = getRandomNumber(20, 30);
		// const color = getRandomColor();
		const charDiv = document.createElement("div");
		charDiv.classList.add("char");
		charDiv.innerText = char;
		charDiv.style.top = y + "px";
		charDiv.style.left = x + "px";
		charDiv.style.transform = "rotate(" + rotation + "deg)";
		charDiv.style.fontSize = fontSize + "px";
		// charDiv.style.color = color;
		document.getElementById("captcha").appendChild(charDiv);
		captcha += char;
	}
	return captcha;
}

createRandomChars(6);
