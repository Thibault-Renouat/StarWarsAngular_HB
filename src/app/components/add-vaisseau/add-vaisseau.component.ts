import { Component, OnInit } from '@angular/core';
import {Vaisseau} from "../../models/vaisseau";
import {VaisseauService} from "../../services/vaisseau.service";
import {Router} from "@angular/router";
import {PlanetService} from "../../services/planet.service";

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {

  vaisseau= new Vaisseau();


  constructor(private vaisseauService: VaisseauService, private router:Router) { }

  ngOnInit(): void {
  }

}
