(function(){function e(e){var t=0,n=2;$("#images").children().each(function(){var r=$(this).attr("data-owidth")/$(this).attr("data-oheight"),i=Math.round(r*e);t+=i+n});$("#images").width(Math.ceil(t))}function t(e){var t=0,n=2;$("#images").children().each(function(){var r=$(this).attr("data-owidth")/$(this).attr("data-oheight"),i=Math.round(e/r);console.log(i);t+=i+n});$(".page-container").height(Math.ceil(t))}function n(){$("#images").children().each(function(){$(this).bind("load",function(){$(this).removeClass("invisible");$(this).addClass("visible")});$(this).attr("src",$(this).attr("data-src"))})}function r(){if($(window).width()<800){$("#images").css("width","100%");t($(window).width()*.8)}else{$(".page-container").css("height","100%");e($(window).height()*.8)}n()}$(window).resize(function(){if($(window).width()<800){$("#images").css("width","100%");t($(window).width()*.8)}else{$(".page-container").css("height","100%");e($(window).height()*.8)}});$(document).on("click",function(e){e.preventDefault();$(".page-container").toggleClass("menu-open")});r()})();