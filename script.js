/add
const side1Slider = document.getElementById("side1");
const side2Slider = document.getElementById("side2");
const side3Slider = document.getElementById("side3");
const angle1Slider = document.getElementById("angle1");
const angle2Slider = document.getElementById("angle2");
const angle3Slider = document.getElementById("angle3");

const side1Value = document.getElementById("side1-value");
const side2Value = document.getElementById("side2-value");
const side3Value = document.getElementById("side3-value");
const angle1Value = document.getElementById("angle1-value");
const angle2Value = document.getElementById("angle2-value");
const angle3Value = document.getElementById("angle3-value");

const lockToggle = document.getElementById("lock-toggle");
const canvas = document.getElementById("triangleCanvas");
const ctx = canvas.getContext("2d");

const propertiesDisplay = document.getElementById("triangle-properties");
const validityDisplay = document.getElementById("triangle-validity");
const trigDisplay = document.getElementById("triangle-trig");

function updateValues() {
    side1Value.textContent = side1Slider.value;
    side2Value.textContent = side2Slider.value;
    side3Value.textContent = side3Slider.value;
    angle1Value.textContent = angle1Slider.value;
    angle2Value.textContent = angle2Slider.value;
    angle3Value.textContent = angle3Slider.value;

    validateTriangle();
    drawTriangle();
    calculateProperties();
}

function validateTriangle() {
    const s1 = +side1Slider.value;
    const s2 = +side2Slider.value;
    const s3 = +side3Slider.value;
    const valid = s1 + s2 > s3 && s1 + s3 > s2 && s2 + s3 > s1;

    validityDisplay.textContent = valid
        ? "This is a valid triangle."
        : "This is not a valid triangle.";
}

function drawTriangle() {
    const s1 = +side1Slider.value;
    const s2 = +side2Slider.value;
    const s3 = +side3Slider.value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    ctx.moveTo(250, 250);
    ctx.lineTo(250 + s1, 250);
    ctx.lineTo(250 + s2 * Math.cos((Math.PI * +angle1Slider.value) / 180), 250 - s2 * Math.sin((Math.PI * +angle1Slider.value) / 180));
    ctx.closePath();

    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    ctx.fill();
}

function calculateProperties() {
    const s1 = +side1Slider.value;
    const s2 = +side2Slider.value;
    const s3 = +side3Slider.value;

    const perimeter = s1 + s2 + s3;
    const semiPerimeter = perimeter / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - s1) * (semiPerimeter - s2) * (semiPerimeter - s3));

    propertiesDisplay.textContent = `Perimeter: ${perimeter}, Area: ${area.toFixed(2)}`;
}

side1Slider.addEventListener("input", updateValues);
side2Slider.addEventListener("input", updateValues);
side3Slider.addEventListener("input", updateValues);
angle1Slider.addEventListener("input", updateValues);
angle2Slider.addEventListener("input", updateValues);
angle3Slider.addEventListener("input", updateValues);
lockToggle.addEventListener("change", updateValues);

updateValues();
