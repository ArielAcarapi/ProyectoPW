// ==== MENÚ HAMBURGUESA (móvil) ====
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('nav ul');

if (btnMenu && menu) {
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('activo');
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!btnMenu.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('activo');
        }
    });
}

// ==== CERRAR MENÚ AL HACER CLIC EN UN ENLACE (móvil) ====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        menu?.classList.remove('activo');
    });
});