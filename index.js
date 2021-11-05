var cities = {
  "Europe": {
    // switz

    // italy
    "Rome": { lat: 41.902783, lng: 12.496366 },
    "Venice": { lat: 45.440847, lng: 12.315515 },

    // england
    "London": { lat: 51.507351, lng: -0.127758 },

    // ireland
    "Dublin": { lat: 53.349805, lng: -6.26031 },

    // germany
    "Berlin": { lat: 52.520007, lng: 13.404954 },
    "Freiburg": {lat:48.206394, lng: 7.858726},

    // france
    "Paris": { lat: 48.856614, lng: 2.352222 },
  },

  "Asia": {
    // japan
    "Tokyo": { lat: 35.689487, lng: 139.691706 },

    // china
    "Hong Kong": { lat: 22.396428, lng: 114.109497 },
    "Beijing": { lat: 39.9042, lng: 116.407396 },

    //singapore
    "Singapore":{lat:1.327369920, lng: 103.823598769}
  },

  "Australia": {
    "Sydney": { lat: -33.86882, lng: 151.209296 },
    "Melbourne": { lat: -37.813628, lng: 144.963058 }
  },

  "North America": {
    // usa
    "Las Vegas": { lat: 36.169941, lng: -115.13983 },
    "Los Angeles": { lat: 34.052234, lng: -118.243685 },
    "San Diego": { lat: 32.715738, lng: -117.161084 },
    "New York": { lat: 40.712775, lng: -74.005973 },
    "Boston": { lat: 42.360082, lng: -71.05888 },
    "Seattle": { lat: 47.606209, lng: -122.332071 },
    "Austin": {lat:30.281495824, lng:-97.74049898},

    // canada
    "Vancouver": { lat: 49.282729, lng: -123.120738 },
  },
  "Africa":{
    "Cape Town": {lat: -33.898698, lng: 18.4798117},
    //-33.89869871626943, 18.479811732213903
  }
};

// markers currently added
var markers = {
  "North America": [],
  "Europe": [],
  "Asia": [],
  "Australia": [],
  "Africa": [],
  "South America": []
};

function initMap() {
  // map constructor
  var map = new google.maps.Map(document.getElementById("map"), {
    gestureHandling: "auto",
    zoom: 4,
    center: { lat: 37.886925, lng: -122.210777 }, // menlo park
    minZoom: 3,
    maxZoom: 20,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  function zoomInMarker(marker) {
    var marker = marker;

    function nested() {
      console.log(marker.label.text);
      map.setZoom(map.zoom + 6);
      map.setCenter(marker.getPosition());
    }
    return nested;
  }

  // timeout so not everything drops at once
  function addMarkerWithTimeout(country, city, time) {
    window.setTimeout(function() {
      addMarker(country, city);
    }, time);
  }

  function addMarker(country, city) {
    var marker = new google.maps.Marker({
      label: {
        text: city,
        color: "white",
        fontSize: "10px"
      },
      animation: google.maps.Animation.DROP,
      position: cities[country][city],
      map: map
    });

    markers[country].push(marker);
    google.maps.event.addListener(marker, "click", zoomInMarker(marker));
  }

  // add menlo park as base
  //37.46690587312503, -122.20456336674557
  var menloPark = { lat: 37.4669058, lng: -122.2045633 };
  var temp = new google.maps.Marker({
    label: {
      text: "menlo park",
      color: "white",
      fontSize: "10px"
    },
    animation: google.maps.Animation.DROP,
    position: menloPark,
    map: map
  });

  function addCountry(country) {
    for (var i = 0; i < markers[country].length; i++) {
      markers[country][i].setMap(null);
    }
    var counter = 0;
    for (var city in cities[country]) {
      addMarkerWithTimeout(country, city, counter * 50);
      counter++;
    }
  }

  /* 
      FLOW:
      1. addCountry
      2. addMarkerWithTimeout 
      3. addMarker

      marker gets added in addmarker with all details
      */

  // BUTTONS

  // init buttons
  for (var country in markers) {
    // first letter lowercase + 1 to the end for button ID
    var id =
      country[0].toLowerCase() +
      country.slice(1, country.length).replace(/ /g, "") +
      "Button";

    // nested function
    document.getElementById(id).onclick = (function(country) {
      var country = country;

      function nested() {
        // change focus to center when clicked
        if (country == "Asia") {
          map.setCenter({ lat: 29.714699, lng: 118.337521 }); // Huangshan
        } else if (country == "North America") {
          map.setCenter({ lat: 40.820744, lng: -96.70047 }); // Nebraska (lol)
        } else if (country == "Europe") {
          map.setCenter({ lat: 47.050168, lng: 8.309307 });
        } else if (country == "Australia") {
          map.setCenter({ lat: -28.953512, lng: 135.857048 });
        } else if (country == "Africa") {
          map.setCenter({ lat: -24.4457910, lng: 25.92306747 });
        } else if (country == "South America") {
          map.setCenter({ lat: 6.998862, lng: -58.11546371 });
        }

        function unvisited(country) {
          swal({
            text: "Haven't visited " + country + " yet!",
            width: 300
          });
        }
        // check if visited country yet
        if (country === "South America") {
          return unvisited(country);
        } else {
          map.setZoom(5);
          addCountry(country);
        }
      }
      return nested;
    })(country);
  }

  // all
  var all = function() {
    for (var country in cities) {
      addCountry(country);
    }
    map.setZoom(3);
  };
  document.getElementById("all").onclick = all;
  // People kept asking me if I've been in menloPark my entire life
  window.onload = all; 

  // clear
  document.getElementById("clear").onclick = function() {
    for (var country in cities) {
      for (var i = 0; i < markers[country].length; i++) {
        markers[country][i].setMap(null);
      }
    }
  };

  // zoom out
  document.getElementById("out").onclick = function() {
    map.setZoom(3);
  };

  // home
  document.getElementById("home").onclick = function() {
    map.setCenter(menloPark);
  };

  // BUTTONS END

  // making sure doens't go out of bounds
  var lastValidCenter;
  setOutOfBoundsListener();

  function setOutOfBoundsListener() {
    google.maps.event.addListener(map, "dragend", function() {
      checkLatitude(map);
    });
    google.maps.event.addListener(map, "idle", function() {
      checkLatitude(map);
    });
    google.maps.event.addListener(map, "zoom_changed", function() {
      checkLatitude(map);
    });
  }

  function checkLatitude(map) {
    var bounds = map.getBounds();
    var sLat = map
      .getBounds()
      .getSouthWest()
      .lat();
    var nLat = map
      .getBounds()
      .getNorthEast()
      .lat();
    if (sLat < -85 || nLat > 85) {
      //the map has gone beyone the world's max or min latitude - gray areas are visible
      //return to a valid position
      if (this.lastValidCenter) {
        map.setCenter(this.lastValidCenter);
      }
    } else {
      this.lastValidCenter = map.getCenter();
    }
  }
}
