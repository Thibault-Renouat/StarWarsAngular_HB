import { Component, OnInit } from '@angular/core';
import { VaisseauService } from 'src/app/services/vaisseau.service';
import { Vaisseau } from 'src/app/models/vaisseau';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css']
})
export class VaisseauxComponent implements OnInit {
  vaisseaux: Vaisseau[];
  constructor(private vaisseauService: VaisseauService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.vaisseaux= this.vaisseauService.getAllVaisseaux();
  }

  removePlanet(vaisseau: Vaisseau):void{
    this.vaisseaux= this.vaisseauService.removeVaisseau(vaisseau);
    this.showSuccess();
    console.log("fonction remove ok", vaisseau)
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
