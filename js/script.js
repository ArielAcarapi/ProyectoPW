const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('nav ul');
if (btnMenu && menu) {
    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('activo');
    });
    document.addEventListener('click', (e) => {
        if (!btnMenu.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('activo');
        }
    });
    document.querySelectorAll('nav a').forEach(a => {
        a.addEventListener('click', () => menu.classList.remove('activo'));
    });
}
const form = document.getElementById('contact-form');
const msg  = document.getElementById('msg');

if (form && msg) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();                    // evita que recargue la página
        msg.style.display = 'block';           // muestra el mensaje
        setTimeout(() => {
            msg.style.display = 'none';        // lo oculta después de 3.5 segundos
        }, 3500);
        form.reset();                          // borra todos los campos
    });
}