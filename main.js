const input = document.querySelector('#input');
const inp_box = document.querySelector('.inp_box');


input.onclick = () => {

    inp_box.classList.toggle('inp_box_block');

};

const iconbtn = document.querySelectorAll('.icon');
const textIcon = document.querySelectorAll('.content_text');

for (let index = 0; index < iconbtn.length; index++) {

    iconbtn[index].addEventListener('click', (e) => {
        console.log(1, e.target.dataset.icon);

        const icons = e.target.dataset.icon

        for (let i = 0; i < textIcon.length; i++) {
            textIcon[i].style.display = 'none';
            if (icons === textIcon[i].dataset.text) {
                textIcon[i].style.display = 'block';
            }
        }

    })
}