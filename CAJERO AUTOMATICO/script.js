const cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "2345" },
    { nombre: "Maui", saldo: 67, password: "3456" }
];

let cuentaActual = null;

function login() {
    const index = document.getElementById('cuenta').value;
    const password = document.getElementById('password').value;
    cuentaActual = cuentas[index];

    if (cuentaActual.password === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
        document.getElementById('usuario').textContent = cuentaActual.nombre;
        document.getElementById('mensaje').textContent = '';
    } else {
        document.getElementById('mensaje').textContent = 'Password incorrecto. Intenta de nuevo.';
    }
}

function consultarSaldo() {
    document.getElementById('mensaje').textContent = `Saldo actual: $${cuentaActual.saldo}`;
}

function ingresarMonto() {
    const monto = parseFloat(prompt("Ingresa el monto a ingresar:"));
    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido.");
        return;
    }
    if (cuentaActual.saldo + monto > 990) {
        alert("El saldo no puede superar los $990.");
        return;
    }
    cuentaActual.saldo += monto;
    document.getElementById('mensaje').textContent = `Monto ingresado: $${monto}. Nuevo saldo: $${cuentaActual.saldo}`;
}

function retirarMonto() {
    const monto = parseFloat(prompt("Ingresa el monto a retirar:"));
    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido.");
        return;
    }
    if (cuentaActual.saldo - monto < 10) {
        alert("El saldo no puede ser menor a $10.");
        return;
    }
    cuentaActual.saldo -= monto;
    document.getElementById('mensaje').textContent = `Monto retirado: $${monto}. Nuevo saldo: $${cuentaActual.saldo}`;
}

function logout() {
    cuentaActual = null;
    document.getElementById('login').style.display = 'block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('mensaje').textContent = '';
}
