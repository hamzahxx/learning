// var sillyName = require("sillyname");
import generateName from "sillyname";
import superHero from "superheroes";

const name = generateName();
const hero = superHero.random();
console.log(`${name} is the supe known as ${hero}`);
