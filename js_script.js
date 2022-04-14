//Sets Variables
var thumb = $('.js-thumb');
var shine = $('.js-shine');
var moreInfo = $('.js-more-info');
var hovered = false;

//Event Listner waiting for the mouse to enter the div .thumb
thumb.on('mousemove', function(e){
	
	//set the hovered var to true
	hovered = true;
	
	//on hover if thumb has class idle removes it
	if ( $(this).hasClass('idle') ) {
		$(this).removeClass('idle');
	}
	
	// Define vars
	//gets the half point horizontally
	var hCenter = $(this).width() / 2;
	//gets the half point vertically
	var vCenter = $(this).height() / 2;
	//gets the x coord of the pointer
	var relativeX = (e.pageX - $(this).offset().left);
	//gets the y coords of the pointer
	var relativeY = (e.pageY - $(this).offset().top);
	//calculates the x rotation
	var xRotation = ( relativeY - vCenter ) * 0.1;
	//calculates the y rotation
	var yRotation = ( relativeX - hCenter ) * 0.05;
	//calculates the x-offset of the shine
	var xShine = ( relativeX * 100 ) / $(this).width();
	//calculates the y-offset of the shine
	var yShine = ( relativeY * 100 ) / $(this).height();
	
	//Invert x and y offset
	xShine = 100 - xShine;
	yShine = 100 - yShine;
	
	//var coords = [{xcord:xShine,ycod:yShine}]
	//console.table(coords);
	
	//Apply rotation to the element
	$(this).css({ transform : 'rotatex('+xRotation+'deg) rotatey('+yRotation+'deg)' });
	
	//Apply the shine to the element
	$('.js-shine').css({ background: 'radial-gradient(ellipse at '+xShine+'% '+yShine+'%, rgba(255,255,255,0.4) 0%,rgba(51,51,51,0) 60%)' });
	
});

//on the mouse leave reset the thumb
thumb.on('mouseleave', function(){
	$(this).css({ transform : 'rotatex(0deg) rotatey(0deg)' });
	$('.js-shine').css({ background: 'none' });
});

//event listner waiting for a click on the more info btn
moreInfo.on('click', function(){
	var info = $('.info');
	$('.info').toggleClass('open');
	if ( info.hasClass('open') ) {
		$(this).html('Less info');
	} else {
		$(this).html('More info');
	}
});

//After xs if no interaction was made with the thumbnail adds in a little helper with what to do, this should disapear after you mouse on the thumb
setTimeout(function(){
	if( hovered == false ) {
		thumb.addClass('idle');
	}
},8000);