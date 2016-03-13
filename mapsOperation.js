var myMap;
var lat = -23; // first coordinates
var lng = 130; // second coordinates

function mapsStart() {
	//set coordinates
    var coordinates = new google.maps.LatLng(lat, lng);
    
    //set map option
    var mapOption = {
                    zoom: 3,
                    center: coordinates,
                    mapTypeId: google.maps.MapTypeId.SATELLITE
                };
    
    //map create            
    myMap = new google.maps.Map(document.getElementById("maps"), mapOption); 
}

function drawCoordinates(){
    //draw for kind of number (minus or plus)
    var signLat, signLng;
    signLat = Math.floor(Math.random()* 10) + 1;
    signLng = Math.floor(Math.random()* 10) + 1;
    
    //draw coordinates
    lat = Math.floor(Math.random() * (90 + 1));
    lng = Math.floor(Math.random() * (180 + 1));
	if(signLat >= 5)
		lat = lat * (-1);
	if(signLng >= 5)
		lng = lng * (-1);
	
	mapsStart(); //to update maps
	var position = new google.maps.LatLng(lat,lng);	//set marker position
    var marker = new google.maps.Marker({   //add marker
		position: position,
		map: myMap,
		title: 'This is your dastination!'
	});
}

