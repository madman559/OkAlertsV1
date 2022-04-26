

URL = 'https://api.weather.gov/alerts/active?area=OK';
// alert(URL);

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', URL)
ourRequest.onload = function () {
    // console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    var summary = ourData.features;
    // alert(`There are ${summary.length} weather alets in oklahoma`)
    for (let step = 0; step < summary.length; step++) {
        $('#result').append('<h2>' + summary[step].properties.event + '</h2>')
        $('#result').append('<h4>' + summary[step].properties.headline + '</h4>')
        $('#result').append('<h5>Severity: ' + summary[step].properties.severity + '</h5>')
        $('#result').append('<h5>Urgency: ' + summary[step].properties.urgency + '</h5>')
        $('#result').append('<h5>Certainty: ' + summary[step].properties.certainty+ '</h5>')
        $('#result').append('<p>' + summary[step].properties.description + '</p>');
        $('#result').append('<hr />');

    }
    // console.log(summary);

};

ourRequest.send()

// [2].properties.event