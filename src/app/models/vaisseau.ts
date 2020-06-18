export class Vaisseau {
    id:number;
    nom:string;
    fabricant:string;
    affiliation:string;
    monoplace:boolean;
    nbEquipage:number;
    nbPassagers:number;

    constructor (id:number,nom:string,fabricant:string="unknown",affiliation:string,monoplace:boolean,nbEquipage:number,nbPassagers:number) {
        this.id=id;
        this.nom=nom;
        this.fabricant=fabricant;
        this.affiliation=affiliation;
        this.monoplace=monoplace;
        this.nbEquipage=nbEquipage;
        this.nbPassagers=nbPassagers;

    }
}
