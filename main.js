const membershipForm = document.querySelector('.membership_form');
const membershipInput = document.querySelector('.membership_input');
const membershipInputContainer = document.querySelector('.membership_input_container');
const membershipInputLabel = document.querySelector('.membership_placeholder');
const membershipInputMessage = document.querySelector('.membership_input_message');

const ON_FOCUS = 'on-focus'; // This class is added/removed to/from the input container on focus/blur

// Email validation function using regex
const validateEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

// Handle input focus in
const handleFocusIn = () => {
    membershipInputContainer.classList.add(ON_FOCUS);
};

// Handle input focus out and validate email
const handleFocusOut = () => {
    membershipInputContainer.classList.remove(ON_FOCUS);
    const isValid = validateEmail(membershipInput.value);
    membershipInputMessage.textContent = isValid ? '' : 'Invalid Email'; // Show error message if invalid
};

// Adding event listeners for focus and blur events
membershipInput.addEventListener('focus', handleFocusIn);
membershipInput.addEventListener('blur', handleFocusOut);

// Form submission event handler
membershipForm.addEventListener('submit', (event) => {
    const email = membershipInput.value;
    if (!validateEmail(email)) {
        event.preventDefault(); // Prevent form submission
        membershipInputMessage.textContent = 'Please enter a valid email address.'; // Show error message
    }
});

