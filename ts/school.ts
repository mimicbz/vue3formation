import { Person } from './person';

export class School {

    name: string;
    adress: string;
    directorName: string;
    schoolType: string;
    person: Person;
    
    constructor(name: string, adress: string, directorName: string, schoolType: string, person: Person){
        
        this.name = name;
        this.adress = adress;
        this.directorName = directorName;
        this.schoolType = schoolType;
        this.person = person;

    }
        
    greet(){
        console.log(`${this.schoolType} ${this.name} vous souhaite la bienvenue, elle est située ${this.adress} et son directeur est ${this.directorName}\r\n`);
        console.log(`Le gardien a ${this.person.age} ans et ses cheveux sont ${this.person.hairColor}\r\n`);
    }

}
