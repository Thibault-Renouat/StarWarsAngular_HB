import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/models/planet';
import {Vaisseau} from "../../models/vaisseau";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planetes: Planet[];
  constructor(private planeteService: PlanetService) { }

  ngOnInit(): void {
    // ## VERSION SANS JSON SERVER ## this.planetes= this.planeteService.getAllPlanets();
    this.planeteService.getAllPlanets().subscribe(data => {
      this.planetes=data;
    });

  }

  removePlanet(Planet: Planet):void{
    this.planetes= this.planeteService.removePlanet(Planet);
    //this.showSuccess();
    console.log("fonction remove ok", Planet)
  }


}
