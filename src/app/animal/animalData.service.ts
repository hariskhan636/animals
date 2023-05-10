import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimalDataService {
  private animalsData: any = [];

  constructor() {}

  setData(animals: any) {
    this.animalsData = animals;
  }

  getData() {
    return this.animalsData;
  }
}
