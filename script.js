// Loading Screen
window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 1000); // Adjust delay as needed
});

// Display Current Date and Time
function updateDate() {
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = weekdays[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const amPm = now.getHours() >= 12 ? 'PM' : 'AM';
    dateElement.textContent = `${day} ${month} ${date} ${hours}:${minutes} ${amPm}`;
}
updateDate();
setInterval(updateDate, 60000);
