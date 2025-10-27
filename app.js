"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DATATYPES
let name = "darksoul"; //string
let age = 20; // number
let isGraduated = false; // boolean
let skills = ['reactjs', 'typescript', 'backend']; // array
var personalDetails;
(function (personalDetails) {
    personalDetails["PHONENO"] = "7483XXXXXX";
    personalDetails["EMAIL"] = "maheshh.XXXXX1X08@gmail.com";
    personalDetails["GENDER"] = "male";
})(personalDetails || (personalDetails = {})); // enum
let laptop = ['HP', 2024]; // tuple
let a; //any
let b; //unknown (type safety)
function returnData() {
    console.log('Printing Data');
} //void
let c;
let d;
function getData(obj) {
    console.log('details are:');
}
getData({ name: "Darksoul", age: 20, isGraduated: false });
let alias = 234;
// CLASSES 
class BottleMaker {
    name;
    price;
    isMetal;
    constructor(name, price, isMetal) {
        this.name = name;
        this.price = price;
        this.isMetal = isMetal;
    }
}
let b1 = new BottleMaker("Milton", 1000, true);
// Access modifiers, readonly
// optional properties, paramter properties
// getters and setters
// static, abstract classes
//# sourceMappingURL=app.js.map