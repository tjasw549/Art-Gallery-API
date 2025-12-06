const fs = require('fs');
const path = require('path');
const express = require('express'); 

const file = "artists.json";
const jsonPath = path.join(__dirname, "data", file);

// read file contents synchronously
const jsonData = fs.readFileSync(jsonPath, 'utf8');

// convert string data into JSON object
const artists = JSON.parse(jsonData);

// create an express app
const app = express();

app.get("/api/artists", (req, resp) => { resp.json(artists) } ); 



/*
// return all artists by country (case-insensitive)
app.get("/api/artists/:country", (req, resp) => {
    const country = req.params.country.toLowerCase();

    const matches = artists.filter( (a) => 
        a.Nationality && a.Nationality.toLowerCase() === country
    );

//    if (matches.length === 0) {
//        return resp.json({
//            message: `No artists found from ${req.params.country}`
//        });
//    }

    // return the matching stocks
    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No artist matches found for ${country}`));
 }

    resp.json(matches);
});


// return all the stocks whose name contains the supplied text
app.get('/stock/name/:substring', (req,resp) => {
    // change user supplied substring to lower case
    const substring = req.params.substring.toLowerCase();
 
    // search the array of objects for a match
    const matches = stocks.filter( (obj) =>
        obj.name.toLowerCase().includes(substring) );
 
    // return the matching stocks
    resp.json(matches);
}); 
*/


// Use express to listen to port
let port = 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
}); 