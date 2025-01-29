const numberElement = document.getElementById("number")!;
const button = document.getElementById("generate")!;

button.addEventListener("click", () => {
    const randomNumber: number = Math.floor(Math.random() * 100) + 1;
    numberElement.textContent = randomNumber.toString();
});