/* Handles all painting-related API routes */

const jsonMessage = require("./utils.js");

const data = require("./data-provider.js");
const paintings = data.paintings;

// return all paintings
const handleAllPaintings = (app) => {
    app.get("/api/paintings", (req, resp) => {resp.json(paintings)});
};

// return painting by ID 
const handlePaintingByID = (app) => {
    app.get("/api/painting/:id", (req, resp) => {
        const id = parseInt(req.params.id);
    
        const match = paintings.find(p => p.paintingID === id);
    
        if (match) resp.json(match);
        else resp.json(jsonMessage(`No painting found with ID ${id}`));
    });
};

// return paintings by gallery ID
const handlePaintingByGallery = (app) => {
    app.get("/api/painting/gallery/:galleryID", (req, resp) => {
        const galleryID = parseInt(req.params.galleryID);
    
        const matches = paintings.filter(p => p.gallery.galleryID === galleryID);
    
        if (matches.length > 0) resp.json(matches);
        else resp.json(jsonMessage(`No paintings found for gallery ID ${galleryID}`));
    });
};

// return paintings by artist ID
const handlePaintingByArtist = (app) => {
    app.get("/api/painting/artist/:artistID", (req, resp) => {
        const artistID = parseInt(req.params.artistID);
    
        const matches = paintings.filter(p => p.artist.artistID === artistID);
    
        if (matches.length > 0) resp.json(matches);
        else resp.json(jsonMessage(`No paintings found for artist ID ${artistID}`));
    });
};

// return paintings by year range
const handlePaintingByYear = (app) => {
    app.get("/api/painting/year/:min/:max", (req, resp) => {
        const min = parseInt(req.params.min);
        const max = parseInt(req.params.max);
    
        const matches = paintings.filter(p => p.yearOfWork >= min && p.yearOfWork <= max);
    
        if (matches.length > 0) resp.json(matches);
        else resp.json(jsonMessage(`No paintings found between years ${min} and ${max}`));
    });
};

// return paintings by title search
const handlePaintingByTitle = (app) => {
    app.get("/api/painting/title/:text", (req, resp) => {
        const text = req.params.text.toLowerCase();
    
        const matches = paintings.filter(p => p.title.toLowerCase().includes(text));
    
        if (matches.length > 0) resp.json(matches);
        else resp.json(jsonMessage(`No paintings found with title containing '${text}'`));
    });
};

// return paintings by color name
const handlePaintingByColor = (app) => {
    app.get("/api/painting/color/:name", (req, resp) => {
        const name = req.params.name.toLowerCase();
    
        const matches = paintings.filter(p => 
            p.details.annotation.dominantColors.some(dc => dc.name.toLowerCase().includes(name))
        );
    
        if (matches.length > 0) resp.json(matches);
        else resp.json(jsonMessage(`No paintings found with color '${name}'`));
    });
};

module.exports = {
    handleAllPaintings,
    handlePaintingByID,
    handlePaintingByGallery,
    handlePaintingByArtist,
    handlePaintingByYear,
    handlePaintingByTitle,
    handlePaintingByColor
};
