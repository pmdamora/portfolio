var map;
var allMarkers = [];
var infoWindow = null;
var defLat = 37.09024;
var defLng = -120.712891;
var defZoom = 4;

function initMap() {
    var ZOOM = 7;
    var OFFSETX = 300;
    var OFFSETY = -275;
    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#00ff6a"
                    },
                    {
                        "saturation": -1.0989010989011234
                    },
                    {
                        "lightness": 11.200000000000017
                    },
                    {
                        "gamma": 1
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#0078FF"
                    },
                    {
                        "saturation": -13.200000000000003
                    },
                    {
                        "lightness": 2.4000000000000057
                    },
                    {
                        "gamma": 1
                    }
                ]
            }
        ],
        {name: 'Styled Map'}
    );

    // Initialize the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: defLat, lng: defLng},
        zoom: defZoom,
        mapTypeControl: false,
        streetViewControl: false
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // Add the Fusion Tables layer to show completed state overlays
    layer = new google.maps.FusionTablesLayer({
        map: map,
        suppressInfoWindows: true,
        clickable: false,
        heatmap: { enabled: false },
        query: {
            select: "col3",
            from: "10oOONWwooya-RuroerHH9aPZHGazIP54gKoBUlF6",
            where: ""
        },
        options: {
            styleId: 2,
            templateId: 2
        }
    });

    // Original svg paths
    var baseSvg = {
        inner: 'M8 2.1c1.1 0 2.2 0.5 3 1.3 0.8 0.9 1.3 1.9 1.3 3.1s-0.5 2.5-1.3 3.3l-3 3.1-3-3.1c-0.8-0.8-1.3-2-1.3-3.3 0-1.2 0.4-2.2 1.3-3.1 0.8-0.8 1.9-1.3 3-1.3z',
        middle: 'M8 15.8l-4.4-4.6c-1.2-1.2-1.9-2.9-1.9-4.7 0-1.7 0.6-3.2 1.8-4.5 1.3-1.2 2.8-1.8 4.5-1.8s3.2 0.7 4.4 1.9c1.2 1.2 1.8 2.8 1.8 4.5s-0.7 3.5-1.8 4.7l-4.4 4.5zM4 10.7l4 4.1 3.9-4.1c1-1.1 1.6-2.6 1.6-4.2 0-1.5-0.6-2.9-1.6-4s-2.4-1.7-3.9-1.7-2.9 0.6-4 1.7c-1 1.1-1.6 2.5-1.6 4 0 1.6 0.6 3.2 1.6 4.2v0z'
    }
    // Define the svg marker icon
    var markerIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#ed3426',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeOpacity: 1,
        strokeWeight: 0.8,
        scale: 4
    };

    // Add a maker for each highpoint in the JSON data
    highpoint_data.forEach(function(obj) {
        // Add Marker
        var marker = new google.maps.Marker({
            position: {lat: obj.lat, lng: obj.lon},
            map: map,
            icon: markerIcon,
            title: obj.highpoint
        });

        // Add listener to open window on click
        google.maps.event.addListener(marker, 'click', function() {
            // Add infowindow
            infoWindow = new SnazzyInfoWindow({
                marker: marker,
                closeWhenOthersOpen: true,
                panOnOpen: false,
                border: false,
                shadow: false,
                maxHeight: 500,
                backgroundColor: 'rgba(255,255,255,0.9)',
                wrapperClass: 'infowindow',
                content:
                    '<img class="summitPhoto" src="' +
                    obj.imageurl +
                    '"/>' +
                    '<h1>' +
                    obj.highpoint +
                    ', ' +
                    obj.sstate +
                    '</h1>' +
                    '<p><strong>Summited on: </strong>' +
                    obj.date +
                    '</p>' +
                    '<hr>' +
                    '<em>Elevation: ' +
                    obj.elevation +
                    '</em>',
            });

            // Open the window
            infoWindow.open();

            // Pan to and zoom to marker
            map.setZoom(ZOOM);
            offCenterPan(map, OFFSETX, OFFSETY, marker.position);
            //smoothZoom(map, ZOOM, map.getZoom());
        });

        // Push marker to array for later access
        allMarkers.push(marker);
    });
}

function offCenterPan(map, offsetx, offsety, latlng) {
    var point1 = map.getProjection().fromLatLngToPoint(
        (latlng instanceof google.maps.LatLng) ? latlng : map.getCenter()
    );
    var point2 = new google.maps.Point(
        ( (typeof(offsetx) == 'number' ? offsetx : 0) / Math.pow(2, map.getZoom()) ) || 0,
        ( (typeof(offsety) == 'number' ? offsety : 0) / Math.pow(2, map.getZoom()) ) || 0
    );
    map.setCenter(map.getProjection().fromPointToLatLng(new google.maps.Point(
        point1.x - point2.x,
        point1.y + point2.y
    )));
}

function smoothZoom (map, max, cnt) {
    if (cnt >= max) {
        return;
    }
    else {
        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt + 1);
        });
        setTimeout(function(){map.setZoom(cnt)}, 80);
    }
}

function selectMarker(index) {
    google.maps.event.trigger(allMarkers[index], 'click', allMarkers[index].position);
}

function resetMap() {
    map.setZoom(defZoom);
    map.setCenter({lat: defLat, lng: defLng});
    infoWindow.close();
}
