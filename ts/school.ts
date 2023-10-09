export class School {

    name: string;
    adress: string;
    directorName: string;
    schoolType: string;
    
    constructor(name: string, adress: string, directorName: string, schoolType: string){
        this.name = name;
        this.adress = adress;
        this.directorName = directorName;
        this.schoolType = schoolType;
    }
    
    greet(){
        console.log(`${this.schoolType} ${this.name} vous souhaite la bienvenue, elle est située ${this.adress} et son directeur est ${this.directorName}`);
    }

}