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
        console.log(`${this.schoolType} ${this.name} vous souhaite la bienvenue, elle est située ${this.adress} et son directeur est ${this.directorName}`)
    }

}

const secondarySchool = new School("Lycée St Exupery", "Rue des lilas à Poitiers", "Mr Adam Troijours", "Le Lycée");

secondarySchool.greet();