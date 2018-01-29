var menu = {
	
	menuBusca:function(){
		jQuery(".img-busca").on('click', function(){
			jQuery("html").toggleClass('busca-active');
			jQuery(".busca").focus();
		});
	},

	menuMobile:function(){
		jQuery(".menu-open").on("click", function(){
			jQuery("html").toggleClass('menu-active');
			jQuery("html").removeClass("busca-active");
		});
	},

	mobileShare:function(){
		jQuery(".share-posts a").on('click', function(event){
			event.preventDefault();
			jQuery(this).parent().find(".social-media-share").stop().slideToggle(200);
		});
	},

	init:function(){
		this.menuBusca();
		this.menuMobile();
		this.mobileShare();
	}

}

$(document).ready(function(){
	menu.init();
});