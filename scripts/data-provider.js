/* Loads all JSON data */

const fs = require("fs");
const path = require("path");

function loadJSON(filename) {
    const jsonPath = path.join(__dirname, "../data", filename);
    const jsonData = fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(jsonData);
}

module.exports = {
    artists: loadJSON("artists.json"),
    galleries: loadJSON("galleries.json"),
    paintings: loadJSON("paintings-nested.json"),
};