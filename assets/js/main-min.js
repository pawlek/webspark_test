$(document).ready((function(){$(window).on("resize",(function(){$(this).width()<=1100?($('[data-filter="rows"]').addClass("active"),$('[data-filter="tiles"]').hide(),$("[data-view]").attr("data-view","rows")):$('[data-filter="tiles"]').show()})),rome(from,{initialValue:today,min:today,max:"2022-10-30",weekStart:1,time:!1,inputFormat:"DD.MM.YY"}),rome(to,{min:"2021-11-01",max:"2022-10-30",weekStart:1,time:!1,inputFormat:"DD.MM.YY"}),$("[data-clear]").on("click",(function(){var a=$(this).attr("data-clear");$("input#"+a).val("")})),$("[data-filter]").on("click",(function(){$("[data-filter]").not(this).removeClass("active"),$(this).addClass("active");var a=$(this).attr("data-filter");$("[data-view]").attr("data-view",a)}));for(var a=$(".content__inner").html(""),s=0;s<10;s++)a.append('<div class="item"> <div class="img">  <img src="/assets/img/'+s.toString()+'-unsplash.jpg" alt="unsplash" /> </div>  <div class="data">  <div class="today">  <span class="title">Today</span> <div class="icons"> <div class="likes"> <i class="fas fa-heart"></i> 128 </div> <div class=" comments"> <i class="fas fa-comment-alt"></i> 31 </div> </div>  </div> <div class="last"> <span class="title">09-08-2021</span> <div class="icons"> <div class="likes"> <i class="fas fa-heart"></i> 128 </div> <div class=" comments"> <i class="fas fa-comment-alt"></i> 31 </div> </div> </div> <div class="info"> <span class="title">Image upload</span> 11-04-2021 </div> </div> </div>');$("[data-load]").on("click",(function(s){s.preventDefault();for(var i=0;i<10;i++)a.append('<div class="item"> <div class="img">  <img src="/assets/img/'+i.toString()+'-unsplash.jpg" alt="unsplash" /> </div>  <div class="data">  <div class="today">  <span class="title">Today</span> <div class="icons"> <div class="likes"> <i class="fas fa-heart"></i> 128 </div> <div class=" comments"> <i class="fas fa-comment-alt"></i> 31 </div> </div>  </div> <div class="last"> <span class="title">09-08-2021</span> <div class="icons"> <div class="likes"> <i class="fas fa-heart"></i> 128 </div> <div class=" comments"> <i class="fas fa-comment-alt"></i> 31 </div> </div> </div> <div class="info"> <span class="title">Image upload</span> 11-04-2021 </div> </div> </div>')}))}));