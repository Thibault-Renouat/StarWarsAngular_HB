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
    /*### SANS JSON SERVER ###
     this.vaisseaux= this.vaisseauService.getAllVaisseaux();
     */

    this.vaisseauService.getAllVaisseaux().subscribe((data: Vaisseau[]) => {
      this.vaisseaux = data
    });


  }

  removeVaisseau(id:number):void{
    //this.vaisseaux= this.vaisseauService.removeVaisseau(vaisseau);
    this.vaisseauService.removeVaisseau(id).subscribe(then => {
      this.showSuccess();
      this.vaisseauService.getAllVaisseaux().subscribe((data: Vaisseau[]) => {
        this.vaisseaux = data;
      })
    })

    //console.log("fonction remove ok", vaisseau)
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
