import { School } from './school';

class Elementary extends School {
    
    atsemName: string;
    
	constructor(name: string, adress: string, directorName: string, schoolType: string, atsemName:string) {

  		super(name, adress, directorName, schoolType);
    	this.atsemName = atsemName;

  	}

	schoolPresentation() {
		console.log(`${this.schoolType} ${this.name} vous souhaite la bienvenue, elle est située ${this.adress} et son directeur est ${this.directorName}`);
        console.log(`L'atsem de votre enfant se nomme ${this.atsemName}`);
  	}

}

const elementarySchool = new Elementary("Ecole Jean de la Fontaine", "Rue des noisetiers à Toulouse", "Mr Eddy Donmarcel", "Primaire", "Camille Onette");
elementarySchool.schoolPresentation();