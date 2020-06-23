import { Component, OnInit } from '@angular/core';
import {Planet} from "../../models/planet";
import {ActivatedRoute, Router} from "@angular/router";
import {PlanetService} from "../../services/planet.service";

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {

  planet: Planet;

  constructor(private activatedRoute: ActivatedRoute, private planeteService: PlanetService, private router: Router) { }

  ngOnInit(): void {
    const id= +this.activatedRoute.snapshot.paramMap.get('id');
    this.planet = this.planeteService.getOnePlanetById(id);
    console.log(this.planet);
  }


    editPlanet() {
    this.planeteService.edit(this.planet);
    this.router.navigate(['/planets'])
    }


  }
