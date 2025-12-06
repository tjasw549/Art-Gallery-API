/* Handles all artist-related API routes */

const jsonMessage = require("./utils.js");

const data = require("./data-provider.js");
const artists = data.artists;

// return all artists
const handleAllArtists = (app) => {
    app.get("/api/artists", (req, resp) => {resp.json(artists)});
};

// return all artists by country
const handleArtistByCountry = (app) => {
    app.get("/api/artists/:country", (req, resp) => {
        const country = req.params.country.toLowerCase();

        const matches = artists.filter(a => a.Nationality.toLowerCase().includes(country));

        // return the matching artists
        if (matches.length > 0) resp.json(matches);
        else resp.json(jsonMessage(`No artist matches found for ${country}`));
    });
};

module.exports = {
    handleAllArtists,
    handleArtistByCountry
};
