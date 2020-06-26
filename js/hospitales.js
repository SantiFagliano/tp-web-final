$(document).ready(function() {
    $('#abrir1').click(function() {
        $('.popup1').show();
        $('.popup2').hide();
        $('.popup3').hide();
    });
    $('#cerrar1').click(function() {
        $('.popup1').hide();
    });

    $('#abrir2').click(function() {
        $('.popup2').show();
        $('.popup1').hide();
        $('.popup3').hide();
    });
    $('#cerrar2').click(function() {
        $('.popup2').hide();
    });

    $('#abrir3').click(function() {
        $('.popup3').show();
        $('.popup2').hide();
        $('.popup1').hide();
    });
    $('#cerrar3').click(function() {
        $('.popup3').hide();
    });
});