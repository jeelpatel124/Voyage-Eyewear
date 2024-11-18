function openModal() {
    document.getElementById('authModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('authModal').style.display = 'none';
    resetForms();
}

function toggleForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');

    if (formType === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    } else {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
    }
}

function resetForms() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');
    document.querySelectorAll('.form-section input').forEach(input => input.value = '');
}

function register() {
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();

    if (name && email && password) {
        if (localStorage.getItem(email)) {
            alert('User already exists! Please login.');
        } else {
            const userData = { name, email, password };
            localStorage.setItem(email, JSON.stringify(userData));
            alert('Registration successful! You can now login.');
            toggleForm('login');
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (email && password) {
        const storedUser = localStorage.getItem(email);
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.password === password) {
                alert(`Welcome back, ${userData.name}!`);
                closeModal();
            } else {
                alert('Incorrect password. Please try again.');
            }
        } else {
            alert('User not found. Please register first.');
        }
    } else {
        alert('Please enter your email and password.');
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if (event.target === modal) {
        closeModal();
    }
}