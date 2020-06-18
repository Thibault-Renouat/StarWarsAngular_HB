import { Component, OnInit } from '@angular/core';
import {Planet} from "../../models/planet";
import {Vaisseau} from "../../models/vaisseau";

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {

  vaisseau:Vaisseau;


  constructor() { }

  ngOnInit(): void {
  }

}
