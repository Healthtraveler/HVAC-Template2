// Function to handle date selection
function onDateSelected(cell, date) {
    // Remove highlight from previously selected date
    const previouslySelected = document.querySelector('.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    // Highlight the selected date
    cell.classList.add('selected');

    // Set the selected date to the hidden input field
    selectedDateInput.value = formatDate(date);
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
}

// Add event listeners to all calendar cells
const calendarCells = document.querySelectorAll('.calendar-table td');
calendarCells.forEach(cell => {
    cell.addEventListener('click', function() {
        const date = cell.dataset.date;
        onDateSelected(cell, date);
    });
});
