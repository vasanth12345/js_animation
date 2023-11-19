const bc_animate_section = document.querySelectorAll('.animate');
const bc_animate_block_left = document.querySelectorAll('.animate_left');
const bc_animate_block_right = document.querySelectorAll('.animate_right');

const getAllAnimateElement = (bc_animate_section, visibleValue) => {
    let windowHeight = window.innerHeight / visibleValue;
    bc_animate_section.forEach(e => {
        let animateElementHeight = e.getBoundingClientRect().top;
        let fadeOutElement = (animateElementHeight + e.clientHeight) - 300;
        if (animateElementHeight <= windowHeight && fadeOutElement > 0) {
            e.classList.add('show_animation');
        } else if (fadeOutElement < 0) {
            e.classList.remove('show_animation');
        } else {
            e.classList.remove('show_animation');
        }
    })
}

window.addEventListener('scroll', (e) => {
    getAllAnimateElement(bc_animate_section, 1.3);
    getAllAnimateElement(bc_animate_block_left, 1.3);
    getAllAnimateElement(bc_animate_block_right, 1.3);
})
