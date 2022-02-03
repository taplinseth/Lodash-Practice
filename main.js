let _ = require('lodash');

let aListOfNumbers = [8, 45, 71, 23, 75, 99, 103, 5, 61, 2]


let mixedList = [855, "Growth", 2630, 7, "Strength", "Positive Change", 1013, "Laughter"]


const arrayOfTree = [{
    catalogID: 38,
    name: "American Beech",
    growZone: "4-9",
    matureHeightFT: 40,
    specialCare: "Full Sun",
    soilType: ["Acidic", "Clay", "Loamy", "Moist", "Sandy", "Well-drained"]
},
    {
        catalogID: 81,
        name: "River Birch",
        growZone: "4-9",
        matureHeightFT: 70,
        specialCare: "Partial Shade",
        soilType: ["Acidic", "Clay", "Drought-Tolerant", "Loamy", "Moist", "Sandy", "Well-drained", "Wet"]
    },
    {
        catalogID: 90,
        name: "Northern Catalpa",
        growZone: 4-8,
        matureHeightFT: 60,
        specialCare: "Partial Shade",
        soilType: ["Acidic", "Alkaline", "Clay", "Drought-Tolerant", "Loamy", "Moist", "Rich", "Sandy", "Well-drained", "Wet"]
    }]

console.log(aListOfNumbers);

//shuffles numbers
let shuffledNumbers = _.shuffle(aListOfNumbers);
console.log(shuffledNumbers);

//reverses numbers
let reversedNumbers = _.reverse(shuffledNumbers);
console.log(reversedNumbers);

//splits array in half
let splitArray = _.chunk(reversedNumbers, 5);
console.log(splitArray);

//removes last array
let singleArray = _.without(splitArray, splitArray[1]);
console.log(singleArray);

//turns array into string
let str = _.join(singleArray);
console.log(str);



const assert = require('assert');
if (typeof describe === 'function'){
    describe('function', () => {
        it('should check that numbers are shuffled', () => {
            assert.notEqual(aListOfNumbers, shuffledNumbers);
        });
        it('should check that numbers are reversed', () => {
        assert.equal(reversedNumbers, shuffledNumbers.reverse());
        });
        it('should check that array is split', () => {
            assert.equal(splitArray.length, 2);
        });
        it('should check that second array is deleted', () => {
            assert.equal(singleArray.length, 1);
        });
        it('should check that the array is now a string', () => {
            assert.equal(str, singleArray.toString());
        });
    })
}

