const spinButton = document.getElementById("spinButton");
const wheel = document.getElementById("wheel");
const marker = document.getElementById("marker");

function spin() {
    const slices = document.querySelectorAll(".slice");
    const degrees = Math.floor(Math.random() * 360) + 3600; // Add extra spins
    const winningSliceIndex = Math.floor(Math.random() * slices.length);
    const winningSlice = slices[winningSliceIndex];
    const sliceAngle = 360 / slices.length;

    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = `rotate(${degrees}deg)`;

    const markerRotation = (winningSliceIndex + 0.5) * sliceAngle + 90;
    marker.style.transition = "transform 5s ease-out";
    marker.style.transform = `translate(-50%, -100%) rotate(${markerRotation}deg)`;

    setTimeout(() => {
        alert(`You won on slice ${winningSliceIndex + 1}!`);
    }, 5000); // Alert after 5 seconds (same duration as rotation animation)
}

spinButton.addEventListener("click", spin);
