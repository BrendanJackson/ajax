$(document).ready(function{
	var url="../data/employees.json";
	getJSON(url, function(){
		var statusHTML = '<ul class="bulleted">';
		//$.each(object/array, function(index, value){
		$.each(response, function(index, employee){
			if (employee === true) {
				statusHTML += '<li class="in">'
			} else {
				statusHTML += '<li class="out">'
			}
			statusHTML += employee.name + '</li>';
		}); //end each loop
		statusHTML += '</ul>';
		$('#employeeList')
	}); //end getJSON
}); /*end ready*/