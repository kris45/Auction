/**
 * Created by My on 09.06.2017.
*/

$(document).ready(function () {

/* Slider */

    var current = 0;
    var pixels = 700;
    var liLength = $('#slider-list').find('li').length;
    var min = -((liLength - 1) * pixels);
    var max = 0;

    $('#button-left').on('click', function(){
    	if (current != max) {
    		current += pixels;
    		$('#slider-list').animate({ left : current + 'px'}, 500);
    	}
    });

    $('#button-right').on('click', function(){
    	if (current != min) {
			current -= pixels;
    		$('#slider-list').animate({ left : current + 'px'}, 500);
    	}
    });

/* Top menu */

    var start = $('#stick_menu').offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= start) {
            if (!$('#stick_menu').hasClass()) {
                $('#stick_menu').addClass('stick');
            }
        }
        else {
            $('#stick_menu').removeClass('stick');
        }
    });

/* Log In */

    $('#logIn').click(function(e) {
        e.preventDefault();
        $('#logIn-block').css({'display': 'block', 'overflow': 'auto'});
        $('body').css({'overflow': 'hidden'});
    });

    $('#logIn-block').click(function(e) {
        e.preventDefault();
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if (this == target) {
            $('#logIn-block').css({'display': 'none'});
            $('body').css({'overflow': 'auto'});
        }
    })

/* Sign Up */

    $('#signUp').click(function(e) {
        e.preventDefault();
        $('#signUp-block').css({'display': 'block', 'overflow': 'auto'});
        $('body').css({'overflow': 'hidden'});
    });

    $('#signUp-block').click(function(e) {
        e.preventDefault();
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if (this == target) {
            $('#signUp-block').css({'display': 'none'});
            $('body').css({'overflow': 'auto'});
        }
    });


/* Sign up button */

    $('#signUpBtn').click(function() {
        console.log($("#signUp-form").serializeArray());
        $.ajax({
            url: 'http://localhost:8080/user/signup/',
            type: "POST",
            data : $("#signUp-form").serializeArray(),
            crossDomain: true,
            cache: false,
            dataType: 'jsonp',
            success: function (data) {
                console.log("User has been registered successfully");
            },
            error: function(xhr){
                console.log(JSON.stringify(xhr));
            }
        });
    });

    function loadImages() {

    }


/* Share fb tw */

    $('#fb').click(function() {
        Share.facebook('http://localhost:3000/','AuctionZip','http://localhost:3000/img/slide1.png','Best auction site');
    });

    $('#tw').click(function() {
        Share.twitter('http://localhost:3000/','AuctionZip','http://localhost:3000/img/slide1.png','Best auction site');
    });


    Share = {
    	facebook: function(purl, ptitle, pimg, text) {
    		url  = 'http://www.facebook.com/sharer.php?s=100';
    		url += '&p[title]='     + encodeURIComponent(ptitle);
    		url += '&p[summary]='   + encodeURIComponent(text);
    		url += '&p[url]='       + encodeURIComponent(purl);
    		url += '&p[images][0]=' + encodeURIComponent(pimg);
    		Share.popup(url);
    	},
    	twitter: function(purl, ptitle) {
    		url  = 'http://twitter.com/share?';
    		url += 'text='      + encodeURIComponent(ptitle);
    		url += '&url='      + encodeURIComponent(purl);
    		url += '&counturl=' + encodeURIComponent(purl);
    		Share.popup(url);
    	},

    	popup: function(url) {
    		window.open(url,'','toolbar=0,status=0,width=626,height=436');
    	}
    };

/* Array of lots */

    var allLots = [
        {name: "5 WHITE INTEL IMAC 20", price: 75, endDate: new Date(2017, 6, 18, 14), src: "img/block/IT/lot1.png", category: "IT"},
        {name: "17 - ALUMINUM IMAC 20", price: 245, endDate: new Date(2017, 5, 19, 14), src: "img/block/IT/lot2.png", category: "IT"},
        {name: "16 WHITE MACBOOK (2007)", price: 110, endDate: new Date(2017, 5, 18, 20), src: "img/block/IT/lot3.png", category: "IT"},
        {name: "LOT OF 5 GOLF CARTS", price: 31, endDate: new Date(2017, 5, 18, 14), src: "img/block/golfCarts/lot1.png", category: "golfCarts"},
        {name: "TORO HD WORKMAN DAIHATSU", price: 100, endDate: new Date(2017, 5, 15, 14), src: "img/block/golfCarts/lot2.png", category: "golfCarts"},
        {name: "(4) GOLF CARTS", price: 500, endDate: new Date(2017, 5, 18, 14), src: "img/block/golfCarts/lot3.png", category: "golfCarts"},
        {name: "16 FT TRAILER", price: 650, endDate: new Date(2017, 5, 18, 14), src: "img/block/trailer/lot1.png", category: "trailer"},
        {name: "1999 CUSTOM TILT TRAILER", price: 1051, endDate: new Date(2017, 5, 18, 14), src: "img/block/trailer/lot2.png", category: "trailer"},
        {name: "1990 5610 FORD TRACTOR WITH BRUSH HOG SIDE MOWER", price: 2550, endDate: new Date(2017, 5, 18, 14), src: "img/block/tractors/lot1.png", category: "tractors"},
        {name: "2002 JOHN DEERE 5420 TRACTOR WITH 2005 TIGER SIDE FLAIL MOWER", price: 8600, endDate: new Date(2017, 5, 18, 14), src: "img/block/tractors/lot2.png", category: "tractors"},
        {name: "1970 IH 140 YELLOW BIRD INTERNATIONAL HARVESTER", price: 2500, endDate: new Date(2017, 5, 18, 14), src: "img/block/tractors/lot3.png", category: "tractors"},
        {name: "TIGER FLAIL SIDE MOWER", price: 26, endDate: new Date(2017, 5, 18, 14), src: "img/block/tractors/lot4.png", category: "tractors"},
        {name: "CLUB CAR UTILITY CART", price: 150, endDate: new Date(2017, 5, 18, 14), src: "img/block/tractors/lot5.png", category: "tractors"},
        {name: "CLUB CAR UTILITY CART", price: 170, endDate: new Date(2017, 5, 18, 14), src: "img/block/tractors/lot6.png", category: "tractors"},
        {name: "2004 JACOBSEN GREENS KING", price: 100, endDate: new Date(2017, 5, 18, 14), src: "img/block/tractors/lot7.png", category: "tractors"},
        {name: "HOMELITE CHAIN SAW", price: 20, endDate: new Date(2017, 5, 18, 14), src: "img/block/tools/lot1.png", category: "tools"},
        {name: "MIKASA TAMPING RAM", price: 50, endDate: new Date(2017, 5, 18, 14), src: "img/block/tools/lot2.png", category: "tools"},
        {name: "FREEZER", price: 61, endDate: new Date(2017, 5, 18, 14), src: "img/block/kitchen/lot1.png", category: "kitchen"},
        {name: "TRAULSEN COMMERCIAL REFRIGERATOR", price: 25, endDate: new Date(2017, 5, 18, 14), src: "img/block/kitchen/lot2.png", category: "kitchen"},
        {name: "THREE COMPARTMENT COMMERICIAL SINK", price: 27, endDate: new Date(2017, 5, 18, 14), src: "img/block/kitchen/lot3.png", category: "kitchen"},
    ];

/*sort by price  */

    sortByPrice(allLots, 'asc');
    displayLots(allLots);
    var currentLots = allLots;

    function sortByPrice(lots, direction) {
        switch (direction) {
            case "asc": {
                lots.sort(function(a,b) {return a.price - b.price;});
                break;
            }
            case "desc": {
                lots.sort(function(a,b) {return b.price - a.price;});
                break;
            }
        }
    }

    function displayLots(lots) {
        var lotsRenderedHtml = _.template("<% lots.forEach(function(lot) { %>" +
        "<div class='lot'>" +
            "<img src='<%-lot.src%>'>" +
            "<h5><%-lot.name%></h5>" +
            "<p>Current Bid: <span>$<%-lot.price%></span></p>" +
            "<p><%-calculateTimeToEnd(lot) %></p>" +
        "</div>" +
        "<% }); %>")({
          lots: lots,
          calculateTimeToEnd : calculateTimeToEnd
        });

        $("#lots").html(lotsRenderedHtml);
    }

    function calculateTimeToEnd(lot) {
        var timeDiff = Math.abs(lot.endDate.getTime() - new Date().getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        var diffHours = Math.ceil(timeDiff / (1000 * 3600)) % 24;
        var message = "Ends in: ";
        if (diffDays > 0) {
            message = message + diffDays + " Days ";
        }
        if (diffHours > 0) {
            message = message + diffHours + " Hours ";
        }
        return message;
    }


    $("#sortByPrice").change(function() {
        sortByPrice(currentLots, this.value);
        displayLots(currentLots);
    });

/* filter by category */

    $("#searchCategory").change(function() {
        applyfilters();
    });

    $("#searchKeywords").on("change paste keyup", function() {
        applyfilters();
    });

    function applyfilters() {
        var keywords = $("#searchKeywords").val();
        var category = $("#searchCategory").val();
        var sortDirection = $("#sortByPrice").val();
        currentLots = filterLots(allLots, keywords, category);
        sortByPrice(currentLots, sortDirection);
        displayLots(currentLots);
    }

    function filterLots(lots, keywords, category) {
        var filteredLots = filterByKeywords(lots, keywords);
        return filterByCategory(filteredLots, category);
    }

    function filterByCategory(lots, category) {
        if (category == "all") {
            return lots;
        }
        var filteredLots = [];
        for (var i in lots) {
            if (lots[i].category.toUpperCase() == category.toUpperCase()) {
                filteredLots.push(lots[i]);
            }
        }
        return filteredLots;
    }

    function filterByKeywords(lots, keywords) {
        if (keywords == undefined || keywords == "") {
            return lots;
        }
        var filteredLots = [];
        for (var i in lots) {
            if (lots[i].name.toUpperCase().includes(keywords.toUpperCase())) {
                filteredLots.push(lots[i]);
            }
        }
        return filteredLots;
    }




 });
