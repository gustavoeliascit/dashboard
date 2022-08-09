import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { CardComponent } from './card/card.component';
import { ContainerCardsComponent } from './container-cards/container-cards.component';

@NgModule({
  declarations: [TopHeaderComponent, CardComponent, ContainerCardsComponent],
  imports: [
    CommonModule
  ],
  exports :[
    TopHeaderComponent,
    CardComponent,
    ContainerCardsComponent
  ]
})
export class ComponentsModule { }
