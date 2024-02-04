// Calendar generation and interaction logic
const calendarContainer = document.getElementById('calendar');
const selectedDateInput = document.getElementById('selectedDate');
const bookedDates = ["2024-02-10", "2024-02-15", "2024-02-20"]; // Example booked dates

function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const calendar = `
        <div class="calendar-header">
            <button onclick="prevMonth()">←</button>
            <h3>${new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
            <button onclick="nextMonth()">→</button>
        </div>
        <table class="calendar-table">
            <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
            </thead>
            <tbody>
                ${generateCalendarBody(firstDay.getDay(), daysInMonth)}
            </tbody>
        </table>
    `;

    calendarContainer.innerHTML = calendar;
}

function generateCalendarBody(startDay, daysInMonth) {
    let calendarBody = '';
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        let row = '<tr>';

        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < startDay) || dayCounter > daysInMonth) {
                row += '<td></td>';
            } else {
                const date = new Date();
                date.setHours(0, 0, 0, 0);
                date.setDate(dayCounter);

                if (date >= new Date() && !bookedDates.includes(date.toISOString().split('T')[0])) {
                    row += `<td onclick="onDateSelected(this, '${date.toISOString().split('T')[0]}')">${dayCounter}</td>`;
                } else {
                    row += '<td class="booked">Booked</td>';
                }

                dayCounter++;
            }
        }

        row += '</tr>';
        calendarBody += row;
    }

    return calendarBody;
}

function prevMonth() {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function nextMonth() {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
}

function onDateSelected(cell, date) {
    // Remove highlight from previously selected date
    const previouslySelected = document.querySelector('.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    // Set the selected date to the hidden input field
    selectedDateInput.value = date;

    // Highlight the selected date
    cell.classList.add('selected');
}

// Initial calendar generation
const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
