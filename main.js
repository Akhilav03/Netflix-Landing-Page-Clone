const membershipForm = document.querySelector('.membership_form');
const membershipInput = document.querySelector('.membership_input');
const membershipInputContainer = document.querySelector('.membership_input_container');
const membershipInputLabel = document.querySelector('.membership_placeholder');
const membershipInputMessage = document.querySelector('.membership_input_message');

const accordionQuestionEls = document.querySelectorAll('.accordion_question')

const ON_FOCUS = 'on-focus'; 


const validateEmail = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}


const handleFocusIn = () => {
    membershipInputContainer.classList.add(ON_FOCUS);
};


const handleFocusOut = () => {
    membershipInputContainer.classList.remove(ON_FOCUS);
    const isValid = validateEmail(membershipInput.value);
    membershipInputMessage.textContent = isValid ? '' : 'Invalid Email'; 
};


membershipInput.addEventListener('focus', handleFocusIn);
membershipInput.addEventListener('blur', handleFocusOut);


membershipForm.addEventListener('submit', (event) => {
    const email = membershipInput.value;
    if (!validateEmail(email)) {
        event.preventDefault(); 
        membershipInputMessage.textContent = 'Please enter a valid email address.'; 
    }
});


accordionQuestionEls.forEach((question) => {
    question.addEventListener('click', () => {

        const isActive = question.parentElement.classList.contains('active');

        accordionQuestionEls.forEach((el) => {
            el.parentElement.classList.remove('active');
            el.nextElementSibling.style.maxHeight = null; 
        });

        if (!isActive) {
            question.parentElement.classList.add('active');
            const panel = question.nextElementSibling;
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});



