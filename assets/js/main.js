$(document).ready(function(){

    var width = $( window ).width();

    $(window).on('resize', function() {
        if ($(this).width() <= 1100) {

            $('[data-filter="rows"]').addClass('active');
            $('[data-filter="tiles"]').hide();

            $('[data-view]').attr('data-view', 'rows');

          width = $(this).width();


          $('.dev').text(width);
        }
      });


    $('[data-clear]').on('click', function(){
        var clear_input = $(this).attr('data-clear');

        $('#' + clear_input + ' input').val('');

        console.log(clear_input + ' is clear');
    });
    $('[data-filter]').on('click', function(){

        $('[data-filter]').not(this).removeClass('active');
        $(this).addClass('active');

        var table_view = $(this).attr('data-filter');

        $('[data-view]').attr('data-view', table_view);

    });

    // for (var i = 0; i <= 10; i++){
    //     // These variables need to be different for each iteration:
    //     var r = parseInt(Math.random()*256);
    //     var g = parseInt(Math.random()*256);
    //     var b = parseInt(Math.random()*256);
    //     var color = `rgb(${r},${g},${b})`;
        
    //     $('.item').css({"background": color}).appendTo("content__inner");
    // }


  
});