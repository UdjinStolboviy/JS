let btnBlock = document.querySelector('.btn-block'),
    btns = document.querySelector('button');

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log("Hello!");
    }
});

----------------------------------------------------------------------------

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('frst')) {
        console.log("Hello!");
    }
});

------------------------------------------------------------------------------------------

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.matches('button.first')) {
        console.log("Hello!");
    }
});