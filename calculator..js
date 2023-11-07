const InputFieldEl = document.getElementById("result");
const buttonsEl = document.querySelectorAll("button");

// let num = buttonsEl.textContent

for (let i = 0; i < buttonsEl.length; i++) {
	buttonsEl[i].addEventListener("click", () => {
		const buttonValue = buttonsEl[i].textContent;

		if (buttonValue === "C") {
			clearResult();
		} else if (buttonValue === "=") {
			calculateResult();
		} else if (buttonValue === "D") {
			clearLastChildResult();
		} else {
			appendValue(buttonValue);
		}
	});
}

function clearResult() {
	InputFieldEl.value = "";
}

function calculateResult() {
	InputFieldEl.value = eval(InputFieldEl.value);
	// the eval means EVALUATE and it a javascript method for calculating any arithmetic expression which is entered by the user such as +,-,/,*. etc.
}

function clearLastChildResult() {}

function appendValue(buttonValue) {
	// InputFieldEl.value = InputFieldEl.value + buttonValue;
	InputFieldEl.value += buttonValue;
}
