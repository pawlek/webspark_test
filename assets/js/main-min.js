$(document).ready((function(){$("[data-clear]").on("click",(function(){var a=$(this).attr("data-clear");$("#"+a).val(""),console.log(a+" is clear")}));for(var a=0;a<=10;a++){var n=`rgb(${parseInt(256*Math.random())},${parseInt(256*Math.random())},${parseInt(256*Math.random())})`;$(".item").css({background:n}).appendTo("content__inner")}}));