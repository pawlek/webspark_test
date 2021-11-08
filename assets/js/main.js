$(document).ready(function(){

    for (var i = 0; i <= 10; i++){
        // These variables need to be different for each iteration:
        var r = parseInt(Math.random()*256);
        var g = parseInt(Math.random()*256);
        var b = parseInt(Math.random()*256);
        var color = `rgb(${r},${g},${b})`;
        
        $('.item').css({"background": color}).appendTo("content__inner");
    }
  
});