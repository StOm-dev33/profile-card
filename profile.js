const timeDisplay = document.querySelector ('["data-testid="test-user-time"]');
function updateTime() {
    const now = Date.now();
    timeDisplay.textContent = "Current time (ms): " + now;
}
updateTime();
setInterval(updateTime, 1000);

// const updateTime = document.querySelector('["data-testid="test-user-time"]') 
// const now = new  Date();
// const time = now.toLocaleTimeString();

// setInterval(updateTime, 1000);