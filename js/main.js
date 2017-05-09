$(document).ready(function (){


    //click keyword button
    $('section.keywords .col').click(function (event){

        //show icon
        $(this).addClass('active');
        $('section.keywords .col').not(this).removeClass('active');


        //show text
        var textId = $(this).data('show');
        $('#' + textId).addClass('active');

        $('section.keywords-text .container').not('#' + textId).removeClass('active');
    });

});