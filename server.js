const path = require('path');
const express = require('express'); 

const app = express();

// root page
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Art Gallery API",
        endpoints: [
            "/api/artists",
            "/api/artists/:country",
            "/api/galleries",
            "/api/galleries/:country",
            "/api/paintings",
            "/api/painting/:id",
            "/api/painting/gallery/:id",
            "/api/painting/artist/:id",
            "/api/painting/year/:min/:max",
            "/api/painting/title/:text",
            "/api/painting/color/:name"
        ]
    });
});

// artists
const artists = require("./scripts/artist-router.js");
artists.handleAllArtists(app);
artists.handleArtistByCountry(app);

// galleries
const galleries = require("./scripts/gallery-router.js");
galleries.handleAllGalleries(app);
galleries.handleGalleriesByCountry(app);

// paintings
const paintings = require("./scripts/painting-router.js");
paintings.handleAllPaintings(app);
paintings.handlePaintingByID(app);
paintings.handlePaintingByGallery(app);
paintings.handlePaintingByArtist(app);
paintings.handlePaintingByYear(app);
paintings.handlePaintingByTitle(app);
paintings.handlePaintingByColor(app);

// Use express to listen to port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server running at port = " + port);
}); 