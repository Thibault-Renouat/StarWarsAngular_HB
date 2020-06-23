import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import {Vaisseau} from "../models/vaisseau";


@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  planets =[
    new Planet (1,"Berceau ancestral des Sith","Korriban",null,0,true,"Empire"),
    new Planet (2,"Siège de la République","Coruscant","42 Milliards",2,true,"République")

  ];

  constructor() {}

    getAllPlanets():Planet[] {
      return this.planets;

    }
    getOnePlanetById(id:number):Planet {
    console.log(this.planets.filter(fn => fn.id === id )[0]);

    return this.planets.filter(fn => fn.id === id )[0];
  }

    addPlanet(planet: Planet): void {
    this.planets.push(planet);
    }

    removePlanet(planet: Planet) : Planet[] {
    this.planets=this.planets.filter( PlanetToRemove => planet!== PlanetToRemove);
    return this.planets;
  }


  edit(planet: Planet): Planet[] {
    this.planets.filter(planetToUpdate => planet === planetToUpdate)[0] = planet;
    // TODO toaster
    return this.planets;
    }



  }
