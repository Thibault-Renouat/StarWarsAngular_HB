import { Component, OnInit } from '@angular/core';
import {Planet} from "../../models/planet";
import {ActivatedRoute} from "@angular/router";
import {PlanetService} from "../../services/planet.service";

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  id:number;
  planete:Planet;

  constructor(private route: ActivatedRoute,private planeteService: PlanetService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.planete=this.planeteService.getOnePlanetById(this.id);

  }

}
