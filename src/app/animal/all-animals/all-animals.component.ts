import { Component, OnInit } from '@angular/core';
import { AnimalDataService } from '../animalData.service';

@Component({
  selector: 'app-all-animals',
  templateUrl: './all-animals.component.html',
  styleUrls: ['./all-animals.component.css'],
})
export class AllAnimalsComponent implements OnInit {
  animalList = [
    {
      name: 'Meowsy',
      species: 'cat',
      foods: {
        likes: ['tuna', 'catnip'],
        dislikes: ['ham', 'zucchini'],
      },
    },
    {
      name: 'Barky',
      species: 'dog',
      foods: {
        likes: ['bones', 'carrots'],
        dislikes: ['tuna'],
      },
    },
    {
      name: 'Purrpaws',
      species: 'cat',
      foods: {
        likes: ['mice'],
        dislikes: ['cookies'],
      },
    },
    {
      name: 'Tweety',
      species: 'parrot',
      foods: {
        likes: ['millet'],
        dislikes: ['apple'],
      },
    },
    {
      name: 'Harry',
      species: 'goat',
      foods: {
        likes: ['grass'],
        dislikes: ['meat'],
      },
    },
    {
      name: 'Bugs',
      species: 'rabbit',
      foods: {
        likes: ['carrot'],
        dislikes: ['peas'],
      },
    },
    {
      name: 'Jerry',
      species: 'hamster',
      foods: {
        likes: ['cheese'],
        dislikes: ['spinach'],
      },
    },
    {
      name: 'Sylvester',
      species: 'cat',
      foods: {
        likes: ['milk'],
        dislikes: ['cookies'],
      },
    },
    {
      name: 'Mario',
      species: 'dog',
      foods: {
        likes: ['chicken'],
        dislikes: ['milk'],
      },
    },
    {
      name: 'Simba',
      species: 'lion',
      foods: {
        likes: ['beef'],
        dislikes: ['vegetable'],
      },
    },
  ];

  constructor(private dataService: AnimalDataService) {}

  ngOnInit() {
    const selectedAnimals = this.animalList.slice(0, 5);
    this.dataService.setData(selectedAnimals);
  }
}
