const calendarContainer = document.getElementById('calendar');
const selectedDateInput = document.getElementById('selectedDate');
const bookedDates = ['2024-02-05', '2024-02-10', '2024-02-15', '2024-02-20']; // Example of booked dates

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

function generateCalendar(year, month) {
    calendarContainer.innerHTML = ''; // Clear previous calendar

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const calendarHeader = document.createElement('div');
    calendarHeader.classList.add('calendar-header');
    calendarHeader.innerHTML = `
        <button id="prevMonthBtn" onclick="prevMonth()">←</button>
        <h3>${firstDay.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
        <button id="nextMonthBtn" onclick="nextMonth()">→</button>
    `;
    calendarContainer.appendChild(calendarHeader);

    const table = document.createElement('table');
    table.classList.add('calendar-table');

    // Create table header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
        </tr>
    `;
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement('tbody');
    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDay.getDay()) {
                cell.textContent = '';
            } else if (date > daysInMonth) {
                break;
            } else {
                const currentDate = new Date(year, month, date);
                cell.textContent = date;
                if (currentDate <= new Date() || bookedDates.includes(formatDate(currentDate))) {
                    cell.classList.add('disabled');
                } else {
                    cell.addEventListener('click', () => onDateSelected(cell, currentDate));
                }
                if (currentDate.getFullYear() === currentYear && currentDate.getMonth() === currentMonth && date === currentDate.getDate()) {
                    cell.classList.add('current-date');
                }
                date++;
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    calendarContainer.appendChild(table);
}

function prevMonth() {
    if (currentMonth === 0) {
        if (currentYear > new Date().getFullYear()) {
            currentYear--;
            currentMonth = 11;
            generateCalendar(currentYear, currentMonth);
        }
    } else {
        currentMonth--;
        generateCalendar(currentYear, currentMonth);
    }
}

function nextMonth() {
    if (currentMonth === 11) {
        currentYear++;
        currentMonth = 0;
        generateCalendar(currentYear, currentMonth);
    } else {
        currentMonth++;
        generateCalendar(currentYear, currentMonth);
    }
}

function onDateSelected(cell, date) {
    const previouslySelected = document.querySelector('.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }
    selectedDateInput.value = formatDate(date);
    cell.classList.add('selected');
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// Initial calendar generation
generateCalendar(currentYear, currentMonth);
