import { Component, OnInit } from '@angular/core';
import { AnimalDataService } from '../animalData.service';

@Component({
  selector: 'app-five-animals',
  templateUrl: './five-animals.component.html',
  styleUrls: ['./five-animals.component.css'],
})
export class FiveAnimalsComponent implements OnInit {
  animals: any = [];
  constructor(private dataService: AnimalDataService) {}

  ngOnInit() {
    this.animals = this.dataService.getData();
  }
}
