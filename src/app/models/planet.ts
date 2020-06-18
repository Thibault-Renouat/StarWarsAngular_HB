export class Planet {
    id:number;
    nom:string;
    descriptif:string;
    population:string;
    nbLunes:number;
    atmosphere:boolean;
    affiliation:string;

    constructor (id:number=null,descriptif:string=null,nom:string=null,population:string=null,nbLunes:number=null,atmosphere:boolean=false,affiliation:string=null) {
        this.id=id;
        this.descriptif=descriptif
        this.nom= nom;
        this.population= population;
        this.nbLunes= nbLunes;
        this.atmosphere= atmosphere;
        this.affiliation= affiliation;
    }

}
