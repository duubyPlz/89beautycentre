
console.log("IN MAIN WIHT JQUERY...");
$('.collapse-close').click(function (e) {
    console.log('CLICKEDDDD')
    e.preventDefault();
    $('.navbar-collapse').toggleClass('show');
});
