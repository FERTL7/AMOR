document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const palabraSecreta = document.getElementById('iniciar').value;
    const contraseña = document.getElementById('password').value;

    if (palabraSecreta === 'Unabatidora007' && contraseña === '1234') {
        document.getElementById('loginLink').click(); 
    } else {
        alert('nO, estA mAl. Por taruga me debes un besO.'); 
    }
});
