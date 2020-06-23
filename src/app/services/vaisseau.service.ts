import { Injectable } from '@angular/core';
import { Vaisseau } from '../models/vaisseau';
import {callbackify} from "util";

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  vaisseaux = [
    new Vaisseau(1,"Chasseur Tie","Chantier naval de Kuat","Empire",true,1,0),
    new Vaisseau(2,"X-wing","Incom-Freitek","République",true,1,0)

  ];

  constructor() {}
    getAllVaisseaux():Vaisseau[] {
      return this.vaisseaux;
    }

    getOneVaisseauById(id:number):Vaisseau {
      console.log(this.vaisseaux.filter(fn => fn.id === id )[0]);

      return this.vaisseaux.filter(fn => fn.id === id )[0];

    }

    addVaisseau(vaisseau: Vaisseau): void {
      this.vaisseaux.push(vaisseau)
    }

    removeVaisseau(vaisseau: Vaisseau) : Vaisseau[] {
    this.vaisseaux=this.vaisseaux.filter( vaisseauToRemove => vaisseau!== vaisseauToRemove);
    return this.vaisseaux;
    }

    edit(vaisseau: Vaisseau): Vaisseau[] {
      this.vaisseaux.filter(vaisseauToUpdate => vaisseau === vaisseauToUpdate)[0]= vaisseau;
      return this.vaisseaux;

    }
}
