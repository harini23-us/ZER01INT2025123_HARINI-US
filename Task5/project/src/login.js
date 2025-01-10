export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  const minLength = 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);

  return {
    isValid: password.length >= minLength && hasSpecialChar && hasNumber && hasLetter,
    errors: {
      length: password.length < minLength,
      specialChar: !hasSpecialChar,
      number: !hasNumber,
      letter: !hasLetter
    }
  };
}

export function setupLoginForm(formElement) {
  const emailInput = formElement.querySelector('#email');
  const passwordInput = formElement.querySelector('#password');
  const togglePassword = formElement.querySelector('#togglePassword');
  const errorDisplay = formElement.querySelector('#error-message');

  emailInput.addEventListener('input', () => {
    const isValid = validateEmail(emailInput.value);
    emailInput.classList.toggle('invalid', !isValid);
    if (!isValid) {
      errorDisplay.textContent = 'Please enter a valid email address';
    } else {
      errorDisplay.textContent = '';
    }
  });

  passwordInput.addEventListener('input', () => {
    const validation = validatePassword(passwordInput.value);
    passwordInput.classList.toggle('invalid', !validation.isValid);
    
    if (!validation.isValid) {
      const errors = [];
      if (validation.errors.length) errors.push('at least 8 characters');
      if (validation.errors.specialChar) errors.push('a special character');
      if (validation.errors.number) errors.push('a number');
      if (validation.errors.letter) errors.push('a letter');
      errorDisplay.textContent = `Password must contain ${errors.join(', ')}`;
    } else {
      errorDisplay.textContent = '';
    }
  });

  togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
  });

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValid = validateEmail(emailInput.value);
    const passwordValid = validatePassword(passwordInput.value).isValid;

    if (emailValid && passwordValid) {
      console.log('Form submitted:', {
        email: emailInput.value,
        password: passwordInput.value
      });
      errorDisplay.textContent = 'Login successful!';
      errorDisplay.style.color = 'green';
    } else {
      errorDisplay.textContent = 'Please fix the errors before submitting';
      errorDisplay.style.color = 'red';
    }
  });
}