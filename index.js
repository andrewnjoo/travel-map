const cities = {
  "Europe": {
    // switz
    "Zurich": { lat: 47.37997, lng: 8.544727 },

    // netherlands
    "Amsterdam": { lat: 52.366117, lng: 4.906487 },

    // italy
    "Rome": { lat: 41.902783, lng: 12.496366 },
    "Florence": { lat: 43.769038, lng: 11.2558944 },
    "Venice": { lat: 45.440847, lng: 12.315515 },
    "Lake Como": { lat: 46.0151912, lng: 9.25846158 },

    // UK
    "London": { lat: 51.507351, lng: -0.127758 },
    "Winchester": { lat: 51.059731, lng: -1.3103569 },
    "Edinburgh": { lat: 55.952604, lng: -3.19124593 },
    "Dublin": { lat: 53.349805, lng: -6.26031 },
    "Skydiving": { lat: 52.485983, lng: 0.091165 },
    "Worth": { lat: 51.0930566, lng: -0.11896580 },

    // germany
    "Berlin": { lat: 52.520007, lng: 13.404954 },
    "Freiburg": {lat:47.99468, lng: 7.847574},
    "Frankfurt": {lat:50.11215, lng: 8.66952951},
    
    // belgium
    "Tomorrowland 2012": {lat:51.0849829, lng: 4.3427353},
    
    //luxembourg
    "Luxembourg": {lat:49.6176244, lng: 6.1228644},

    // france
    "Paris": { lat: 48.856614, lng: 2.352222 },
    "Monaco": { lat: 43.73838088, lng: 7.420744918 },
    "Courchevel": { lat: 45.430625, lng: 6.620229 },
    "Mt St Michel": { lat: 48.63614, lng: -1.5115506 },
    "Lourdes": { lat: 43.0954821, lng: -0.049876 },
    
    //spain
    "Madrid": { lat: 40.40675185, lng: -3.6994192871 },
    "Barcelona": { lat: 41.3867033, lng: 2.168222 },
    "Ibiza": { lat: 38.9059562, lng: 1.419345 },
    
    //portugal
    "Lisbon": { lat: 38.7227148, lng: -9.1402474 },

    //norway
    "Tromso": { lat: 69.6656179, lng: 18.99390165 },
    "Oslo": { lat: 59.914038, lng: 10.751365 },

    //greece
    "Athens": { lat: 38.0922492, lng: 23.79787679 },
    
    //cyprus
    "Paphos": { lat: 34.773563719475746, lng: 32.42917429784894 },
    //russia
    "St. Petersburg": { lat: 59.929348, lng: 30.3589912 },
  },

  "Asia": {
    //maldives
    "Maldives": { lat: 4.17575, lng: 73.509855 },

    //kazakhstan
    "Nur-Sultan": { lat: 51.161007, lng: 71.4659822 },
    "Almaty": { lat: 43.228205, lng: 76.8562796 },

    //india
    "New Delhi": { lat: 28.614104, lng: 77.20887 },
    "Jaipur": { lat: 26.910907, lng: 75.78578 },
    "Taj Mahal": { lat: 27.1751309, lng: 78.0421007 },

    //indonesia
    "Jakarta": { lat: -6.2017397, lng: 106.89204434 },
    "Bali": { lat: -8.394588566, lng: 115.1746802 },
    "Jogja": { lat: -7.79538103, lng: 110.368833 },
    "Lombok": { lat: -8.6602898, lng: 116.328035 },
    "Raja Ampat": { lat: -0.1789009, lng: 130.97536 },
    
    //malaysia
    "Tioman": { lat: 2.793104, lng: 104.1682734 },

    // korea
    "Seoul": { lat: 37.554694, lng: 126.9863232 },
    // japan
    "Tokyo": { lat: 35.689487, lng: 139.691706 },
    "Mt. Fuji": { lat: 35.36056, lng: 138.72773238 },
    "Niseko": { lat: 42.807218, lng: 140.6832337 },

    // china
    "Hong Kong": { lat: 22.396428, lng: 114.109497 },
    "Beijing": { lat: 39.9042, lng: 116.407396 },
    "Xiamen": { lat: 24.482014, lng: 118.088045 },

    //thailand
    "Bangkok":{lat:13.74867, lng: 100.4829244},
    "Phuket":{lat:7.894227767543605, lng: 98.3929683326708},
    "Ko Tao":{lat:10.094809, lng: 99.8388379},
    "Kanchanaburi":{lat:14.0919356, lng: 99.4182055},

    //singapore
    "Singapore":{lat:1.327369920, lng: 103.823598769},
    
    //brunei
    "Brunei":{lat:4.922157, lng: 114.940172},

  },

  "Australia": {
    "Sydney": { lat: -33.86882, lng: 151.209296 },
    "Melbourne": { lat: -37.813628, lng: 144.963058 }
  },

  "North America": {
    // usa
    "Honolulu": {lat:21.306308, lng:-157.85877},
    
    //alaska
    "Juneau": { lat: 58.302532, lng: -134.419492 },
    "Ketchikan": { lat: 55.35104, lng: -131.6728397 },
    "Sitka": { lat: 57.053961, lng: -135.329605 },
    "Skagway": { lat: 59.4545851, lng: -135.319197 },

    //west coast
    "Seattle": { lat: 47.606209, lng: -122.332071 },
    "Paradiso 2016": { lat: 47.1012438, lng: -119.995693 },
    "Los Angeles": { lat: 34.052234, lng: -118.243685 },
    "San Diego": { lat: 32.715738, lng: -117.161084 },
    "Lake Tahoe": { lat: 39.108065306, lng: -120.03451876 },
    "Sacramento": { lat: 38.57946, lng: -121.494717 },
    "Calistoga": { lat: 38.57876, lng: -122.579828 },
    "SLO": { lat: 35.28266246, lng: -120.6601603 },

    "San Francisco": { lat: 37.774136, lng: -122.4190519 },
    "Portland": { lat: 45.51966, lng: -122.675034 },
    "Black Rock City": { lat: 40.9108653, lng: -119.0560009 },
    "Reno": { lat: 39.526945, lng: -119.8130985 },
    "Las Vegas": { lat: 36.169941, lng: -115.13983 },
    "Denver": { lat: 39.7440239, lng: -104.98957 },
    "Yellowstone": { lat: 44.428536, lng: -110.587402 },
    "Jackson": { lat: 43.4755751, lng: -110.77230584 },

    "El Paso": {lat:31.79554358, lng:-106.4510414},
    "Marfa": {lat:30.31183, lng:-104.0228515},
    "Austin": {lat:30.281495824, lng:-97.74049898},
    "Dallas": {lat:32.8036733, lng:-96.770444},
    "San Antonio": {lat:29.5069808, lng:-98.475975385},
    "Houston": {lat:29.761413, lng:-95.3706327},

    "New York": { lat: 40.712775, lng: -74.005973 },
    "Boston": { lat: 42.360082, lng: -71.05888 },
    "Washington D.C.": {lat:38.90341, lng:-77.0374563},
    "Baltimore": {lat:39.293899, lng:-76.6141273},
    "Orlando": {lat:28.5381547, lng:-81.3787351},

    //mexico
    "Cabo San Lucas": {lat:22.8838959, lng:-109.911845},
    "Tulum": {lat:20.2146102, lng:-87.462878663},
    "CDMX": {lat:19.4326077, lng:-99.133208},

    // canada
    "Vancouver": { lat: 49.282729, lng: -123.120738 },
    "Whistler": { lat: 50.116187, lng: -122.953552 },

  },
  "Africa":{
    //egypt
    "Cairo": {lat: 30.0475123, lng: 31.235489},
    "Hurghada": {lat: 27.2497707, lng: 33.8107667},

    //south africa
    "Cape Town": {lat: -33.898698, lng: 18.4798117},
    
    //madagascar
    "Antananarivo": {lat: -18.887579, lng: 47.512176},
  }
};

// markers currently added
const markers = {
  "North America": [],
  "Europe": [],
  "Asia": [],
  "Australia": [],
  "Africa": [],
  "South America": []
};

function initMap() {
  // map constructor
  const map = new google.maps.Map(document.getElementById("map"), {
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
      text: "Menlo Park",
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
        switch(country){
          case 'Asia':
            map.setCenter({ lat: 29.714699, lng: 118.337521 }); // Huangshan
            break;
            case 'North America':
              map.setCenter({ lat: 40.820744, lng: -96.70047 }); // Nebraska
              break;
              case 'Europe':
                map.setCenter({ lat: 47.050168, lng: 8.309307 });
                break;
                case 'Australia':
                  map.setCenter({ lat: -28.953512, lng: 135.857048 });
                  break;
                case 'Africa':
                  map.setCenter({ lat: -24.4457910, lng: 25.92306747 });
                  break;
                  case 'South America':
                    map.setCenter({ lat: 6.998862, lng: -58.11546371 });

                    break;
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
