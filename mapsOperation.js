var myFirstMap;
var lat = -23;
var lng = 130;

function addMarker(lat,lng){
	// create marker with coordinates from function addMarker
	//var markerOption;
	//markerOption.position = new google.maps.LatLng(lat,lng);
	//markerOption.map =  myFirstMap; // obiekt mapa jest obiektem globalnym!
	alter("wadd");
	var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat,lng),
    map: myFirstMap,
    title: 'Hello World!'
  });
	
	//var marker1 = new google.maps.Marker(markerOption);
        //marker1.txt = '<strong>Uniwersytet Szczeciński</strong><br />Wydział Nauk Ekonomicznych i Zarządzania<br /><a href="http://www.wneiz.pl">www.wneiz.pl</a>';
        
       // google.maps.event.addListener(marker1, "click", function()
       // {
       //     infoDialog.setContent(marker1.txt);
        //    infoDialog.open(myFirstMap, marker1)
       // });
}

function mapsStart() {
    var coordinates = new google.maps.LatLng(lat, lng);
    var mapOption = {
                    zoom: 3,
                    center: coordinates,
                    mapTypeId: google.maps.MapTypeId.SATELLITE
                };
    myFirstMap = new google.maps.Map(document.getElementById("maps"), mapOption);
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
	
	mapsStart(); //to change maps
	var position = new google.maps.LatLng(lat,lng);	
    var marker = new google.maps.Marker({   //add marker
		position: position,
		map: myFirstMap,
		title: 'This is your dastination!'
	});
}

