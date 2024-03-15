function toggleButtonClass(button) {
    const checkbox = button.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked; // Toggle checkbox state
    button.classList.toggle('checked'); // Toggle button class
}