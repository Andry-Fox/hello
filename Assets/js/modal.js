document.addEventListener('DOMContentLoaded', () => {

    // Кнопка по которой происходит клик
    let callBackButton = document.getElementById('join-button');

    // Модальное окно, которое необходимо открыть
    let modal1 = document.getElementById('modal-1');

    // Кнопка "закрыть" внутри модального окна
    let closeButton = modal1.getElementsByClassName('modal_b_1')[0];

    // Тег body для запрета прокрутки
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

    acceptButton.onclick = function (e) {
        e.preventDefault();
        modal1.classList.remove('modal_active');
        modal2.classList.remove('modal_active');
        tagBody.classList.remove('hide');
    }
});
