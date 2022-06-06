const turf = require("@turf/turf");
const square1 = require("./square-1.json");
const square2 = require("./square-2.json");
const bothSquares = [square1, square2];

const square1siteArea = turf.area({
  type: "FeatureCollection",
  features: [square1],
});
console.log("Square 1 area", square1siteArea);

const square2siteArea = turf.area({
  type: "FeatureCollection",
  features: [square2],
});
console.log("Square 2 area", square2siteArea);

const unionized = turf.union(...bothSquares);

const unionizedSiteArea = turf.area({
  type: "FeatureCollection",
  features: [unionized],
});

console.log("Unionized squares", JSON.stringify(unionized));
console.log("Unionized area", unionizedSiteArea);
