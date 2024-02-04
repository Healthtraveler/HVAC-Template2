// Time selection logic
const preferredTimeSelect = document.getElementById('preferred-time');
const bookedTimes = {"2024-02-10": ["08:00 AM", "03:00 PM"], "2024-02-15": ["09:00 AM"], "2024-02-20": ["01:00 PM", "05:00 PM"]}; // Example booked times

function updateAvailableTimes(selectedDate) {
    const availableTimes = ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];

    // Check if the selected date is in the booked dates array
    const isBookedDate = bookedDates.includes(selectedDate); // Remove this line

    // Get the already booked times for the selected date
    const bookedTimesForDate = bookedTimes[selectedDate] || [];

    // Update the preferred time options
    for (let i = 0; i < preferredTimeSelect.options.length; i++) {
        const timeOption = preferredTimeSelect.options[i];

        // Disable the option if it is already booked or if it's the current selected date
        timeOption.disabled = isBookedDate || bookedTimesForDate.includes(timeOption.value);
    }
}

// Event listener for date selection
calendarContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'TD' && !event.target.classList.contains('booked')) {
        const selectedDate = event.target.innerText;
        onDateSelected(event.target, selectedDate);
        updateAvailableTimes(selectedDate);
    }
});
