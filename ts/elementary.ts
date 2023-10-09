import { School } from './school';

export class Elementary extends School {
    
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
