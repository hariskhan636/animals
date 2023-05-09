import { Component, OnInit } from '@angular/core';

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
  ];

  constructor() {}

  ngOnInit() {}
}
