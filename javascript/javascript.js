//Step 1) Create XMLhttp Request object
var xhr = new XMLHttpRequest();

// Step 2) Create callback function (This is where the data you recieve will go)
xhr.onreadystatechange = function (){
	if (xhr.readyState === 4) {
		if (xhr.status === 200) {
			document.getElementById('ajax').innerHTML = xhr.responseText;	
		} else {
			/*Alerts people if something screwed up*/
			alert(xhr.statusText);
		}
	}
};

//step 3) open request
xhr.open('GET', 'sidebar.html');

//send request button function
function sendAJAX(){
	
	//step 4) send request
	xhr.send();
	document.getElementById('load').style.display = "none";
};


