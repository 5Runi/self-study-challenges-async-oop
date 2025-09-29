/**
 * CHALLENGE 1: Bird
 * You are working with National Geographic on a bird tracking application.
 * You are tasked with creating a function that returns objects representing
 * different birds. Each `Bird` object should contain the following properties,
 * which are initially set via arguments when the object is created:
 *
 * `species` (string representing the bird's species)
 * `color` (string representing the bird's color)
 * `locations` (array of locations where the bird has been found)
 *
 * The following methods must also be available to every instance of a Bird object
 * (but not stored on the individual objects themselves):
 * `getColor` (returns the color of the bird)
 * `setColor` (sets a new color for the bird)
 * `getLocations` (returns the locations where the bird was found)
 * `addLocation` (adds a new location to the locations array)
 *
 * The methods that take an argument must accept only one argument, and it must be a string.
 */

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// const newBird = new Bird('canary', 'red', ['newyork', 'spain']);
// console.log(newBird); // => should log { species: 'canary', 'color: 'red', locations: ['newyork', 'spain'] }
// console.log(newBird.getColor()); // => should return 'red'
// newBird.setColor('yellow');
// console.log(newBird.getColor()); // => should return 'yellow'
// newBird.addLocation('france');
// console.log(newBird.getLocations()); // => should return ['newyork', 'spain', 'france'];
/**
 * CHALLENGE 1: Bird
 * You are working with National Geographic on a bird tracking application.
 * You are tasked with creating a function that returns objects representing
 * different birds. Each `Bird` object should contain the following properties,
 * which are initially set via arguments when the object is created:
 *
 * `species` (string representing the bird's species)
 * `color` (string representing the bird's color)
 * `locations` (array of locations where the bird has been found)
 *
 * The following methods must also be available to every instance of a Bird object
 * (but not stored on the individual objects themselves):
 * `getColor` (returns the color of the bird)
 * `setColor` (sets a new color for the bird)
 * `getLocations` (returns the locations where the bird was found)
 * `addLocation` (adds a new location to the locations array)
 *
 * The methods that take an argument must accept only one argument, and it must be a string.
 */
// class Bird {//this also works with the new keyword but our prototype chain was empty, 
// because the methods are existing on the object it creates, which doesn't fulfill our request
//     constructor(species, color, locations){
//         this.species = species
//         this.color = color
//         this.locations = locations
//     }
//     getColor(){
//         return this.color;
//     }
//     setColor(newColor){
//         this.color = newColor;
//     }


// }


function Bird(species, color, locations){//we are using this with the new keyword since it was given
    //new creates an empty object; sets the prototype equal to the function calling it; and attaches
    //the 'this' keyword which will refer to the newly created instance of the object;
    //const bird = Object.create(birdMethods);
    this.species = species;
    this.color = color;
    this.locations = locations;
    this.caius = "blah!"
    this.sayHi = () => {console.log("Howdy");}
    //console.log("Test bird === this: ", bird === this );
    // this.birdMethods = {
    //     birdMethods = {
    // getColor(species){
    //      console.log(`The color of the ${this.species} is ${this.color}`);
    //     return this.color;
    // },
    // setColor(newColor){
    //      this.color = newColor;
    // }
    //return bird;
}
        //return Object.assign(bird, birdMethods);
        //would this also work? // Alternatively, using spread syntax:
  // return { ...character, ...characterMethods };
    
//}

const birdMethods = {
    getColor(species){
         console.log(`The color of the ${this.species} is ${this.color}`);
        return this.color;
    },
    setColor(newColor){
         this.color = newColor;
    }
    // getLocations(){
    //     console.log(`This bird has been seen ${this.locations}`);
    // },
    // setLocations(str){

   // }
}
Bird.prototype = birdMethods;




// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const newBird = new Bird('canary', 'red', ['newyork', 'spain']);
console.log(Object.getPrototypeOf(newBird));
console.log(newBird); // => should log { species: 'canary', 'color: 'red', locations: ['newyork', 'spain'] }
console.log(newBird.getColor()); // => should return 'red'
newBird.setColor('yellow');
console.log(newBird.getColor()); //shoulretur'yellow'
console.log(newBird.caius)
newBird.sayHi();
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(newBird)));
//newBird.addLocation('france');
// console.log(newBird.getLocations()); // => should return ['newyork', 'spain', 'france'];



/**Success condition: 1. a function that returns objects
 *  these objects 1. each represent different birds: with properties entered into the 
 * object as arguments when the object is created: species(str), color (str), location (array of locations of sightings)
 * Also create an object of functions available to all objects: getColor (returns the color of the bird); 
 * setColor(sets a new color for the bird); getLocations(returns locations of sightings)
 * addLocations(adds new location to the locations array)- if any arguments to any of the methods- limited to one, and in form of string
 * 
 * Input: properties as arguments 
 * 
 * Output: objects of bird species and an object of methods
 * 
 * Action/ to know: use a function to create an object/ the function will have 3 parameters: species, color, locations. 
 * So am i creating a object factory? Oh... apparently its a factory function.
 * 
 * Ok, a challenge is going to be how to have each object created have access to a methods object
 *             
 */