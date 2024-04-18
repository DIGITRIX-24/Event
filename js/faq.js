$(document).ready(function() {
    $('.faq-question').click(function() {
        $('.faq-answer').not($(this).next('.faq-answer')).slideUp(400, "linear");
        $(this).next('.faq-answer').slideToggle(200, "linear");
        $('.faq-question').find('svg.bi-minus').not($(this).find('svg')).removeClass('bi-minus').addClass('bi-plus');
        const icon = $(this).find('svg');
        icon.toggleClass('bi-plus bi-minus');
    });
});
