// Sree Nandanam Ayurveda Hospital JavaScript Document
//functions
function preloadImages(imgArray, callback) {
    var loadedImages = 0;
    var totalImages = imgArray.length;
    for (var i = 0; i < totalImages; i++) {
        var img = new Image();
        img.src = imgArray[i];
        img.onload = function () {
            loadedImages++;
            // When all images are loaded, call the callback function
            if (loadedImages === totalImages) {

            }
        };
    }
}
function numscrolls(obj) {
    $.getScript("js/counter.min.js").done(function () {
        $(obj).each(function () {
            $counters = $(this).text();
            $countnum = $counters.replace(",", "");
            $(this).easy_number_animate({
                start_value: 0,
                end_value: $countnum,
                duration: 1000,
                delimiter: ','
            });
        });
    });
}
function checkemaildomain(obj){
	if ($(obj).length > 0) {
		const freeDomains = [
			'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
			'aol.com', 'icloud.com', 'protonmail.com', 'zoho.com',
			'gmx.com', 'mail.com', 'yandex.com'
		];
		$(obj).on('change', function () {
			const email = $(this).val().trim().toLowerCase();
			const domain = email.split('@')[1];

			if (domain && $.inArray(domain, freeDomains) !== -1) {
				alert("Please use your business or organizational email address, not a free email provider.");
				$(this).val('').focus();
			}
		});
	}
}

//on page load
$(function () {
    var browserName = navigator.appName;
    var browserVer = parseInt(navigator.appVersion);
    if ((browserName == "Netscape" && browserVer < 5) || (browserName == "Microsoft Internet Explorer" && browserVer < 9)) {
        window.location = "detect_browser.html";
    }
	$("#loadin").fadeOut(3000); 
    const loadin = setTimeout(function () {
        $("#loadin").html("");
    }, 6000);
	$("body").addClass("show");
    var pageName = window.location.pathname.split("/").pop();
    if(pageName==""){
        pageName="index.html";
    }
    var selector = '[href="' + pageName + '"]';
    if ($(selector).length > 0) {
        $(".nav-item").removeClass("active");
        $(selector).closest(".nav-item").addClass("active");
    }
    if ($(".alert").length > 0) {
        var timer = setTimeout(function () {
            $(".alert").fadeOut()
        }, 12000);
    }
    if ($("#snahnavbars .dropdown-item.active").length > 0) {
        $("#snahnavbars .dropdown-item.active").parent(".dropdown-menu").parent(".nav-item").addClass("active");
    }
    if ($("#snahsearchbtn").length > 0) {
        $("#snahsearchbtn").click(function () {
            $("#snahsearch").slideDown(300, function () {
                $("#snah_search").focus();
            });
        });
        $("#snahsearchclose").click(function () {
            $("#snahsearch").slideUp(300);
        });
    }
    if ($("#whatsApp").length > 0) {
        var timer = setTimeout(function () {
            $("#whatsApp").addClass("anim_left");
        }, 5000);
        $("#whatsdis").click(function () {
            $(this).find('[class*="fa"]').toggleClass("d-none");
            $("#whatsApp").toggleClass("anim_right");
        });
    }
    if ($(".btn.btn-aside").length > 0) {
        $(".btn.btn-aside").click(function () {
            $('.btn.btn-aside [class*="fa-"]').toggleClass("d-none");
            $("aside.theme_adcolor_2").toggleClass("slide");
        });
    }
    if ($("#snah_gallery").length > 0) {
        $.getScript("js/lightgallery.min.js").done(function () {
            $("#snah_gallery").lightGallery({
                selector: "#snah_gallery .snah_photo_1 a",
                download: false
            });
        });
    }
    if ($(".snah_block2_flex").length > 0) {
        $.getScript("js/jquery-isotope.min.js").done(function () {
            var $grid = $(".snah_block2_flex").isotope({
                itemSelector: ".snah_block2_flex .snah_block2_1",
                percentPosition: true,
                transitionDuration: "0.7s",
                layoutMode: "masonry",
                masonry: {
                    columnWidth: ".snah_block2_flex .snah_block2_1",
                }
            });
        })
    }
    if ($("#gallery .snah_flex").length > 0) {
        $.getScript("js/jquery-isotope.min.js").done(function () {
            var $grid = $("#gallery .snah_flex").isotope({
                itemSelector: "#gallery .snah_flex .snah_flex_1",
                originLeft: true,
                percentPosition: true,
                transitionDuration: "0.7s",
                layoutMode: "masonry",
                masonry: {
                    columnWidth: "#gallery .snah_flex .snah_flex_1",
                }
            });
        })
    }
    if ($("#gallery").length > 0) {
        $.getScript("js/lightgallery.min.js").done(function () {
            $("#gallery").lightGallery({
                selector: "#gallery .snah_flex_1 a",
                download: false
            });
        });
    }
    if ($(".gallery").length > 0) {
        $.getScript("js/lightgallery.min.js").done(function () {
            $(".gallery").lightGallery({
                selector: ".gallery .snah_flex_1 a",
                download: false
            });
        });
    }
    if ($("#snah_carousel").length > 0) {
        $.getScript("js/slick.min.js").done(function () {
            $("#snah_carousel").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                centerMode: true,
                nextArrow: '<i class="fa-solid fa-circle-right"></i>',
                prevArrow: '<i class="fa-solid fa-circle-left"></i>',
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000
            });
        });
    }
    if ($("#snah_slider .snah_slider").length > 0) {
        $.getScript("js/slick.min.js").done(function () {
            $("#snah_slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                centerMode: false,
                nextArrow: '<i class="fa-solid fa-circle-right"></i>',
                prevArrow: '<i class="fa-solid fa-circle-left"></i>',
                arrows: true,
                autoplay: true,
                autoplaySpeed: 9000                
            });
        });
    }
    if ($(".snah_sliders").length > 0) {
        $.getScript("js/slick.min.js").done(function () {
            $(".snah_sliders").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
                centerMode: false,
                nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
                prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 426,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
    }
    if ($("video").length > 0) {
        let videos = document.querySelectorAll("video");
        videos.forEach((video) => {
            video.addEventListener("play", function () {
                videos.forEach((vid) => {
                    if (vid !== video) {
                        vid.pause();
                    }
                });
            });
        });
    }
});
