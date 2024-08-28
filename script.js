document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';

    if (!username || !password) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    alert('Login bem-sucedido!'); 
});
