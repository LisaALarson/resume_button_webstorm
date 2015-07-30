$(document).ready(function(){
   $('body').append("<button id='clickButton'>click to see resume!</button>");

    $('body').on('click', '#clickButton', function(){
        $(this).hide();
        $("#container").slideDown();
    });

    $('body').on('click', '#container', function(){
       $(this).slideUp();
        $("#clickButton").show();
    });
});