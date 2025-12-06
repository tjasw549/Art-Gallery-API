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

const galleryFile = "galleries.json";
const galleriesPath = path.join(__dirname, "data", galleryFile);
const galleriesData = fs.readFileSync(galleriesPath, "utf8");
const galleries = JSON.parse(galleriesData);

const paintingsFile = "paintings-nested.json";
const paintingsPath = path.join(__dirname, "data", paintingsFile);
const paintingsData = fs.readFileSync(paintingsPath, "utf8");
const paintings = JSON.parse(paintingsData);

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

// return all galleries
app.get("/api/galleries", (req, resp) => { resp.json(galleries) } ); 

// return all galleries by country (case-insensitive)
app.get("/api/galleries/:country", (req, resp) => {
    const country = req.params.country.toLowerCase();

    const matches = galleries.filter( (g) => 
        g.GalleryCountry.toLowerCase().includes(country) 
    );

    // return the matching galleries
    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No gallery matches found for ${country}`));
    }
});

// return all paintings
app.get("/api/paintings", (req, resp) => { resp.json(paintings) });

app.get("/api/painting/:id", (req, resp) => {
    const id = parseInt(req.params.id);

    const match = paintings.find( p => p.paintingID === id );

    if (match) {
        resp.json(match);
    } else {
        resp.json(jsonMessage(`No painting found with ID ${id}`));
    }
});

app.get("/api/painting/gallery/:galleryID", (req, resp) => {
    const galleryID = parseInt(req.params.galleryID);

    const matches = paintings.filter(p => p.gallery.galleryID === galleryID);

    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No paintings found for gallery ID ${galleryID}`));
    }
});

app.get("/api/painting/artist/:artistID", (req, resp) => {
    const artistID = parseInt(req.params.artistID);

    const matches = paintings.filter(p => p.artist.artistID === artistID);

    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No paintings found for artist ID ${artistID}`));
    }
});

app.get("/api/painting/year/:min/:max", (req, resp) => {
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);

    const matches = paintings.filter( (p) =>
        p.yearOfWork >= min && p.yearOfWork <= max
    );

    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No paintings found between years ${min} and ${max}`));
    }
});

app.get("/api/painting/title/:text", (req, resp) => {
    const text = req.params.text.toLowerCase();

    const matches = paintings.filter( (p) =>
        p.title.toLowerCase().includes(text)
    );

    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No paintings found with title containing '${text}'`));
    }
});

app.get("/api/painting/color/:name", (req, resp) => {
    const name = req.params.name.toLowerCase();

    const matches = paintings.filter( (p) =>
        p.details.annotation.dominantColors.some(dc =>
            dc.name.toLowerCase().includes(name)
        )
    );

    if (matches.length > 0) {
        resp.json(matches);
    } else {
        resp.json(jsonMessage(`No paintings found with color '${name}'`));
    }
});

// Use express to listen to port
let port = 8080;
app.listen(port, () => {
    console.log("Server running at port = " + port);
}); 