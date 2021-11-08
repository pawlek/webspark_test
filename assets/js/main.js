$(document).ready(function(){

    $('[data-clear]').on('click', function(){
        var clear_input = $(this).attr('data-clear');

        $('#' + clear_input + ' input').val('');

        console.log(clear_input + ' is clear');
    });

    for (var i = 0; i <= 10; i++){
        // These variables need to be different for each iteration:
        var r = parseInt(Math.random()*256);
        var g = parseInt(Math.random()*256);
        var b = parseInt(Math.random()*256);
        var color = `rgb(${r},${g},${b})`;
        
        $('.item').css({"background": color}).appendTo("content__inner");
    }


  
});