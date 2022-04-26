$.ajax({
    method:'GET',
    url: 'https://api.weather.gov/alerts/active?area=OK',
    dataType: 'json'
}).done(function(data){
    console.log(data);
    $.each(data, function(post, i){
        $('#result').append('<h3>'+post.features[1].properties.event+'</h3><p>'+data.features[1].properties.description+'</p>');
    });
});