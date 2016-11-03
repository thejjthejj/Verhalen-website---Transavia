/*function toggleClass(element, className) {
    document.querySelector(element).addEventListener('click', function () {
        this.classList.toggle(className);
    })
}

toggleClass('.show', 'tooltipelement');*/

$('.toggleModal').on('click', function (e) {
    $('.leeslijst').toggleClass('active');
});

setTimeout(function () {
    $('#container').remove();
}, 10000);