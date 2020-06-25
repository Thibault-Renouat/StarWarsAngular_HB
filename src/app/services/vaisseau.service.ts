import { Injectable } from '@angular/core';
import { Vaisseau } from '../models/vaisseau';
import {callbackify} from "util";
import {ToastrService} from "ngx-toastr";
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {throwError, Observable} from "rxjs";
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {

  apiUrlVaisseaux = 'http://localhost:3000/vaisseaux';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  vaisseaux = [
    new Vaisseau(1,"Chasseur Tie","Chantier naval de Kuat","Empire",true,1,0),
    new Vaisseau(2,"X-wing","Incom-Freitek","République",true,1,0)

  ];

  constructor(private toastr: ToastrService, private http: HttpClient ) {}


/* //### SANS JSON SERVER ###
    getAllVaisseaux():Vaisseau[] {
      return this.vaisseaux;
    }
*/
  getAllVaisseaux():Observable<Vaisseau[]> {
    return this.http.get<Vaisseau[]>(this.apiUrlVaisseaux).pipe(retry(1),
      catchError((this.handleError)));
}

/*  ### SANS JSON SERVER ###
    getOneVaisseauById(id:number):Vaisseau {
      console.log(this.vaisseaux.filter(fn => fn.id === id )[0]);

      return this.vaisseaux.filter(fn => fn.id === id )[0];

    }
*/

    getOneVaisseauById(id:number):Observable<Vaisseau> {
      return this.http.get<Vaisseau>(this.apiUrlVaisseaux +'/'+ id).pipe(retry(1),
        catchError((this.handleError)));
    }

/*  ### SANS JSON SERVER ###
    addVaisseau(vaisseau: Vaisseau): void {
      this.vaisseaux.push(vaisseau)
    }
*/

    addVaisseau(vaisseau: Vaisseau): Observable<Vaisseau> {
      return this.http.post<Vaisseau>(this.apiUrlVaisseaux, vaisseau, this.httpOptions).pipe(
        catchError(this.handleError)
      );
    }

/*  //### SANS JSON SERVER ###
    removeVaisseau(vaisseau: Vaisseau) : Vaisseau[] {
    this.vaisseaux=this.vaisseaux.filter( vaisseauToRemove => vaisseau!== vaisseauToRemove);
    return this.vaisseaux;
    }
*/

  removeVaisseau(id: number) : Observable<Vaisseau> {
    return this.http.delete<Vaisseau>(this.apiUrlVaisseaux + '/' + id).pipe(
        retry(1),
      catchError(this.handleError)
    );
  }


    edit(vaisseau: Vaisseau): Vaisseau[] {
      this.vaisseaux.filter(vaisseauToUpdate => vaisseau === vaisseauToUpdate)[0]= vaisseau;
      this.showSuccess();
      return this.vaisseaux;


    }

  showSuccess() {
    this.toastr.success('Edition Réussie!', 'Toastr fun!');
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
