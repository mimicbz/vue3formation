import { School } from './school';
import { Elementary } from './elementary';

const secondarySchool = new School("St Exupery", "Rue des lilas à Poitiers", "Mr Adam Troijours", "Le Lycée", {age: 50, hairColor: "blonds"});
secondarySchool.greet();

const elementarySchool = new Elementary("Jean de la Fontaine", "Rue des noisetiers à Toulouse", "Mr Eddy Donmarcel", "L'EcolePrimaire", "Camille Onette", { age: 28, hairColor: "chatains" });
elementarySchool.schoolPresentation();