// JQUERY FULLPAGE
document.addEventListener('DOMContentLoaded', function () {
    
	"use strict";
    setTimeout(function () {
        $("a.scroll").addClass("scrollplease");
    }, 250);
	
	$(window).scroll(function () {
		if ($(this).scrollTop()) {
			$("a.scroll").removeClass("scrollplease");
		} else {
			$("a.scroll").addClass("scrollplease");
		}
	});
    
    $("#nav-btn").click(function () {
        $(".squeeze").toggleClass("is-active");
        $(".responsive-menu").slideToggle("expand");
    });
	
	var trigger = new ScrollTrigger({
		addHeight: true,
		centerHorizontal: true
	});
    
    var selectedClass = "";
    $(".flt-cat").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#gallery-images").fadeTo(100, 0.1);
        $("#gallery-images div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#gallery-images").fadeTo(300, 1);
        }, 300);
	});
    
});







// JAVASCRIPT DATE
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsMQ = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

var d = new Date();
var day = days[d.getDay()];
var month = months[d.getMonth()];
var monthMQ = monthsMQ[d.getMonth()];
var date = d.getDate();
var year = d.getFullYear();
var x = document.getElementById("date");


// JS DATE MQ
new WidthChange();

"use strict";
function WidthChange() {
    var windowSize = document.body.offsetWidth;

    if (windowSize <= 768) {
        x.innerHTML = day + " " + monthMQ + "/" + date + "/" + year;
    } else if (windowSize >= 769) {
        x.innerHTML = day + ", " + month + " " + date + ", " + year;
    }
}

window.addEventListener('resize', function () {
    WidthChange();
});





//WAYPOINT
var header = document.getElementById("header");
var hero = document.getElementById("hero");
var subBorder = new Waypoint({
	element: document.getElementById("timeline"),
	handler: function () {
		header.classList.toggle("subBD-remove");
		hero.classList.toggle("line1-remove");
	},
	offset: 290
});
var subH3 = new Waypoint({
	element: document.getElementById("timeline"),
	handler: function () {
		header.classList.toggle("subH3-remove");
		hero.classList.toggle("line2-remove");
	},
	offset: 233
});
var navBorder = new Waypoint({
	element: document.getElementById("timeline"),
	handler: function () {
		header.classList.toggle("nav-remove");
	},
	offset: 170
});
var nav = new Waypoint({
	element: document.getElementById("timeline"),
	handler: function () {
		header.classList.toggle("sticky");
	},
	offset: 115
});


