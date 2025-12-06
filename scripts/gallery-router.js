/* Handles all gallery-related API routes */

const jsonMessage = require("./utils.js");

const data = require("./data-provider.js");
const galleries = data.galleries;

// return all galleries
const handleAllGalleries = (app) => {
    app.get("/api/galleries", (req, resp) => {resp.json(galleries)}); 
};

// return all galleries by country
const handleGalleriesByCountry = (app) => {
    app.get("/api/galleries/:country", (req, resp) => {
        const country = req.params.country.toLowerCase();
    
        const matches = galleries.filter(g => g.GalleryCountry.toLowerCase().includes(country));
    
        // return the matching galleries
        if (matches.length > 0) resp.json(matches);
        else resp.json(jsonMessage(`No gallery matches found for ${country}`));
    });
};

module.exports = {
    handleAllGalleries,
    handleGalleriesByCountry
};
