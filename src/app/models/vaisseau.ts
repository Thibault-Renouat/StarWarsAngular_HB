export class Vaisseau {
    id:number;
    nom:string;
    fabricant:string;
    affiliation:string;
    monoplace:boolean;
    nbEquipage:number;
    nbPassagers:number;
    image: string;

    constructor (id:number=null,nom:string=null,fabricant:string="unknown",affiliation:string=null,monoplace:boolean=null,nbEquipage:number=null,nbPassagers:number=null,image: string=null) {
        this.id=id;
        this.nom=nom;
        this.fabricant=fabricant;
        this.affiliation=affiliation;
        this.monoplace=monoplace;
        this.nbEquipage=nbEquipage;
        this.nbPassagers=nbPassagers;
        this.image=image;

    }
}
