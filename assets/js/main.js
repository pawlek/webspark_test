$(document).ready(function(){

    var width = $( window ).width();

    $(window).on('resize', function() {
        if ($(this).width() <= 1100) {

            $('[data-filter="rows"]').addClass('active');
            $('[data-filter="tiles"]').hide();

            $('[data-view]').attr('data-view', 'rows');
        } else {
            $('[data-filter="tiles"]').show();
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
    
    var content_inner = $('.content__inner').html("");

    var number = 10;
    for (var i = 0; i < number; i++) {
      content_inner.append('<div class="item"> <div class="img">  <img src="/assets/img/' + i.toString() + '-unsplash.jpg" alt="unsplash" /> </div>  <div class="data">  <div class="today">  <span class="title">Today</span> <div class="icons"> <div class="likes"> <i class="fas fa-heart"></i> 128 </div> <div class=" comments"> <i class="fas fa-comment-alt"></i> 31 </div> </div>  </div> <div class="last"> <span class="title">09-08-2021</span> <div class="icons"> <div class="likes"> <i class="fas fa-heart"></i> 128 </div> <div class=" comments"> <i class="fas fa-comment-alt"></i> 31 </div> </div> </div> <div class="info"> <span class="title">Image upload</span> 11-04-2021 </div> </div> </div>')
    }

    $('[data-load]').on('click', function(){

      var number = 10;
      for (var i = 0; i < number; i++) {
        content_inner.append('<div class="item"> <div class="img">  <img src="/assets/img/' + i.toString() + '-unsplash.jpg" alt="unsplash" /> </div>  <div class="data">  <div class="today">  <span class="title">Today</span> <div class="icons"> <div class="likes"> <i class="fas fa-heart"></i> 128 </div> <div class=" comments"> <i class="fas fa-comment-alt"></i> 31 </div> </div>  </div> <div class="last"> <span class="title">09-08-2021</span> <div class="icons"> <div class="likes"> <i class="fas fa-heart"></i> 128 </div> <div class=" comments"> <i class="fas fa-comment-alt"></i> 31 </div> </div> </div> <div class="info"> <span class="title">Image upload</span> 11-04-2021 </div> </div> </div>')
      }
  });
  
});