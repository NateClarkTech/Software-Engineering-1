// calendarApp.js
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const header = document.getElementById("currentMonth");
const daysContainer = document.querySelector(".days");

function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    header.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    daysContainer.innerHTML = "";

    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement("div");
        daysContainer.appendChild(emptyDay);
    }
    // Add logic to populate days of the month here
}

// Call renderCalendar() to initialize the calendar
renderCalendar();
