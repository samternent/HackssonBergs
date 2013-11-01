// function success(position) {
//   var s = document.querySelector('#status');
  
//   if (s.className == 'success') {
//     // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
//     return;
//   }
  
//   s.innerHTML = "found you!";
//   s.className = 'success';
  
//   var mapcanvas = document.createElement('div');
//   mapcanvas.id = 'mapcanvas';
//   mapcanvas.style.height = '400px';
//   mapcanvas.style.width = '560px';
    
//   document.querySelector('article').appendChild(mapcanvas);
  
//   var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//   //console.log(latlng);

//    getCountryInfo(latlng);
// }

// function error(msg) {
//   var s = document.querySelector('#status');
//   s.innerHTML = typeof msg == 'string' ? msg : "failed";
//   s.className = 'fail';
// }

//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(success, error);
//     } else {
//       error('not supported');
//     }


//     function getCountryInfo(latlng) {

//     var geocoder =  new google.maps.Geocoder();

//     geocoder.geocode({'latLng': latlng}, function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//       console.log(results)
//         if (results[1]) {
        
//         window.parsedResults = results[results.length - 2].formatted_address;


//         console.log(parsedResults);
//         } else {
//           return "No results found";
//         }
//       } else {
//         return "Geocoder failed due to: " + status;
//       }
//     });
//   }