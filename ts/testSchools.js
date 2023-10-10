"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var school_1 = require("./school");
var elementary_1 = require("./elementary");
var secondarySchool = new school_1.School("St Exupery", "Rue des lilas à Poitiers", "Mr Adam Troijours", "Le Lycée", { age: 50, hairColor: "blonds" });
var elementarySchool = new elementary_1.Elementary("Jean de la Fontaine", "Rue des noisetiers à Toulouse", "Mr Eddy Donmarcel", "L'EcolePrimaire", "Camille Onette", { age: 28, hairColor: "chatains" });
secondarySchool.greet();
elementarySchool.schoolPresentation();
