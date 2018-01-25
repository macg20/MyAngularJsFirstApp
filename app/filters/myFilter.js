//simple filter
app.filter("myFilter", function () {
    return function (x) {
        var i,c, text = "";
        for (i=0; i<x.length; i++) {
            c = x[i];
            if( i%2 == 0) {
               c = c.toUpperCase()
            }
            text +=c;
        }
        return text;
    }
});