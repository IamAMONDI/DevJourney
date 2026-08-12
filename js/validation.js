/**
 * Form Validation Logic
 * Reusable validation functions using Regex.
 */

// Validation Patterns
const patterns = {
    // Basic full name validation (at least two words)
    fullName: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
    // ALU Institutional Email (requires @alustudent.com or @alu.edu, etc.)
    email: /^[a-zA-Z0-9._%+-]+@alustudent\.com$/,
    // Student ID (Assuming a numeric ID of specific length, e.g., 6 to 9 digits)
    studentId: /^\d{6,9}$/,
    // Optional phone number (basic international format)
    phone: /^\+?[1-9]\d{1,14}$/
};

const errorMessages = {
    fullName: 'Please enter a valid full name.',
    email: 'Must be a valid @alustudent.com email address.',
    studentId: 'Student ID must be 6-9 digits.',
    phone: 'Please enter a valid phone number.'
};

/**
 * Validates a single input element
 * @param {HTMLInputElement} input The input element to validate
 * @returns {boolean} True if valid, false otherwise
 */
function validateInput(input) {
    const id = input.id;
    const value = input.value.trim();
    const errorElement = document.getElementById(`${id}Error`);
    let isValid = false;

    // Skip validation for empty optional fields
    if (value === '' && !input.required) {
        setNeutral(input, errorElement);
        return true;
    }

    // Required field check
    if (value === '' && input.required) {
        setInvalid(input, errorElement, 'This field is required.');
        return false;
    }

    // Pattern matching
    if (patterns[id] && patterns[id].test(value)) {
        isValid = true;
        setValid(input, errorElement);
    } else if (patterns[id]) {
        isValid = false;
        setInvalid(input, errorElement, errorMessages[id]);
    } else {
        // Fallback for fields without specific patterns but are required and not empty
        isValid = true;
        setValid(input, errorElement);
    }

    return isValid;
}

function setValid(input, errorElement) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    if (errorElement) errorElement.textContent = '';
}

function setInvalid(input, errorElement, message) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    if (errorElement) errorElement.textContent = message;
}

function setNeutral(input, errorElement) {
    input.classList.remove('is-valid', 'is-invalid');
    if (errorElement) errorElement.textContent = '';
}
