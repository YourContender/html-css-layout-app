window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.hamburger');
    const menu = document.querySelector('.nav_block_link');
    const menuItem = document.querySelector('.block_item');

    burger.addEventListener('click', () => {
        burger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_block_link_active');

        if (burger.className === 'hamburger hamburger_active') {
            document.querySelector('body').style.overflow = 'hidden'
        } else {
            document.querySelector('body').style.overflow = ''
        }
    })

    menuItem.addEventListener('click', () => {
        document.querySelector('body').style.overflow = ''
    })
})