import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  myText: string;
  constructor() {
    this.myText= "c\'est moi !!!"
  }
}
