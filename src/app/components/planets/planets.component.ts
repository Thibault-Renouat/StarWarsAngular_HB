import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planetes: Planet[];
  constructor(private planeteService: PlanetService) { }

  ngOnInit(): void {
    this.planetes= this.planeteService.getAllPlanets();
  }

}
