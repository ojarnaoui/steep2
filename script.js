$(function () {
	const here = {
	apiKey:'KIkvbFS6m8sHRe4oFi7YQ_90C8mxPl94dFuLNW4F8uM'
	}
	const style = 'normal.day';

	const hereTileUrl = `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/${style}/{z}/{x}/{y}/512/png8?apiKey=${here.apiKey}&ppi=320`;

	const map = L.map('map', {
	 center: [28, -9],
	 zoom: 5,
	 minZoom: 5,
	 maxZoom: 11,
	 layers: [L.tileLayer(hereTileUrl)]
	});
	map.attributionControl.addAttribution('&copy; HERE 2020');

	  L.control.scale().addTo(map);





function setFlatTheme() {
		$("body").toggleClass("flat-theme");
		$("#rad-color-opts").toggleClass("hide");
		$(".rad-chk-pin input[type=checkbox]").prop("checked", true);
	}

	setFlatTheme();

	$(window).on("scroll", function (e) {
		if ($(window).scrollTop() > 50) {
			$("body").addClass("sticky");
		} else {
			$("body").removeClass("sticky");
		}
	});

	$(document).on("click", function (e) {
		e.preventDefault();
		var $item = $(".rad-dropmenu-item");
		if ($item.hasClass("active")) {
			$item.removeClass("active");
		}
	});

	$(".rad-sidebar a").on("click", function (e) {
		e.stopPropagation();
	});

	$(".rad-toggle-btn").on("click", function () {
		$(".rad-logo-container").toggleClass("rad-nav-min");
		$(".rad-sidebar").toggleClass("rad-nav-min");
		$(".rad-body-wrapper").toggleClass("rad-nav-min");

	});

	$("li.rad-dropdown > a.rad-menu-item").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".rad-dropmenu-item").removeClass("active");
		$(this).next(".rad-dropmenu-item").toggleClass("active");
	});

	$(".fa-chevron-down").on("click", function () {
		var $ele = $(this).parents(".panel-heading");
		$ele.siblings(".panel-footer").toggleClass("rad-collapse");
		$ele.siblings(".panel-body").toggleClass("rad-collapse", function () {

		});
	});

	$(".fa-close").on("click", function () {
		var $ele = $(this).parents(".panel");
		$ele.addClass("panel-close");
		setTimeout(function () {
			$ele.parent().remove();
		}, 210);
	});

	$(".fa-rotate-right").on("click", function () {
		var $ele = $(this).parents(".panel-heading").siblings(".panel-body");
		$ele.append(
			'<div class="overlay"><div class="overlay-content"><i class="fa fa-refresh fa-2x fa-spin"></i></div></div>'
		);
		setTimeout(function () {
			$ele.find(".overlay").remove();
		}, 2000);
	});

	$(".rad-color-swatch input[type=radio]").change(function (e) {
		if ($(".rad-chk-pin input[type=checkbox]").is(":checked")) {
			$("body").removeClass().addClass("flat-theme").addClass(this.value);
			$(".rad-color-swatch label").removeClass("rad-option-selected");
			$(this).parent().addClass("rad-option-selected");
			$(window).scrollTop(0);
		}
	});

	$(".rad-notification-item").on("click", function (e) {
		e.stopPropagation();
	});

});
