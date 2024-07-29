const textarea = document.getElementById('textarea');
const totalCounter = document.getElementById('total');
const remainingCounter = document.getElementById('remaining');
const maxChars = 50;

textarea.addEventListener('input', () => {
    const textLength = textarea.value.length;
    totalCounter.textContent = textLength;
    remainingCounter.textContent = maxChars - textLength;
});