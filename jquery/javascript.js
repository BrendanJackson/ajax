
//loads another page into element, hides the button that was there
function sendAJAX(){
	/*
	does what .load does
	$.get('sidebar.html', function(response){
		$('#ajax').html(response);
	});
	*/
	$('#ajax').load('sidebar.html');
	$('#load').hide();
}