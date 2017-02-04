$(document).ready(function() {

	var about_section = $("#about"),
		work_section = $("#work"),
		contact_section = $("#contact");

	var sections = [about_section, work_section, contact_section];


	// hide the desired sections
	$(".hidden").hide().removeClass("hidden");


	// show the about section
	$(".about").on("click", function(event) {
		event.preventDefault();

		var parent_selector = $(this).parent();

		// if the parent <li> don't has `active` class
		if (!parent_selector.hasClass("current")) {
			parent_selector.addClass("current");

			// remove `current` class from other <li>s
			parent_selector.siblings().removeClass("current");
		}

		// show the section
		toggle_visibility(about_section);

	});

	// show the work section
	$(".work").on("click", function(event) {
		event.preventDefault();

		var parent_selector = $(this).parent();

		// if the parent <li> don't has `active` class
		if (!parent_selector.hasClass("current")) {
			parent_selector.addClass("current");

			// remove `current` class from other <li>s
			parent_selector.siblings().removeClass("current");
		}

		// show the section
		toggle_visibility(work_section);

	});

	// show the contact section
	$(".contact").on("click", function(event) {
		event.preventDefault();

		var parent_selector = $(this).parent();

		// if the parent <li> don't has `active` class
		if (!parent_selector.hasClass("current")) {
			parent_selector.addClass("current");

			// remove `current` class from other <li>s
			parent_selector.siblings().removeClass("current");
		}

		// show the section
		toggle_visibility(contact_section);

	});


	// show/hide a particular section
	function toggle_visibility(section) {
		// section is already visible, no need for any work
		if (section.hasClass("visible")) {
			return;
		}

		// show the requested section and hide other sections
		for (var i = 0; i < sections.length; ++i) {
			// if current element is desired section
			if (sections[i] === section) {
				// show section
				sections[i].fadeIn("slow").addClass("visible");
			} else {
				// hide the section 
				sections[i].hide().removeClass("visible");
			}
		}
	}

});