(function($) { "use strict";
    // Dark mode
    $( ".inner-switch" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
          $( "body" ).removeClass( "dark" );
          $( ".inner-switch" ).text( "OFF" );
        } else {
          $( "body" ).addClass( "dark" );
          $( ".inner-switch" ).text( "ON" );
        }
      });

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px",
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px",
		i.style.left = n.clientX + "px",
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
})(jQuery);
// moving image
var pos = 0;
			window.setInterval(function(){
				pos++;
				document.getElementsByClassName('moving-image')[0].style.backgroundPosition = pos + "px 0px";
			}, 18
		);