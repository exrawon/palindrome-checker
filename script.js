const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkResult() {
	if (textInput.value) {
		if (isPalindrome()) {
			console.log('yes palindrome');
			result.innerText = `"${textInput.value}" is a palindrome.`;
			result.innerHTML = `<span><span id="result-input">${textInput.value}</span> is a palindrome.</span>`;
		} else {
			console.log('no palindrome');
			// result.innerText = `"${textInput.value}" is not a palindrome.`;
			result.innerHTML = `<span><span id="result-input">${textInput.value}</span> is not a palindrome.</span>`;
		}
	} else alert('Please input a value.');
}

function isPalindrome() {
	const regex = /[A-Za-z0-9]/g;
	const result = textInput.value.match(regex).join('').toLowerCase();
	const resultReversed = textInput.value
		.match(regex)
		.reverse()
		.join('')
		.toLowerCase();

	console.log(result, resultReversed);
	if (result === resultReversed) {
		return true;
	}
	return false;
}

checkBtn.addEventListener('click', checkResult);
