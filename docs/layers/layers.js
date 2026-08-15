var wms_layers = [];

var lyr_map2023_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'map2023<br />\
    <img src="styles/legend/map2023_0_0.png" /> 0<br />\
    <img src="styles/legend/map2023_0_1.png" /> 1<br />\
    <img src="styles/legend/map2023_0_2.png" /> 2<br />\
    <img src="styles/legend/map2023_0_3.png" /> 3<br />\
    <img src="styles/legend/map2023_0_4.png" /> 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/map2023_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12839850.000000, 460088.493004, 13276380.000000, 821441.491666]
        })
    });

lyr_map2023_0.setVisible(true);
var layersList = [lyr_map2023_0];
