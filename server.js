const fs = require('fs');
const path = require('path');
const express = require('express'); 

const jsonMessage = (msg) => {
    return { message : msg };
};

const file = "artists.json";
const jsonPath = path.join(__dirname, "data", file);
const jsonData = fs.readFileSync(jsonPath, 'utf8');
const artists = JSON.parse(jsonData);

const app = express();

// return all artists
app.get("/api/artists", (req, resp) => { resp.json(artists) } ); 

// return all artists by country (case-insensitive)
app.get("/api/artists/:country", (req, resp) => {
    const country = req.params.country.toLowerCase();

    const matches = artists.filter( (a) => 
        a.Nationality.toLowerCase().includes(country) 
    );

    // return the matching artists
    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No artist matches found for ${country}`));
    }
});

// Use express to listen to port
let port = 8080;
app.listen(port, () => {
    console.log("Server running at port = " + port);
}); 