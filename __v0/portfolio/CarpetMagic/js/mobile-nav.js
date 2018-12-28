//$(function () {
//	$nav_button = $('.mobile-nav');
//
//	var isClosed = true;
//
//	$nav_button.click(function (e) {
//		isClosed = false;
//		document.getElementById("side-nav").style.width = "75vw";
//		e.stopPropagation();
//	});
//
//	$(".sidenav").click(function (e) {
//		e.stopPropagation();
//	});
//
//	$("html").click(function () {
//		if (!isClosed) {
//			document.getElementById("side-nav").style.width = "0px";
//			isClosed = true;
//		}
//	});
//});
$(function () {
    var $body = $(document);

    $mobile_button = $('.mobile-nav');
    $content_panel = $('#content');
    $side_panel = $('#side_panel');
    $close_button = $('#close_button');
    $active_link = $('#active');

    $mobile_button.click(function () {
        $content_panel.animate({
            left: "100%"
        }, 400);

        $side_panel.animate({
            left: "0"
        }, 400)

        $(document.body).css({
            overflowY: "hidden"
        });

    });

    $active_link.click(function(){
        closeMenu();
    })

    $close_button.click(function () {
       closeMenu();
    });


    function closeMenu(){
         $content_panel.animate({
            left: "0"
        }, 400);
        $side_panel.animate({
            left: "100%"
        }, 400);

        $(document.body).css({
            overflowY: "scroll"
        });
    }

});