function initMap() {}

initMap = function() {
  var center = { lat: 47.096256, lng: 37.514436 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: center,
    disableDefaultUI: true,
    mapTypeControl: true,
    styles: [
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      }
    ]
  });

  marker = new google.maps.Marker({
    position: center,
    map: map 
  });
           var contentmark = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">TRINITY</h1>'
    
      infowindow = new google.maps.InfoWindow({
        content: contentmark
      });

          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });

};