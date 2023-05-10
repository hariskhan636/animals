import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveAnimalsComponent } from './five-animals/five-animals.component';
import { AllAnimalsComponent } from './all-animals/all-animals.component';
import { RouterModule } from '@angular/router';
import { AnimalDataService } from './animalData.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AllAnimalsComponent,
      },
      {
        path: 'five-animals',
        component: FiveAnimalsComponent,
      },
    ]),
  ],

  declarations: [FiveAnimalsComponent, AllAnimalsComponent],
  providers: [AnimalDataService],
})
export class AnimalModule {}
