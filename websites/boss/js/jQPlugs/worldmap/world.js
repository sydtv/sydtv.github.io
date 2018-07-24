var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * SVG path for plane icon
 */
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "",
    "alpha": 1,


    "dataProvider": {
        "map": "worldLow",
        "zoomLevel": 3.5,
        "zoomLongitude": -55,
        "zoomLatitude": 42,
        "alpha": 1,

        "lines": [ {
            "id": "line1",
            "arc": -0.85,
            "alpha": 1,
            "latitudes": [ 48.8567, 43.8163, 34.3, 23 ],
            "longitudes": [ 2.3510, -79.4287, -118.15, -82 ]
        }, {
            "id": "line2",
            "alpha": 1,
            "color": "#000000",
            "latitudes": [ 48.8567, 43.8163, 34.3, 23 ],
            "longitudes": [ 2.3510, -79.4287, -118.15, -82 ]
        } ],
        "images": [ {
            "svgPath": targetSVG,
            "title": "Store, Paris",
            "latitude": 48.8567,
            "longitude": 2.3510,
            "color": "#ffffff"
        }, {
            "svgPath": targetSVG,
            "title": "Office, Toronto",
            "latitude": 43.8163,
            "longitude": -79.4287,
            "color": "#ffffff"
        }, {
            "svgPath": targetSVG,
            "title": "Production, Los Angeles",
            "latitude": 34.3,
            "longitude": -118.15,
            "color": "#ffffff"
        }, {
            "svgPath": targetSVG,
            "title": "Woodery, Havana",
            "latitude": 23,
            "longitude": -82,
            "color": "#ffffff"
        }, {
            "svgPath": planeSVG,
            "positionOnLine": 0,
            "color": "#ffffff",
            "alpha": 0,
            "animateAlongLine": true,
            "lineId": "line2",
            "flipDirection": true,
            "loop": true,
            "scale": 0.03,
            "positionScale": 1.3
        }, {
            "svgPath": planeSVG,
            "positionOnLine": 0,
            "color": "#ffffff",
            "animateAlongLine": true,
            "lineId": "line1",
            "flipDirection": true,
            "loop": true,
            "scale": 0.03,
            "positionScale": 1.8,
            "alpha": 1
        } ]
    },

    "areasSettings": {
        "unlistedAreasColor": "#000000",
        "alpha": 1
    },

    "imagesSettings": {
        "color": "#ffffff",
        "rollOverColor": "#ffffff",
        "selectedColor": "#ffffff",
        "pauseDuration": 0.2,
        "animationDuration": 2.5,
        "adjustAnimationSpeed": true,
        "alpha": 1
    },

    "linesSettings": {
        "color": "#ffffff",
        "alpha": 1
    },

    "export": {
        "enabled": false
    }

} );