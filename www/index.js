$(function () {

        var mouse = { x: null, y: null };
        $(document).mousemove(function(event) {
            mouse.x = event.pageX;
            mouse.y = event.pageY;
        });

    
    Highcharts.setOptions({
        global : {
            useUTC : false
        }
    });

    // Create the chart
    $('#container').highcharts('StockChart', {
        chart : {
            events : {
                load : function () {

                    // set up the updating of the chart each second
                    var seriesX = this.series[0];
                    var seriesY = this.series[1];
                    window.setInterval(function () {
                        var time = (new Date()).getTime();
                        seriesX.addPoint([time, mouse.x], true, true);
                        seriesY.addPoint([time, mouse.y], true, true);
                    }, 50);
                }
            }
        },

        title : {
            text : 'Last known mouse position'
        },

        exporting: {
            enabled: false
        },

        series : [{
            name : 'Horizontal',
            data : (function () {
                // generate an array of random data
                var data = [], time = (new Date()).getTime(), i;

                for (i = -199; i <= 0; i += 1) {
                    data.push([
                        time + i * 1000,
                        mouse.x
                    ]);
                }
                return data;
            }())
        },
        
        {
            name : 'Vertical',
            data : (function () {
                // generate an array of random data
                var data = [], time = (new Date()).getTime(), i;

                for (i = -199; i <= 0; i += 1) {
                    data.push([
                        time + i * 100,
                        mouse.y
                    ]);
                }
                return data;
            }())
        }],
        
        credits: {
          enabled: false
        }
    });

});

