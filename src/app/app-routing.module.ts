import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { VaisseauxComponent } from './components/vaisseaux/vaisseaux.component';
import { HomeComponent } from './components/home/home.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { VaisseauDetailComponent } from './components/vaisseau-detail/vaisseau-detail.component';
import {AddPlanetComponent} from "./components/add-planet/add-planet.component";
import {AddVaisseauComponent} from "./components/add-vaisseau/add-vaisseau.component";


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'vaisseaux', component: VaisseauxComponent},
  { path:'planets', component: PlanetsComponent},
  { path: 'addPlanet', component: AddPlanetComponent},
  { path: 'addVaisseau', component: AddVaisseauComponent},
  { path:'planets/:id', component: PlanetDetailComponent},
  { path:'vaisseaux/:id', component: VaisseauDetailComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
