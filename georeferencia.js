function initMap() {
    var P_giza = {
        lat: 29.978996,
        long: 31.132597,
        info: '<strong>La Gran Pirámide de Guiza</strong><br> Terminada alrededor del año 2570 a. C., fue construida para el faraón Keops. Ubicada en Guiza, Egipto, se trata de la más antigua, la más grande y la más duradera de las maravillas.'
    };

    var JC_Babilonia = {
        lat: 32.5422832,
        long: 44.4187006,
        info: '<strong>Los Jardines Colgantes de Babilonia</strong><br> Construidos en 605 a. C.-562 a. C. ubicados en la ciudad de Babilonia, actual Irak. Perduraron hasta no más allá de 126 a. C., cuando la ciudad fue destruida definitivamente por los persas. Es la maravilla cuya existencia suscita más dudas.'
    };

    var T_Artemisa = {
        lat: 37.9493622,
        long: 27.3627619,
        info: '<strong>El Templo de Artemisa</strong><br> En Éfeso (actual Turquía) comenzado a levantar por el rey Creso.3​ Levantado hacia 550 a. C. y destruido por un incendio intencionado en 356 a. C., Alejandro Magno ordenó su reconstrucción, culminada tras su muerte en el año 323 a. C. Antípatro la consideraba la obra más impresionante de su lista con diferencia.'
    };

    var EZ_Olimpia = {
        lat: 37.6379443,
        long: 21.6280254,
        info: '<strong>La Estatua de Zeus en Olimpia</strong><br> Esculpida hacia 430 a. C. por Fidias. Ubicada en el interior del templo dedicado al propio Zeus en la ciudad anfitriona de los famosos juegos.'
    };

    var M_Halicarnazo = {
        lat: 37.0378874,
        long: 27.4241164,
        info: '<strong>El Mausoleo de Halicarnaso</strong><br> Empezado por el sátrapa Mausolo y continuado por su mujer Artemisia hacia 353 a. C. en la ciudad de Halicarnaso ( actual Turquía).3​ Se supone que sobresalía sobre los demás edificios por altura y por el color blanco de los materiales utilizados.5​Su nombre se convirtió en sinónimo de gran monumento funerario.'
    };

    var C_Rodas = {
        lat: 36.451036,
        long: 28.2236972,
        info: '<strong>El Coloso de Rodas</strong><br> Forjado entre 294 a. C. y 282 a. C. por Cares de Lindos y ubicado en el puerto de la ciudad de Rodas en la isla homónima, Grecia, tras derrotar los rodios a Demetrio Poliorcetes.'
    };

    var F_Alejandria = {
        lat: 31.2141667,
        long: 29.885,
        info: '<strong>El Faro de Alejandría</strong><br> Construido entre 285 a. C. y 247 a. C. en la isla de Faros, a la entrada de Alejandría (Egipto), para guiar a los navíos que se dirigían a los dos puertos con que contaba la ciudad. Al igual que la tumba de Mausolo, la torre de Faros hizo lo propio con los edificios construidos para ayudar a la navegación por medio de luces fijas en un sitio elevado.'
    };

    var locations = [
        [P_giza.lat, P_giza.long, P_giza.info],
        [JC_Babilonia.lat, JC_Babilonia.long, JC_Babilonia.info],
        [M_Halicarnazo.lat, M_Halicarnazo.long, M_Halicarnazo.info],
        [C_Rodas.lat, C_Rodas.long, C_Rodas.info],
        [F_Alejandria.lat, F_Alejandria.long, F_Alejandria.info],
        [T_Artemisa.lat, T_Artemisa.long, T_Artemisa.info],
        [EZ_Olimpia.lat, EZ_Olimpia.long, EZ_Olimpia.info],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(-32.3070182, -61.8010903),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][0], locations[i][1]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][2]);
                infowindow.open(map, marker);
            }
        })(marker, i));

    }
    google.maps.event.addDomListener(document.getElementById('M1'),
        'click', function () {
            map.setCenter(new google.maps.LatLng(P_giza.lat, P_giza.long));
            map.setZoom(14);
        });
    google.maps.event.addDomListener(document.getElementById('M2'),
        'click', function () {
            map.setCenter(new google.maps.LatLng(JC_Babilonia.lat, JC_Babilonia.long));
            map.setZoom(14);
        });
    google.maps.event.addDomListener(document.getElementById('M3'),
        'click', function () {
            map.setCenter(new google.maps.LatLng(T_Artemisa.lat, T_Artemisa.long));
            map.setZoom(14);
        });
    google.maps.event.addDomListener(document.getElementById('M4'),
        'click', function () {
            map.setCenter(new google.maps.LatLng(EZ_Olimpia.lat, EZ_Olimpia.long));
            map.setZoom(14);
        });
    google.maps.event.addDomListener(document.getElementById('M5'),
        'click', function () {
            map.setCenter(new google.maps.LatLng(M_Halicarnazo.lat, M_Halicarnazo.long));
            map.setZoom(14);
        });
    google.maps.event.addDomListener(document.getElementById('M6'),
        'click', function () {
            map.setCenter(new google.maps.LatLng(C_Rodas.lat, C_Rodas.long));
            map.setZoom(14);
        });
    google.maps.event.addDomListener(document.getElementById('M7'),
        'click', function () {
            map.setCenter(new google.maps.LatLng(F_Alejandria.lat, F_Alejandria.long));
            map.setZoom(14);
        });
}