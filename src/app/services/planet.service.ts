import { Injectable } from '@angular/core';
import { Planet } from '../models/planet';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  planets =[
    new Planet (1,"Berceau ancestral des Sith","Korriban",null,0,true,"Empire"),
    new Planet (2,"Siège de la République","Coruscant","42 Milliards",2,true,"République")

  ];

  apiUrlPlanets= 'http://localhost:3000/planet';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.planets=[];
  }

    getAllPlanets():Observable<Planet[]> {
      return this.http.get<Planet[]>(this.apiUrlPlanets)
        .pipe(retry(1),
                      catchError(this.handleError));

    }
/*
  //### SANS JSON SERVER ###
    getOnePlanetById(id:number):Planet {
    console.log(this.planets.filter(fn => fn.id === id )[0]);

    return this.planets.filter(fn => fn.id === id )[0];
    }
*/


    getOnePlanetById(id:number):Observable<Planet> {
      return this.http.get<Planet>(this.apiUrlPlanets + '/' + id).pipe(retry(1),catchError(this.handleError));

    }

/*  //### SANS JSON SERVER ###
    addPlanet(planet: Planet): void {
    this.planets.push(planet);

    }
*/

  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(this.apiUrlPlanets, planet, this.httpOptions).pipe(catchError(this.handleError));
  }

/*  //### SANS JSON SERVER ###
    removePlanet(planet: Planet) : Planet[] {
    this.planets=this.planets.filter( PlanetToRemove => planet!== PlanetToRemove);
    return this.planets;
  }
*/

    removePlanet(id: number): Observable<Planet> {
      return this.http.delete<Planet>(this.apiUrlPlanets+'/'+id).pipe(retry(1), catchError(this.handleError));
    }


/* //###  SANS JSON SERVER  ###
  edit(planet: Planet): Planet[] {
    this.planets.filter(planetToUpdate => planet === planetToUpdate)[0] = planet;
    // TODO toaster
    return this.planets;
    }
*/

  edit(planet: Planet) {
    return this.http.put<Planet>(this.apiUrlPlanets +'/'+ planet.id,planet, this.httpOptions).pipe(catchError(this.handleError));
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
