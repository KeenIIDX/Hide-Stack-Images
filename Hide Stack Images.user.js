// ==UserScript==
// @name Hide images
// @description Hide pointless images on SE posts.
// @namespace KeenIIDX
// @include http://stackoverflow.com/*
// @include http://serverfault.com/*
// @include http://superuser.com/*
// @include http://meta.stackoverflow.com/*
// @include http://meta.serverfault.com/*
// @include http://meta.superuser.com/*
// @include http://stackapps.com/*
// @include http://*.stackexchange.com/*
// @include http://askubuntu.com/*
// @include http://meta.askubuntu.com/*
// @include http://answers.onstartups.com/*
// @include http://meta.answers.onstartups.com/*
// @include http://mathoverflow.net/*
// @include http://meta.mathoverflow.net/*
// @include http://discuss.area51.stackexchange.com/*
// @exclude http://chat./
// @grant none


// ==/UserScript==
function with_jquery(f) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = "(" + f.toString() + ")(jQuery)";
    document.body.appendChild(script);
};


with_jquery(function($) {
	var images = $('td.postcell img[alt="enter image description here"], td.answercell img[alt="enter image description here"]');
	images.hide();
	
	images.wrap('<span class="pImageWrapper">');
	
	$('.pImageWrapper').append("<span><b>Image Hidden.  Click to unhide.</b></span>");
	
	$('.pImageWrapper').click(function(e){
		$(this).children().toggle();
	})

	$(‘a > .pImageWrapper’).unwrap();
});