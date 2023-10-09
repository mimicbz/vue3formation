import { School } from './school';
import { Elementary } from './elementary';

const secondarySchool = new School("St Exupery", "Rue des lilas à Poitiers", "Mr Adam Troijours", "Le Lycée");
secondarySchool.greet();

const elementarySchool = new Elementary("Jean de la Fontaine", "Rue des noisetiers à Toulouse", "Mr Eddy Donmarcel", "L'EcolePrimaire", "Camille Onette");
elementarySchool.schoolPresentation();