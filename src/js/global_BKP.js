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

	$( document ).on( 'click', '#btn-brasas-contact-form', function( event ) {
		event.preventDefault();
		var url_service = BASE_URL + "services/ajax_add_comment_to_post";

		var form = document.forms.namedItem( 'brasas_contact_form' );
		var fd   = new FormData( form );
		$.ajax({
			method: 'POST',
			url: url_service,
			data: fd,
			processData: false,
			contentType: false,
			success: function( response ) {
				if ( 'success' === response.comment_save ) {
					$( 'form#brasas-contact-form' )[0].reset();
					$( '#post-comments .comentario-inner' ).prepend( response.comments );
					$( '#post-comments .comentario-inner .comentario:first-child' ).animate({
						opacity: '0'
					}, 1);
					$( '#post-comments .comentario-inner .comentario:first-child' ).animate({
						opacity: '1'
					}, 1000);
					$( '#success-message' ).animate({
						opacity: '1'
					}, 700);
					setTimeout( function() {
						$( '#success-message' ).animate({
							opacity: '0'
						}, 700);
					}, 4000 );
				} else {
					$( '#error-message' ).animate({
						opacity: '1'
					}, 700);
					setTimeout( function() {
						$( '#error-message' ).animate({
							opacity: '0'
						}, 700);
					}, 4000 );
				}
			}
		});
		return false; 
	});

});