export class Vaisseau {
    id:number;
    nom:string;
    fabricant:string;
    affiliation:string;
    monoplace:boolean;
    nbEquipage:number;
    nbPassagers:number;

    constructor (id:number=null,nom:string=null,fabricant:string="unknown",affiliation:string=null,monoplace:boolean=null,nbEquipage:number=null,nbPassagers:number=null) {
        this.id=id;
        this.nom=nom;
        this.fabricant=fabricant;
        this.affiliation=affiliation;
        this.monoplace=monoplace;
        this.nbEquipage=nbEquipage;
        this.nbPassagers=nbPassagers;

    }
}
