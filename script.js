const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

const inputLength = () => input.value.length;

//new list items
const createListElement = () => {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	// creates delete button
	let btn = document.createElement('button');
	btn.innerHTML = "Done";
	li.appendChild(btn);
	//removes element
	btn.addEventListener('click', () => {
		li.parentNode.removeChild(li);
	})

	ul.appendChild(li);
	input.value = "";
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);