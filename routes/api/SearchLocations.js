const fetch = require('node-fetch');
const express = require('express');

module.exports = (app) => {
    let zipcode = '';
    let geolocation;
    app.post('/search-location', (req, res) => {
        zipcode = req.body.zipcode;
        if(!zipcode || zipcode.length < 5 || zipcode.length > 5) {
            res.redirect('/error');
        } else {
            // res.redirect('/current-weather');
        }
    });

    app.get('/search-location-weather', (req, res) => {
        geolocation = {lat: Number(req.query.lat), lng: Number(req.query.lng)};
        console.log(geolocation);
        if(zipcode === '') {
            fetch(`https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${geolocation.lat},${geolocation.lng}`)
            .then(res => res.json())
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.redirect('/error');
            });               
        }
        else {
            const googleGeocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_API_KEY}&components=postal_code:${zipcode}`;

            let lat, lng;
            let response = {}
            fetch(googleGeocodeUrl)
            .then(res => res.json())
            .then(data => {
                response.geocode = data;
                lat = data.results[0].geometry.location.lat;
                lng = data.results[0].geometry.location.lng;
            })
            .then( data => {
                fetch(`https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${lat},${lng}`)
                .then(res => res.json())
                .then(data => {
                    response.weather = data;
                    console.log(response.geocode)
                    res.send(data);
                })
                .catch(err => {
                    res.redirect('/error');
                });   
            })
        }
    })
}
