import { Component, OnInit } from '@angular/core';
import {Vaisseau} from "../../models/vaisseau";
import {ActivatedRoute} from "@angular/router";
import {VaisseauService} from "../../services/vaisseau.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-vaisseau',
  templateUrl: './edit-vaisseau.component.html',
  styleUrls: ['./edit-vaisseau.component.css']
})
export class EditVaisseauComponent implements OnInit {

  vaisseau: Vaisseau;

  constructor(private activatedRoute: ActivatedRoute, private vaisseauService: VaisseauService, private router: Router) { }

  ngOnInit(): void {
    this.vaisseauService.getOneVaisseauById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe((data:Vaisseau) => {this.vaisseau = data});


    /*
        const id= +this.activatedRoute.snapshot.paramMap.get('id');
        this.vaisseau = this.vaisseauService.getOneVaisseauById(id);
        console.log(this.vaisseau);
    */
  }

  editVaisseau() {
    this.vaisseauService.edit(this.vaisseau);
    this.router.navigate(['/vaisseaux'])

  }

}
