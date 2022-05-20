document.addEventListener('DOMContentLoaded', () => {

    let callBackButton = document.getElementById('join-button');

    let modal1 = document.getElementById('modal-1');

    let closeButton = modal1.getElementsByClassName('modal_b_1')[0];

    let tagBody = document.getElementById('bb');

    callBackButton.onclick = function (e) {
        e.preventDefault();
        modal1.classList.add('modal_active');
        tagBody.classList.add('hide');
    }

    closeButton.onclick = function (e) {
        e.preventDefault();
        modal1.classList.remove('modal_active');
        tagBody.classList.remove('hide');
    }

    modal1.onmousedown = function (e) {
        let target = e.target;
        let modalContent = modal1.getElementsByClassName('modal__content')[0];
        if (e.target.closest('.' + modalContent.className) === null) {
            this.classList.remove('modal_active');
            tagBody.classList.remove('hide');
        }
    };

    let subButton = document.getElementById('sub-but');

    let modal2 = document.getElementById('modal-2');

    let acceptButton = document.getElementById('modal_accept')

    let clButton = modal2.getElementsByClassName('modal_b_refuse')[0];

    subButton.onclick = function (e) {
        e.preventDefault();
        modal2.classList.add('modal_active');
        tagBody.classList.add('hide');
    }

    clButton.onclick = function (e) {
        e.preventDefault();
        modal2.classList.remove('modal_active');
    }

    //Вывод в консоль
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')

    acceptButton.onclick = function (e) {
        e.preventDefault();
        console.log('Имя: ' + name.value.replace(/-/ig, '_'));
        console.log('Почта: ' + email.value)
        console.log('Пароль: ' + password.value)
        modal1.classList.remove('modal_active');
        modal2.classList.remove('modal_active');
        tagBody.classList.remove('hide');
    }
    name.addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/ /ig, '-');
    });
});

