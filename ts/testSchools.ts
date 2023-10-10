import { School } from './school';
import { Elementary } from './elementary';

const secondarySchool = new School("St Exupery", "Rue des lilas à Poitiers", "Mr Adam Troijours", "Le Lycée", {age: 50, hairColor: "blonds"});
const elementarySchool = new Elementary("Jean de la Fontaine", "Rue des noisetiers à Toulouse", "Mr Eddy Donmarcel", "L'Ecole Primaire", "Camille Onette", { age: 28, hairColor: "chatains" });

secondarySchool.greet();
elementarySchool.schoolPresentation();