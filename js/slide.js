setTimeout(function() {
    if (window.location.pathname.includes("index.html")|| window.location.pathname.includes("salon_card.html")) {
        $("#slideshow > div:gt(0)").hide();

        setInterval(function() {
            $("#slideshow > div:first")
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo("#slideshow");
        }, 3000);
    }

}, 100);