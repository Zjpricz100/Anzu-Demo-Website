$(document).ready(function () {
    $('#bonus_button').click(function () {
        $('#popup').css('display', 'flex').animate({ opacity: 1 }, 'slow');
    });
    $('#return_button').click(function () {
        $('#popup').animate({ opacity: 0 }, 'slow', function () {
            $(this).css('display', 'none');
        });
    })
});